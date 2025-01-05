import { NextResponse } from "next/server";
import axios from "axios";
// import { JSDOM } from "jsdom";
import puppeteer from "puppeteer";
import connectMongoDB from "@/lib/dbConnect";
import PbhustleModel from "@/models/PbHustel";

interface ContestRanking {
  rank: number;
  name: string;
  score: number;
}

interface LeaderboardUser {
  name: string;
  score: number;
  consistency: number;
  rank?: number;
}

interface LeaderboardData {
  rankings?: LeaderboardUser[];
  updatedAt?: Date;
  lastContestCode?: string;
}

export async function POST() {
  try {
    console.log("Initializing mongodb connection.");

    const API_URL =
      process.env.VJUDGE_CONTEST_API ||
      "https://vjudge.net/contest/data?draw=2&start=0&length=20&sortDir=desc&sortCol=0&category=mine&running=3&title=&owner=Pbhustle&_=1733642420751";

    console.log(`Fetching contest data from API: ${API_URL}`);
    const { data } = await axios.get(API_URL);
    console.log("Fetched data from API:", data);

    const ccode = data.data[0][0];
    console.log(`Extracted contest code: ${ccode}`);

    const url = `https://vjudge.net/contest/${ccode}#rank`;
    console.log(`Contest URL: ${url}`);

    console.log("Fetching existing leaderboard data from Firestore.");
    const leaderboardDoc = await PbhustleModel.findOne({ name: "leaderboard" });

    const existingData = leaderboardDoc as LeaderboardData | undefined;
    console.log("Existing leaderboard data:", existingData);

    const lastContestCode = existingData?.lastContestCode;
    if (lastContestCode === ccode) {
      console.log("This contest has already been processed. Skipping update.");
      return NextResponse.json({
        message: "Leaderboard is already up-to-date.",
      });
    }

    console.log("Launching Puppeteer browser.");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log("Navigating to contest page.");
    await page.goto(url, { waitUntil: "networkidle2" });

    console.log("Waiting for rank table selector.");
    await page.waitForSelector("#contest-rank-table tbody");

    console.log("Extracting contest rankings from page.");
    const latest: ContestRanking[] = await page.evaluate(() => {
      const rows = Array.from(
        document.querySelectorAll("#contest-rank-table tbody tr")
      );
      return rows.map((row) => {
        const cells = row.querySelectorAll("td");
        return {
          rank: parseInt(cells[0]?.textContent?.trim() || "0"),
          name: cells[1]?.textContent?.trim() || "",
          score: parseInt(cells[2]?.textContent?.trim() || "0"),
        };
      });
    });

    console.log("Extracted rankings:", latest);
    await browser.close();

    console.log("Updating latest contest results in Firestore.");
    await PbhustleModel.findOneAndUpdate({
      name: "latest",
      results: latest,
      updateTime: new Date(),
    });

    let rankings: LeaderboardUser[] = existingData?.rankings || [];
    console.log("Existing rankings:", rankings);

    console.log("Updating rankings with latest contest data.");
    latest.forEach(({ name, score }) => {
      const existingUser = rankings.find((user) => user.name === name);
      if (existingUser) {
        console.log(`Updating existing user: ${name}`);
        existingUser.score += score;
        existingUser.consistency += 1;
      } else {
        console.log(`Adding new user: ${name}`);
        rankings.push({ name, score, consistency: 1 });
      }
    });

    console.log("Sorting rankings.");
    rankings.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.consistency !== a.consistency) return b.consistency - a.consistency;
      return (a.rank || 0) - (b.rank || 0);
    });

    console.log("Assigning ranks.");
    rankings.forEach((user, index) => {
      user.rank = index + 1;
    });

    console.log("Final rankings:", rankings);
    console.log("Updating leaderboard in Firestore.");
    await PbhustleModel.findOneAndUpdate({
      name: "leaderboard",
      rankings,
      updatedAt: new Date(),
      lastContestCode: ccode,
    });

    return NextResponse.json({
      message: "Leaderboard updated successfully",
      rankings,
    });
  } catch (error) {
    console.error("Error updating leaderboard:", error);
    return NextResponse.json({ error: "Failed to update leaderboard" });
  }
}

export async function GET() {
  try {
    console.log("Fetching latest contest results from Firestore.");
    const latestDoc = await PbhustleModel.findOne({ name: "latest" });
    console.log("Fetching leaderboard data from Firestore.");
    const leaderboardDoc = await PbhustleModel.findOne({ name: "leaderboard" });

    console.log("Fetched data successfully:", {
      latest: latestDoc,
      leaderboard: leaderboardDoc,
    });

    return NextResponse.json({
      message: "Fetched hustle data successfully",
      data: {
        latest: latestDoc,
        leaderboard: leaderboardDoc,
      },
    });
  } catch (error) {
    console.error("Error fetching hustle data:", error);
    return NextResponse.json({ error: "Failed to fetch hustle data" });
  }
}
