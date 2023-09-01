import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Dev Hero Section</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Hero text</p>
      </div>
    </div>
  );
}
