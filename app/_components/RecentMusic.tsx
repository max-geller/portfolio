import React from "react";
import Link from "next/link";

export default function RecentMusic() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Recent Music</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Music</p>
        </div>
      </div>
    </div>
  );
}
