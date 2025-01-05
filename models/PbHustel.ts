import mongoose, { Document, Schema, Model } from "mongoose";

/**
 * Interface for the "latest" document
 */
export interface Latest extends Document {
  name: string; // Always "latest"
  results: {
    rank: number;
    name: string;
    score: number;
  }[];
  updateTime: Date;
}

/**
 * Schema for the "latest" document
 */
const latestSchema = new Schema<Latest>(
  {
    name: {
      type: String,
      required: true,
      default: "latest",
    },
    results: [
      {
        rank: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
      },
    ],
    updateTime: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

/**
 * Interface for the "leaderboard" document
 */
export interface Leaderboard extends Document {
  name: string; // Always "leaderboard"
  rankings: {
    rank: number;
    name: string;
    score: number;
    consistency: number;
  }[];
  lastContestCode: string;
  updatedAt: Date;
}

/**
 * Schema for the "leaderboard" document
 */
const leaderboardSchema = new Schema<Leaderboard>(
  {
    name: {
      type: String,
      required: true,
      default: "leaderboard",
    },
    rankings: [
      {
        rank: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
        consistency: {
          type: Number,
          required: true,
        },
      },
    ],
    lastContestCode: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

/**
 * Models for "latest" and "leaderboard"
 */
export const LatestModel: Model<Latest> =
  mongoose.models.latests || mongoose.model<Latest>("latests", latestSchema);

export const LeaderboardModel: Model<Leaderboard> =
  mongoose.models.leaderboards ||
  mongoose.model<Leaderboard>("leaderboards", leaderboardSchema);
