import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_cmc() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/cmc.png")) ||
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
                  src="https://player.vimeo.com/video/1063004705?h=7f359774db&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="CMC"
                ></iframe>
              </div>

              {/* Added Image */}
              <img
                src="/assets/cmc001.png"
                alt="3D render of the CMC building"
                className="w-full mb-8"
              />

              {/* Title row with Year */}
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className="text-[1.1rem] font-bold"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  CMC
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    /Social Media Assistant - Part Time Internship
                    <br />
                    /General Office, School of Creative Media, Cityu University
                    of Hong Kong
                  </span>
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  July 2021 - June 2022
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
                  During this internship, I was mainly responsible for creating 3D computer
                  graphics and animations for the general office, as well as
                  posting on Instagram and Facebook. My first task was to build
                  a 3D model of our Run Run Shaw Creative Media Centre. This
                  proved challenging because I couldn’t find a 360° view of the
                  building or a model sheet. I had to estimate certain parts of
                  its shape and use clever camera angles, such as top views,
                  slopes, and uneven surfaces, to convey its form. I then
                  rendered four different 3D graphics for my supervisor to add
                  slogans and titles for promotional purposes.
                  <br />
                  <br />
                  For the animation, my inspiration is taken from Pixar’s
                  opening animation. I found a Polaroid camera as a reference,
                  redesigned it, and built it as a character to create a
                  10-second animation for the office to use on their website,
                  Facebook, and Instagram.
                  <br />
                  <br />
                  The environment modeling is the main gate of the CMC building
                  because the building is the most representative of our school.
                  And I downloaded the HDRI image of Tat Hong Avenue on Google
                  Maps so that the reflections of Hall 10 appear in the building
                  windows. It can be made the animation more realistic. Finally,
                  I created an energy tank and the type mesh of text “SCM” on a
                  rectangular cube. When the character walks and kicks the
                  energy tank inside the rectangular cube, the “SCM” text will
                  glow. It was rendered in Autodesk Arnold and textured in
                  Substance Painter.
                  <br />
                  <br />
                  #3D Animation{"\u00A0\u00A0\u00A0\u00A0"}#Computer Graphics
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
