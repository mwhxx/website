// src/pages/Exhibit.jsx
import React from "react";
import Background from "../sections/backgroundglow";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

export default function Exhibit() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full-screen 3D background */}
      <Background />

      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Exhibition Content – semi-transparent text with full-line links */}
      <div
        className="
          absolute top-30 left-0 w-full
          px-8 md:px-16 lg:px-32
          text-white text-left z-10
          pointer-events-auto
          opacity-75
        "
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

        <p className="mt-2" style={{ fontSize: "0.85rem" }}>
          <a
            href="https://www.scm.cityu.edu.hk/events/scm-annual-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline text-white"
          >
            12 JUL - 28 JUL 2024
            <br />
            <strong>SCM Annual 2024</strong>, School of Creative Media, City
            University of Hong Kong, HKSAR
          </a>
        </p>

        <p className="mt-4" style={{ fontSize: "0.85rem" }}>
          <a
            href="https://www.playfulmedia.hk/2024/"
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline text-white"
          >
            14 JUN - 24 JUN 2024
            <br />
            <strong>18th SIG Playful Media Showcase 2024</strong>, School of
            Creative Media, City University of Hong Kong, HKSAR
          </a>
        </p>

        <p className="mt-4" style={{ fontSize: "0.85rem" }}>
          <a
            href="https://openprocessing.org/curation/87594/"
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline text-white"
          >
            April 2024
            <br />
            <strong>p5.js community sketch 2024</strong>, OpenProcessing
            (Curated by Zainab Aliyu), Virtual / Online
          </a>
        </p>
      </div>

      {/* Footer on top */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}