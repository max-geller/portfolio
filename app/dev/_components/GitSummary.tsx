import React from "react";
import Link from "next/link";

export default function GitSummary() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">GitHub Summary</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Recent Commits</p>
        </div>
      </div>
    </div>
  );
}
