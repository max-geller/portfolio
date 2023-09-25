"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navLinks = [
  { id: 1, name: "Home", href: "home" },
  { id: 2, name: "About", href: "career" },
  { id: 3, name: "Portfolio", href: "portfolio" },
  { id: 4, name: "Photo", href: "photo" },
  { id: 6, name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [enabled, setEnabled] = useState(true);
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0   mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Link href="/">MAX GELLER</Link>
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <span className="lg:flex-grow"></span>
        <div>
          <Link
            href="/dev"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-green-400 mr-4"
          >
            DEV
          </Link>
          <a
            href="/photo"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-green-400 mr-4"
          >
            PHOTO
          </a>
          <Link
            href="/career"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-green-400"
          >
            CAREER
          </Link>
        </div>
        <div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? "bg-green-600" : "bg-gray-200",
              "relative inline-flex h-3 w-7 flex-shrink-0 mb-2 ml-3 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-3" : "translate-x-0",
                "pointer-events-none inline-block h-2 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
      </div>
    </nav>
  );
}
