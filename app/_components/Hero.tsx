import React from "react";
import Link from "next/link";

const List = [
  "Construction Professional",
  "Electrical Estimator",
  "Preconstruction Manager",
  "Web Developer",
  "Data Analyst",
  "Telecom Designer",
  "Aerial Photographer",
  "Software Engineer",
  "FPV Pilot",
  "90s Music Aficionado",
];

export default function Hero() {
  return (
    <div className="flex bg-neutral-400 w-full pt-24 pb-24">
      <div className="flex-auto bg-red-200 h-96 w-32">Hero Text</div>
      <div className="flex-auto bg-red-300 ">Hero Photo</div>
    </div>
  );
}
