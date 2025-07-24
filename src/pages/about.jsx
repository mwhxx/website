import React, { useState, useEffect } from "react";
import Background from "../sections/backgroundglow2";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import AnimatedText from "../components/blurtextani";

export default function About() {
  const [isBgVisible, setIsBgVisible] = useState(false);
  // We only need one state now to trigger the text animations
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const bgTimer = setTimeout(() => setIsBgVisible(true), 100);
    // Trigger all text animations to start their staggered sequence
    const textTimer = setTimeout(() => setIsTextVisible(true), 500);

    return () => {
      clearTimeout(bgTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background still uses the "Scale and Fade" effect */}
      <div
        className={`transition-all duration-2500 ease-out ${
          isBgVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <Background />
      </div>

      {/* Navbar on top (no changes) */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Text Content */}
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
          {/* Use the component for the title */}
          <AnimatedText text="About" isVisible={isTextVisible} />
        </h2>

        {/* To handle line breaks, we pass each line to its own component */}
        <p
          className="text-[0.9rem] mb-4 max-w-[34em] leading-relaxed text-justify"
          style={{
            fontFamily:
              "'Intel One Mono','Helvetica','Andale Mono','Lucida Grande'",
          }}
        >
          <AnimatedText
            text="Man Ho WONG is a freelance new media artist whose work traverses the boundaries of animation, software art, and interactive art. He received a Bachelor of Arts and Science in New Media (BAS) from the School of Creative Media, City University of Hong Kong, in June 2024, and a short course certificate from the Creative Computing Institute, University of the Arts London, in August 2023."
            isVisible={isTextVisible}
          />
          <br />
          <br />
          <AnimatedText
            text="After graduation, he working as a Part-Time Assistant Computer Officer at the Centre for eLearning Innovation and Technology (ELITE), The Chinese University of Hong Kong, to create 3D models, animations, digital effects, and web design for immersive learning courseware (i.e., 3D interactive game and virtual reality projects)."
            isVisible={isTextVisible}
          />
          <br />
          <br />
          <AnimatedText text="Contact:" isVisible={isTextVisible} />
          <br />
          <AnimatedText
            text="Email: wmh0122.wong@icloud.com"
            isVisible={isTextVisible}
          />
          <br />
          <AnimatedText
            text="WhatsApp: (852) 9709 8366"
            isVisible={isTextVisible}
          />
        </p>

        <p
          className="text-[0.9rem] mb-4 max-w-[26em] leading-relaxed text-justify"
          style={{
            fontFamily:
              "'Intel One Mono','Helvetica','Andale Mono','Lucida Grande'",
          }}
        >
          <AnimatedText
            text="© This website was built with React.js, Three.js, and p5.js, with environments modeled in Autodesk Maya 2026."
            isVisible={isTextVisible}
          />
        </p>
      </div>

      {/* Footer on top (no changes) */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
