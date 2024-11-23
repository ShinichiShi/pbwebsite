export const metadata = {
  title: "Point Blank",
  description: "Point Blank is a student-run tech community at Dayananda Sagar College of Engineering, Bangalore. We are a group of tech enthusiasts who love to learn and grow together.",
};

// Define the viewport settings separately
export const viewport = {
  initialScale: 1,
  width: 'device-width',
};
import { PinContainer } from "../(default)/Credits/creditcards/credits";
import Hero from "@/components/hero";
import WhatWeDo from "@/components/whatwedo";
import Domains from "@/components/domains";
import "../css/additional-styles/landing.css";
import Activities from "@/components/activities";
import Image from "next/image";
import SparklesText from "@/components/magicui/sparkles-text";
import Achievements from '@/components/achievements';
import Founder from "@/components/founder";
import Share from "@/components/share";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Domains />
      {/* <div className="flex flex-col justify-center items-center py-10 px-5">
        <SparklesText text="Upcoming Events" className="text-4xl font-bold text-center text-gray-200 mb-4" />
        <Image
          src={"/images/recruitment.png"}
          alt="recruitment-poster"
          height={400}
          width={1100}
          className="rounded-3xl mt-20"
        />
        <div className="flex md:flex-row flex-col justify-center items-center py-10 px-5">
          <a href="/recruitment">
            <button className="btn-sm px-5 py-3 text-xl font-bold text-white bg-green-600 mx-3 rounded-xl mt-10">
              Register Now
            </button>
          </a>
        </div>
      </div> */}
      
      <div className="-mt-20"> {/* Adjusted margin for Activities section */}
        <Activities />
        
      </div>
      <Founder />
      <Achievements />
      <Share />
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 mt-2 p-2">
          Website <span className="text-green-500">Contributors:</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[10px]">
        {/* Pin item */}
        <PinContainer
  title="Visit Linkedin"
  href="https://www.linkedin.com/in/skysingh04?"
  className="custom-pin-container-class"
  containerClassName="custom-container-class"
>
  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative bg-gray-900 rounded-md">
    <div className="relative h-full w-full">
      <Image
        src="/images/Akash.jpg"
        alt="Description Image"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 text-left bg-gradient-to-t from-black/60 to-transparent z-10">
        <h3 className="font-bold text-base text-slate-100">Akash Singh</h3>
        <p className="text-base text-slate-300 mt-2">Supervision, Deployment</p>
      </div>
    </div>
  </div>
</PinContainer>

<PinContainer
  title="Visit Linkedin"
  href="https://www.linkedin.com/in/2004-agarwal-yash/"
  className="custom-pin-container-class"
  containerClassName="custom-container-class"
>
  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative bg-gray-900 rounded-md">
    <div className="relative h-full w-full">
      <Image
        src="/images/Yash.jpg"
        alt="Description Image"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 text-left bg-gradient-to-t from-black/60 to-transparent z-10">
        <h3 className="font-bold text-base text-slate-100">Yash Agrawal</h3>
        <p className="text-base text-slate-300 mt-2">Made backend and frontend of leads page</p>
      </div>
    </div>
  </div>
</PinContainer>

<PinContainer
  title="Visit Linkedin"
  href="https://www.linkedin.com/in/alfiyafatima09/"
  className="custom-pin-container-class"
  containerClassName="custom-container-class"
>
  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] relative bg-gray-900 rounded-md">
    <div className="relative h-full w-full">
      <Image
        src="/images/Allfiya.jpg"
        alt="Description Image"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 text-left bg-gradient-to-t from-black/60 to-transparent z-10">
        <h3 className="font-bold text-base text-slate-100">Alfiya Fatima</h3>
        <p className="text-base text-slate-300 mt-2">Authentication, Pbctf registration form, Updates about latest event.</p>
      </div>
    </div>
  </div>
</PinContainer>

        </div>

      <div className="flex md:flex-row flex-col justify-center items-center py-10 px-5">
          <a href="/Credits">
            <button className="btn-sm px-5 py-3 text-xl font-bold text-white bg-green-600 mx-3 rounded-xl mt-10">
              More Contributors:
            </button>
          </a>
        </div>
    </>
  );
}
