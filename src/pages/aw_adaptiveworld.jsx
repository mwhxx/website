import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_adaptiveworld() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/adaptiveworld.png")) ||
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
              <Background imageUrl={hoveredImage.src} />
            </div>

            {/* Vertical Text "ANIMATION" */}
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

              {/* Added Image */}
              <img src="/assets/ad002.png" className="w-full mb-8" />
              <img src="/assets/ad003.png" className="w-full mb-8" />
              <img src="/assets/ad004.png" className="w-full mb-8" />

              {/* Title row with Year */}
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className="text-[1.1rem] font-bold"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Adaptive World
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  2024 - Ongoing
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
                  In 1831, the British warship “HMS Beagle” set sail from
                  Plymouth to inspect the South American coast. Naturalist
                  Charles Darwin joined the five-year journey. In 1835, the
                  Beagle reached the Galápagos Islands, where Darwin observed
                  slight differences in birds, such as beak thickness,
                  suggesting common ancestry with South American species. He
                  brought bird specimens back to England, where ornithologist
                  John Gould identified them as different finch species. Darwin
                  hypothesized that these birds adapted their beaks to available
                  food sources. This research over 20 years led to his
                  groundbreaking work, “The Origin of Species”. This theory laid
                  the foundation for modern evolutionary biology, transforming
                  our understanding of life’s diversity. Darwin’s insights
                  continue to influence scientific thought and research today.
                  <br />
                  <br />
                  Adaptive World is a 3D survival game project based on the
                  concepts of adaptive radiation in evolutionary biology created
                  in Unreal Engine 5. Adaptive radiation is an evolutionary
                  process in which gregarious animals or plants alter their
                  physical characteristics and anatomical structures to a new
                  species over a period but maintain original features due to
                  adapting to the changes in the biophysical environment, like
                  facing food shortages and natural enemies. This project
                  referenced the most famous example of adaptive radiation -
                  Darwin’s finches as the main character and rebuilt it in a
                  science fiction style to explain the basic concept of natural
                  selection or the survival of the fittest for educational
                  purposes. The health bar of Darwin’s finches will decrease
                  when the player takes any action, including walking or flying
                  while attacking. Players need to find and collect food items
                  to regenerate the health points to ensure the Darwin’s finches
                  have enough power for movement to survive in the Galápagos
                  Islands. Big enemies on the Islands will attack the player
                  within a specific distance, and the player can decide to
                  defeat the enemy or avoid it. The primary mission of the
                  player is to collect the special items on the Islands to allow
                  Darwin’s finches to evolve and gain new abilities.
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
