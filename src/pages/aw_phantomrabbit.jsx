import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/background";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_phantomrabbit() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("phantomrabbit.png")) ||
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
                [writing-mode:vertical-rl] tracking-[0.5em]
              "
            >
              ANIMATION
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
                  src="https://player.vimeo.com/video/1059434054?h=620082b8db&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="CMC"
                ></iframe>
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
                  Phantom Rabbit
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Dec 2021
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
                  Duration: 01 minutes, 02second, 16 frame [00:01:02:16 (Base
                  24)]
                  <br />
                  Video Track Format: Full HD Format 1080P24 - 1920 x 1080
                  pixels in an aspect ratio of 16:9 (1.77:1)
                  <br />
                  Frame Rate: 24 frames per second - progressive
                  <br />
                  Audio Track Format:
                  <br />
                  - Linear PCM (16-bits Sample Size, Little Endian);
                  <br />
                  - Channels: Stereo (L R); Sample Rate: 48KHz;
                  <br />
                  - Rendering Quality - 100% Best Quality
                  <br />
                  <br />
                  This was my first one-minute 2D animation created in December
                  2021. The short story follows a rabbit hero character who
                  transforms into a demon in the city. The animation uses a
                  purple color tone to reflect the character’s dark emotions. I
                  chose the cut-out animation style because my drawing skills at
                  the time were not strong enough for traditional hand drawn
                  animation. I created the rabbit, ball, and demon characters in
                  Procreate and exported them to OpenToonz for rigging and
                  animation. I worked on basic 2D animation techniques such as a
                  walk cycle, a bouncing ball, and jumping, and combined eight
                  scenes to tell the story. For the final particle effect, I
                  drew digital text about sin in Procreate and used the particle
                  system in After Effects to animate it efficiently. In post
                  production, I used Premiere Pro for video editing and sound
                  design.
                  <br />
                  <br />
                  #2D Animation{"\u00A0\u00A0\u00A0\u00A0"}#Cut-Out Animation
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
