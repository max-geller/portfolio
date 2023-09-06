// Create basic footer react component using Tailwind CSS
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faYoutube,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div className="app_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
        <p className="text-[#333] font-poppins text-xs">Copyright © {getCurrentYear()}</p>
      </div>
      <div className="social ">
        <ul>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              target="_blank"
              rel="noopener noreferrer"
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
            <a
              className="text-[#333]"
              href="http://www.github.com/max-geller"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="http://www.x.com/Max_Geller"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>

          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="http://www.youtube.com/@devmax617"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="svg inline-block"
                style={{ color: "black", fontSize: 20 }}
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a className="text-[#333]" href="mailto:mgeller@devmax.io">
              <FontAwesomeIcon
                icon={faEnvelope}
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
