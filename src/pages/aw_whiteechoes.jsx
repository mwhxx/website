import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_whiteechoes() {
  // ① Find the 'whiteechoes.png' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/whiteechoes.png")) ||
    portfolioImages[0];

  // ② Store the image object in state. It will no longer change.
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

            {/* Vertical Text */}
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.12em]
              "
            >
              GENERATIVE{"\u00A0"}ART INTERACTIVE{"\u00A0"}ART
            </div>
          </div>

          {/* Right panel: content + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Main Image */}
              <img
                src="/assets/whiteechoes001.png"
                alt="White Echoes installation view"
                className="w-full mb-8"
              />
              <img
                src="/assets/whiteechoes004.png"
                alt="White Echoes installation view"
                className="w-full mb-8"
              />

              {/* === Added Two-Column Video Grid === */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Video 2 */}
                <div className="relative w-full aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/1059291911?h=9ff9ff2dba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute inset-0 w-full h-full"
                    title="White Echoes Video 2"
                  ></iframe>
                </div>
                {/* Video 3 */}
                <div className="relative w-full aspect-video">
                  <iframe
                    src="https://player.vimeo.com/video/1059295800?h=9ff6f30aec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    className="absolute inset-0 w-full h-full"
                    title="White Echoes Video 3"
                  ></iframe>
                </div>
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
                  White Echoes
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    (Exhibited at University of the Arts London, Creative
                    Computing Institute on 4 August 2023)
                  </span>
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Aug 2023
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
                  “White Echoes” is an interactive music player that uses
                  generative art techniques with p5.js and p5.sound to create a
                  dynamic visual experience synchronized with music and audio
                  input. The interface includes user-controlled audio input and
                  GUI elements that allow users to select from multiple music
                  tracks. The visual system is designed to respond to either
                  live audio input or preloaded sound files, dynamically
                  generating visuals that react in real time. The experience is
                  divided into two distinct layers. The first layer consists of
                  horizontal lines made up of small ellipses, which serve as a
                  visual background and act as a reset layer when no audio is
                  detected or playback is paused. The second layer is
                  responsible for the abstract visual output. It generates
                  patterns by analyzing audio frequencies through Fast Fourier
                  Transform (FFT), painting the ellipses into expressive,
                  abstract forms that move and shift according to the intensity
                  and frequency of the sound. This layered approach produces an
                  immersive and responsive generative art experience that
                  visually echoes the music.
                  <br />
                  <br />
                  #Generative Art{"\u00A0\u00A0\u00A0\u00A0"}#Interactive Art
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
