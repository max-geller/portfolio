// Create basic footer react component using Tailwind CSS
import Image from "next/image";
import React from "react";
export default function Footer() {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
        <p className="text-[#333] font-poppins text-xs">Copyright © 2023</p>
      </div>
      <div className="social">
        <ul>
          <li className="mr-[15px] inline-block h-8">
            <a className="text-[#333]" href="#">
              <Image
                className="svg inline-block"
                src="assets/img/social/facebook.svg"
                alt="image"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <Image
                className="svg inline-block"
                src="assets/img/social/twitter.svg"
                alt="image"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="#">
              <Image
                className="svg inline-block"
                src="assets/img/social/instagram.svg"
                alt="image"
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
