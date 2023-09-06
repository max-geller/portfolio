import React from "react";
import Link from "next/link";
import AnimationText from "./AnimationText";

export default function Hero() {
  return (
    <div className="flex flex-grow bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 w-full">
      <div className="flex-auto">
        <span className="text-blue-200">
          <h3 className="name text-[72px] font-bold uppercase mb-[30px]">
            Max Geller
          </h3>
          <span className="line inline-block w-[70px] h-[5px] bg-[#333] mb-[30px]" />
          <AnimationText />
        </span>
        <Link href="/projects">
          <div className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            View Projects
          </div>
        </Link>
      </div>
      <div className="flex-auto"></div>
    </div>
  );
}
