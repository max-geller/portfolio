// Create basic footer react component using Tailwind CSS
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faYoutube,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
        <p className="text-[#333] font-poppins text-xs">Copyright © 2023</p>
      </div>
      <div className="social">
        <ul>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="http://www.linkedin.com/in/maxgeller"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="http://www.github.com/max-geller">
              <FontAwesomeIcon
                icon={faGithub}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="http://www.x.com/Max_Geller">
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="http://www.instagram.com/maxgeller"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>

          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="http://www.youtube.com/@devmax617">
              <FontAwesomeIcon
                icon={faYoutube}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
