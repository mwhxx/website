import React, { useState } from "react";
import Background from "../sections/icon";
const base = import.meta.env.BASE_URL;
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_liverguardian() {
  // ① Find the 'plab' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("liverguardian.png")) ||
    portfolioImages[0];

  // ② Store the 'plab' image object in state. It will no longer change.
  const [hoveredImage] = useState(defaultImage);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ==== two-panel grid container ==== */}
      {/* Added pt-value to create space below the navbar */}
      <div className="absolute inset-0 z-0 pt-5">
        <div
          className="
            relative grid h-full w-full
            [@media(min-width:1320px)]:grid-cols-[4fr_6fr]
            [@media(max-width:1319px)]:grid-rows-[2fr_1fr]
            [@media(max-width:1319px)]:grid-cols-1
          "
        >
          {/* Left panel: 3D canvas */}
          <div className="relative w-full h-full overflow-hidden">
            {/* Background Canvas */}
            <div
              className="
                absolute top-0 left-1/2 transform -translate-x-1/2
                w-[125vw] [@media(max-width:1319px)]:w-[100vw]
                h-full [@media(max-width:1319px)]:top-[-20vh]
              "
            >
              <Background imageUrl={base + hoveredImage.src} />
            </div>

            {/* Vertical Text "GAME DEVELOPMENT" */}
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.0em]
              "
            >
              GAME{"\u00A0"}DEVELOPMENT
            </div>
          </div>

          {/* Right panel: video + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Vimeo embed */}
              <div className="relative w-full aspect-video mb-8">
                <iframe
                  src="https://www.spatial.io/embed/Liver-Guardian-Paracetamol-Overdose-Challenge-67cacd236db26377e43b2585?share=2685559215277177804"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="E-PLS"
                ></iframe>
              </div>

              {/* 2x2 Image Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src={base + "assets/liverguardian001.png"}
                  alt="E-PLS Screenshot 1"
                  className="w-full h-auto"
                />
                <img
                  src={base + "assets/liverguardian004.png"}
                  alt="E-PLS Screenshot 2"
                  className="w-full h-auto"
                />
                <img
                  src={base + "assets/liverguardian002.png"}
                  alt="E-PLS Screenshot 3"
                  className="w-full h-auto"
                />
                <img
                  src={base + "assets/liverguardian003.png"}
                  alt="E-PLS Screenshot 4"
                  className="w-full h-auto"
                />
              </div>

              {/* Title row with Year */}
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className="text-[1.1rem] font-bold"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Liver Guardian - Paracetamol Overdose Challenge
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    /The Centre for eLearning Innovation and Technology (ELITE),
                    The Chinese University of Hong Kong
                  </span>
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  March 2025
                </span>
              </div>

              {/* Description with max width */}
              <div className="mb-8 max-w-[48rem] text-justify">
                <p
                  className="mb-4 text-[0.85rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  “Liver Guardian” is a multiplayer online game designed to help
                  biomedical sciences students study the concept of liver damage
                  caused by paracetamol. The game helps students visualize and
                  understand how an overdose or excessive use of paracetamol can
                  lead to liver damage. I am responsible for part of the
                  environment modeling and graphic design in this game project.
                  <br />
                  <br />
                  In the human factory environment, a giant paracetamol
                  bottle labeled ‘Paracetamol 500mg’ is prominently placed in
                  front of an emoji-like character to symbolize ingestion. The
                  bottle releases different components representing the
                  metabolites of acetaminophen onto a conveyor belt, clearly
                  demonstrating the metabolic processing of the drug. The
                  students must carefully transfer each pill to the correct
                  machine that corresponds to the appropriate detoxification
                  pathway, such as glucuronide conjugation or sulphate
                  conjugation. If a pill is incorrectly routed or missed
                  altogether, the user’s health points (HP) decrease, and the
                  affected machine dramatically explodes, visually highlighting
                  the critical consequences of errors in drug metabolism. This
                  immersive and interactive gameplay approach reinforces
                  students’ understanding of pharmacological principles and the
                  risks associated with paracetamol misuse.
                  <br />
                  <br />
                  #Game Development
                </p>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>
    </div>
  );
}
