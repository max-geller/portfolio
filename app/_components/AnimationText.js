"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Electrical Estimator",
        "Preconstruction Manager",
        "Web Developer",
        "Aerial Photographer",
        "Software Engineer",
        "FPV Pilot",
        "90s Music Aficionado",
      ], // Strings to display
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <h3 className="job text-[25px] mb-[35px] font-light">
      <span className="cd-headline clip">
        {" "}
        {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
        <span className="blc">{"I'm "} </span>{" "}
        <span className="cd-words-wrapper">
          <b className="is-visible" ref={el}></b>
        </span>
      </span>
    </h3>
  );
};
export default TypingAnimation;
