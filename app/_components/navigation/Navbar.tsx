import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-white  mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">MAX GELLER</Link>
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <span className="lg:flex-grow"></span>
        <div>
          <Link
            href="/dev"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
          >
            DEV
          </Link>
          <a
            href="/photo"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black mr-4"
          >
            PHOTO
          </a>
          <Link
            href="resume"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-black"
          >
            RESUME
          </Link>
        </div>
      </div>
    </nav>
  );
}
