// src/pages/about.jsx
import React from "react";
import Background from "../sections/backgroundglow2";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

export default function About() {
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
          About
        </h2>

        {/* Artist's statement / description */}
        <p
          className="text-[0.9rem] mb-4 max-w-[33em] leading-relaxed text-justify"
          style={{
            fontFamily:
              "'Intel One Mono','Helvetica','Andale Mono','Lucida Grande'",
          }}
        >
          Man Ho WONG is a freelance new media artist whose work traverses the
          boundaries of animation, software art, and interactive art. He
          received a Bachelor of Arts and Science in New Media (BAS) from the
          School of Creative Media, City University of Hong Kong, in June 2024,
          and a short course certificate from the Creative Computing Institute,
          University of the Arts London, in August 2023.
          <br />
          <br />
          After graduation, he working as a Part-Time Assistant Computer Officer
          at the Centre for eLearning Innovation and Technology (ELITE), The
          Chinese University of Hong Kong, to create 3D models, animations,
          digital effects, and web design for immersive learning courseware
          (i.e., 3D interactive game and virtual reality projects).
          <br />
          <br />
          Contact:
          <br />
          Email: wmh0122.wong@icloud.com
          <br />
          WhatsApp: (852) 9709 8366
          <br />
          <br />
          <p
            className="text-[0.9rem] mb-4 max-w-[26em] leading-relaxed text-justify"
            style={{
              fontFamily:
                "'Intel One Mono','Helvetica','Andale Mono','Lucida Grande'",
            }}
          >
            © This website was built with React.js, Three.js, and p5.js, with
            environments modeled in Autodesk Maya 2026.
          </p>
        </p>
      </div>

      {/* Footer on top */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
