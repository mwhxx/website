import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_mappm() {
  // ① Find the 'mappm.png' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/mappm.png")) ||
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

            {/* Vertical Text "LEAFLET DESIGN..." */}
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.0em]
              "
            >
              LEAFLET{"\u00A0"}DESIGN COMPUTER{"\u00A0"}GRAPHICS
            </div>
          </div>

          {/* Right panel: content + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Main Images */}
              <img
                src="/assets/mappm003.png"
                alt="MAPPM leaflet design page 1"
                className="w-full mb-8"
              />
              <img
                src="/assets/mappm001.png"
                alt="MAPPM leaflet design page 2"
                className="w-full mb-8"
              />
              <img
                src="/assets/mappm002.png"
                alt="MAPPM leaflet design page 3"
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
                  MAPPM Leaflet Design
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Aug 2021
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
                  In the summer of 2021, I assisted the Department of Public and
                  International Affairs (formerly known as the Department of
                  Public Policy) in designing a promotional leaflet for the
                  Master of Arts in Public Policy and Management programme. I
                  worked under the supervision of Prof. WEN Bo, who had
                  collaborated with me on previous creative projects and
                  provided me with several past versions of the leaflet for
                  reference. He tasked me with redesigning the material to
                  reflect updated programme details and present a more modern,
                  visually engaging identity for prospective students.
                  <br />
                  <br />
                  To create a distinctive and meaningful visual concept, I
                  designed an abstract low-poly 3D model of an executive mansion
                  using Maya MEL scripting. The model was intended to symbolize
                  the authority, structure, and formality associated with public
                  institutions. I chose a clean white texture for the surface
                  material and used a three-point lighting setup to enhance
                  depth and produce a serene, almost reverent ambiance that
                  aligns with the seriousness of public governance.
                  <br />
                  <br />
                  I also designed the layout of the leaflet using Adobe
                  Illustrator. This involved typesetting the text, organizing
                  the content to ensure clarity and readability, and integrating
                  visual elements into a balanced and cohesive composition.
                  Additionally, I embedded a QR code that links directly to the
                  programme’s official website, providing viewers with a
                  convenient way to access more detailed information about the
                  course and application process.
                  <br />
                  <br />
                  {/* === Added Link === */}
                  <a
                    href="https://drive.google.com/file/d/1xyHPw-4kNvEM_lIPPgOfYyoP9HZLTeIe/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View the full leaflet here
                  </a>
                  <br />
                  <br />
                  #Leaflet Design{"\u00A0\u00A0\u00A0\u00A0"}#Computer Graphics
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
