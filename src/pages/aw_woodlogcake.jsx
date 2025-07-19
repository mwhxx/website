import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_woodlogcake() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("woodlogcake.png")) ||
    portfolioImages[0];

  // ② Store the 'CMC' image object in state. It will no longer change.
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

            {/* Vertical Text "ANIMATION" */}
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.3em]
              "
            >
              CONCEPT{"\u00A0"}ART
            </div>
          </div>

          {/* Right panel: video + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Added Image */}
              <img src={base + "assets/woodlogcake001.png"} className="w-full mb-8" />
              <img src={base + "assets/woodlogcake002.png"} className="w-full mb-8" />

              {/* Title row with Year */}
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className="text-[1.1rem] font-bold"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Wood Log Cake
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  March 2022
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
                  Overview:
                  <br />
                  During the covid-19 pandemic, our project format changed to a
                  proposal. First, we needed to make a full 3D model, a 3D
                  scanned replica of a wood part. We selected to use 3D print,
                  CNC mill, and laser-cut the 3D model, a 3D scanned replica of
                  a wood part. We selected to use 3D print, CNC mill, and
                  laser-cut the replica, and observe how the meaning of the work
                  changes with the application of new material. Our idea
                  replica, and observe how the meaning of the work changes with
                  the application of new material. Our idea is to create a cake
                  imitating the shape of a wood log, like a replica with a
                  difference in texture. For instance, is to create a cake
                  imitating the shape of a wood log, like a replica with a
                  difference in texture. For instance, wood is hard, and cake is
                  soft, similar to exploring new materials. Our 3D model is
                  sliced into four parts, wood is hard, and cake is soft,
                  similar to exploring new materials. Our 3D model is sliced
                  into four parts, and each piece will be replicated with
                  different materials. The size of the sliced models is easier
                  to handle.
                  <br />
                  <br />
                  Expected Final Product:
                  <br />
                  The original Christmas log cake has Christmas decorations, so
                  we need Arduino UNO, breadboard, LED The original Christmas
                  log cake has Christmas decorations, so we need Arduino UNO,
                  breadboard, LED lights strip, and distance sensor for the
                  setup. The LED lights strip is placed on the wood and ABS
                  Plastic lights strip, and distance sensor for the setup. The
                  LED lights strip is placed on the wood and ABS Plastic parts.
                  A distance sensor is needed to measure the audience’s
                  proximity to the replica. The LED light strip parts. A
                  distance sensor is needed to measure the audience’s proximity
                  to the replica. The LED light strip is turned on and will give
                  out lights of different colors when the audience is close.
                  <br />
                  <br />
                  The thermochromic color-changing pigment is put on the sponge
                  since this thermochromic pigment changes at 31⁰C from one
                  color to another. In addition, an elegant wooden base is
                  excellent for displaying the final product and can show the
                  object well. Combined with three parts: brick street pattern
                  rectangle box, abstract flower shelf, as well as rectan- well.
                  Combined with three parts: brick street pattern rectangle box,
                  abstract flower shelf, as well as rectangle object name badge.
                  <br />
                  <br />
                  #Concept Art
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
