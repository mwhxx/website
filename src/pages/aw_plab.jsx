import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_plab() {
  // ① Find the 'plab' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/plab.png")) ||
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
              <Background imageUrl={hoveredImage.src} />
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
                  src="https://www.youtube.com/embed/2OSCLi5D4ks?si=5UMFrI3nfBuen_xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="E-PLS"
                ></iframe>
              </div>

              {/* 2x2 Image Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src="/assets/plab001.png"
                  alt="E-PLS Screenshot 1"
                  className="w-full h-auto"
                />
                <img
                  src="/assets/plab002.png"
                  alt="E-PLS Screenshot 2"
                  className="w-full h-auto"
                />
                <img
                  src="/assets/plab003.png"
                  alt="E-PLS Screenshot 3"
                  className="w-full h-auto"
                />
                <img
                  src="/assets/plab004.png"
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
                  Electronic Practical Lab Simulator Platform
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
                  Sep 2024 – Ongoing
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
                  The Electronic Practical Lab Simulator is an elearning
                  platform developed for pharmacy students at The Chinese
                  University of Hong Kong who are studying the course PHAR2212 -
                  Dosage Form Science II. Through this simulation game, students
                  can repeat key laboratory procedures at any time, which helps
                  them learn more effectively and efficiently. I am responsible
                  for part of the game design, 3D modeling, texture mapping,
                  project web design, and assisting with modifications.
                  <br />
                  <br />
                  The gameplay mainly involves interacting with different lab
                  equipment and answering multiple-choice questions to trigger
                  animations until the experiment is completed. The platform is
                  divided into three main virtual labs. Firstly, Lab 1 focuses
                  on determining the Required Hydrophilic-Lipophilic Balance of
                  unknown oils. Secondly, Lab 2 investigates three types of
                  physical instabilities in emulsions, including creaming, phase
                  inversion, and cracking. Finally, Lab 3 explores the
                  properties and stability of suspensions, covering topics such
                  as suspending agents, antacid systems, and the differences
                  between flocculated and deflocculated systems.
                  <br />
                  <br />
                  <a
                    href="https://www.cuhk.edu.hk/eLearning/proj/PHMCY_VirtualLab/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Explore the project website
                  </a>
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