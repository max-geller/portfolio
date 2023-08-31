// Create basic footer react component using Tailwind CSS
import React from "react";
export default function Footer() {
  return (
    <footer className=" pt-10 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Col-1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>
          {/* Links */}
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Installation
          </a>
          <a
            href="#"
            className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
          >
            Release Notes
          </a>
        </div>
      </div>
    </footer>
  );
}