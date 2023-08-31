import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Hero Section</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Hero Section</p>
        </div>
      </div>
    </div>
  );
}
