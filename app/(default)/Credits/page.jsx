import Image from "next/image";
import React from "react";
import { PinContainer } from "./creditcards/credits";

// Function to generate the viewport meta tag (optional)
export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function PinPage() {
  const contributors = [
    {
      name: "Akash Singh",
      role: "Supervision, Deployment",
      image: "/images/Akash.jpg",
      linkedin: "https://www.linkedin.com/in/skysingh04?",
    },
    {
      name: "Yash Agrawal",
      role: "Made backend and frontend of leads page",
      image: "/images/Yash.jpg",
      linkedin: "https://www.linkedin.com/in/2004-agarwal-yash/",
    },
    {
      name: "Alfiya Fatima",
      role: "Authentication, Pbctf registration form, Updates about latest event.",
      image: "/images/Allfiya.jpg",
      linkedin: "https://www.linkedin.com/in/alfiyafatima09/",
    },
    {
      name: "Naman Parlecha",
      role: "Made the entire frontend and Backend of events page.",
      image: "/images/Naman p.jpg",
      linkedin: "https://www.linkedin.com/in/naman-parlecha/",
    },
    {
      name: "Mohit Nagaraj",
      role: "Streamlined SIH Registration API for efficient onboarding.",
      image: "/images/Mohit n.jpg",
      linkedin: "https://www.linkedin.com/in/mohit-nagaraj/",
    },
    {
      name: "Soumya Pattnayak",
      role: "Supervision.",
      image: "/images/Soumya p.jpg",
      linkedin: "https://www.linkedin.com/in/soumya713/",
    },
    {
      name: "Suvan Banerjee",
      role: "Landing Page and Boilerplate for seamless setup.",
      image: "/images/Suvan.jpg",
      linkedin: "https://www.linkedin.com/in/suvanbanerjee",
    },
    {
      name: "Tushar Mohapatra",
      role: "Made the entire Frontend and Backend of Achievements page.",
      image: "/images/Tushar.jpg",
      linkedin: "https://www.linkedin.com/in/tusharmohapatra07",
    },
    {
      name: "Atharv Verma",
      role: "Updated Landing Page UI.",
      image: "/images/Atharv v.jpg",
      linkedin: "https://www.linkedin.com/in/atharv-verma/",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Page heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mt-14 mb-6">
        Website Contributors
      </h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[10px] relative z-10 ">
        {/* Loop through contributors */}
        {contributors.map((contributor, index) => (
          <PinContainer key={index} title="Visit Linkedin" href={contributor.linkedin}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative bg-gray-900 rounded-md">
              <div className="relative h-full w-full">
                <Image
                  src={contributor.image}
                  alt={`Image of ${contributor.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 text-left bg-gradient-to-t from-black/60 to-transparent z-10">
                  <h3 className="font-bold text-base text-slate-100">
                    {contributor.name}
                  </h3>
                  <p className="text-base text-slate-300 mt-2">
                    {contributor.role}
                  </p>
                </div>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
}
