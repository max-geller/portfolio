// Create a basic tailwind navbar react component

import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-gray-500  mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Max Geller
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 0h20v20H0z" fill="none" />
            <path d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4"
          >
            DEV
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4"
          >
            PHOTO
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-black"
          >
            RESUME
          </a>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded  border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            PHOTO
          </a>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded  border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            DEV
          </a>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded  border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
}
