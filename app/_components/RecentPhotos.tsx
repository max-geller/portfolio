import React from "react";
import Link from "next/link";

export default function RecentPhotos() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Recent Photos</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Photo</p>
        </div>
      </div>
    </div>
  );
}
