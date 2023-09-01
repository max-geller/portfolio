import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">About Section</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>About</p>
          <div className="card w-96 bg-slate-700 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn hover:text-green-400">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
