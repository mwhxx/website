import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_evilqueen() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("evilqueen.png")) ||
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
                  src="https://player.vimeo.com/video/1059577566?h=869729c194&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
                  The Resurrection of Evil Queen
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  May 2022
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
                  Inspired Film: Snow White and the Seven Dwarfs
                  <br />
                  Duration: 01 minutes, 00 second, 17 frame [00:01:00:17 (Base
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
                  Inspiration:
                  <br />
                  At the end of the original film, the seven dwarfs followed the
                  evil queen to the cliff, but the queen was unfortunately
                  struck by a powerful lightning bolt and fell off the cliff.
                  However, we don't know whether the queen is really dead
                  because she knows witchcraft and has many followers in the
                  castle. So, I want to add a new scene to continue the story
                  where the Queen's followers help her come back to life.
                  <br />
                  <br />
                  Synopsis:
                  <br />
                  After a period of time, people built tombstones in the castle
                  to commemorate the evil queen. Then, the clown wizard began to
                  prepare for the ceremony of resurrecting the queen. Let’s
                  celebrate the resurrection of the evil queen !!
                  <br />
                  <br />
                  #2D Animation
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
