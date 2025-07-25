// src/pages/Exhibit.jsx
import React, { useState, useEffect } from "react";
import Background from "../sections/backgroundglow";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

export default function Exhibit() {
  const [isBgVisible, setIsBgVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    setIsBgVisible(true);
    const timer = setTimeout(() => setIsTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background with fade-in */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in ${
          isBgVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Background />
      </div>

      {/* Navbar (static) */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Text block: Aligned left */}
      <div
        className={`
          absolute top-32 left-0 z-10
          w-full
          px-8 md:px-16 lg:px-32
          text-white text-left
          pointer-events-auto
          transition-all duration-700 ease-out
          ${
            isTextVisible
              ? "opacity-90 translate-y-0"
              : "opacity-0 translate-y-4"
          }
        `}
        style={{
          fontFamily:
            "'Intel One Mono','Helvetica','Andale Mono','Lucida Grande'",
        }}
      >
        <h2
          className="font-bold mb-4 tracking-[0.15em]"
          style={{
            fontSize: "1.0rem",
            fontFamily:
              "'Andale Mono','Lucida Grande','Lucida Sans Unicode','Helvetica'",
            letterSpacing: "0.0em",
          }}
        >
          Exhibition
        </h2>

        <p className="mt-2 text-[0.85rem]">
          <a
            href="https://www.scm.cityu.edu.hk/events/scm-annual-2024"
            target="_blank"
            rel="noopener noreferrer"
            // The class is now 'inline-block' to shrink the clickable area to the text size.
            className="inline-block no-underline text-white"
          >
            12 July – 28 July 2024
            <br />
            <strong>SCM Annual 2024</strong>, School of Creative Media, City
            University of Hong Kong, HKSAR
          </a>
        </p>

        <p className="mt-4 text-[0.85rem]">
          <a
            href="https://www.playfulmedia.hk/2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block no-underline text-white"
          >
            14 June – 24 June 2024
            <br />
            <strong>18th SIG Playful Media Showcase 2024</strong>, School of
            Creative Media, City University of Hong Kong, HKSAR
          </a>
        </p>

        <p className="mt-4 text-[0.85rem]">
          <a
            href="https://openprocessing.org/curation/87594/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block no-underline text-white"
          >
            April 2024
            <br />
            <strong>p5.js community sketch 2024</strong>, OpenProcessing
            (Curated by Zainab Aliyu), Virtual / Online
          </a>
        </p>
      </div>

      {/* Footer (static) */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
