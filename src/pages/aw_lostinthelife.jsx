import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/background";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_lostinthelife() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("lostinthelife.png")) ||
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
            [writing-mode:vertical-rl] tracking-[0.1em]
          "
            >
              SOFTWARE{"\u00A0"}ART INTERACTIVE{"\u00A0"}ART
            </div>
          </div>

          {/* Right panel: video + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Added Image */}
              <img src={base + "assets/lostinthelife001.png"} className="w-full mb-8" />

              {/* Vimeo embed */}
              <div className="relative w-full aspect-video mb-8">
                <iframe
                  src="https://www.youtube.com/embed/h8pGiJU3QFc?si=jSKC4VR9Uhyaq0x7"
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
                  Lost in the Life
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    /Exhibited at SCM Annual 2024, SCM CityUHK from 12 July 2024
                    to 28 July 2024
                    <br />
                    /Exhibited at SIG Playful Media Showcase 2024, SCM CityUHK
                    from 14 June 2024 to 28 June 2024
                    <br />
                    /Selected from p5.js Community Sketch 2024
                    <br />
                  </span>
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  July 2024
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
                  “Ľost in the Ľife” is a critical software art created in p5.js
                  that discusses how each person must face losing direction or
                  purpose during the life cycle. The piece explores how moments
                  of uncertainty and disorientation are not only unavoidable but
                  also deeply intertwined with personal growth and
                  transformation. Through the use of generative visuals and
                  interactive elements, the work invites viewers to reflect on
                  the emotional and psychological states that arise when one
                  feels disconnected, uncertain, or adrift within the broader
                  cycle of human existence.
                  <br />
                  <br />
                  The artwork begins with countless particles moving randomly
                  from the four corners of the canvas toward a central point.
                  This movement represents the symbolic formation of a soul,
                  echoing the biological process of fertilization where
                  individual forces come together to create new life. The shape
                  that emerges during this convergence mimics butterfly wings,
                  which introduces two powerful metaphors. First, it evokes the
                  concept of the butterfly effect, suggesting that any actions
                  can lead to unpredictable and far-reaching consequences.
                  Second, it recalls the ancient butterfly dream, a
                  philosophical idea that questions the distinction between
                  reality and illusion. Together, these metaphors reflect the
                  core theme of impermanence in life.
                  <br />
                  <br />
                  Once a soul is formed at the center, it begins to wander
                  within the canvas without any defined direction or goal. This
                  aimless movement illustrates the sensation of being lost in
                  life, drifting without purpose or control. Over time, each
                  particle gradually changes color to red, signaling its decline
                  and eventual disappearance. This transformation represents the
                  natural progression from life to death, offering a poetic
                  expression of how every journey eventually comes to an end.
                  <br />
                  <br />
                  To ensure consistent behavior and maintain focus, the hand
                  detection system only responds when a face is detected by the
                  webcam. If no one is present, the particles continue moving
                  independently in their random paths. This design choice
                  reinforces the concept that life continues whether or not we
                  are in control, and that presence and awareness are necessary
                  for meaningful interaction.
                  <br />
                  <br />
                  #Software Art{"\u00A0\u00A0\u00A0\u00A0"}#Interactive Art
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
