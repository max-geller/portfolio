import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Contact Section</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p>Contact</p>
          <p>New</p>
        </div>
      </div>
    </div>
  );
}
