import React from "react";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Gallery Feed</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>About</p>
        </div>
      </div>
    </div>
  );
}
