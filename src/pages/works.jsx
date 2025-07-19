// src/pages/Works.jsx
import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function Works() {
  // ① Pick a default image object (we'll choose the CMC entry)
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("blood.png")) ||
    portfolioImages[0];

  // ② Store the entire image object in state
  const [hoveredImage, setHoveredImage] = useState(defaultImage);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ==== two-panel grid ==== */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative grid h-full w-full
                     [@media(min-width:1320px)]:grid-cols-[4fr_6fr]
                     [@media(max-width:1319px)]:grid-rows-[2fr_1fr]
                     [@media(max-width:1319px)]:grid-cols-1"
        >
          {/* Left panel: 3D canvas + metadata overlay */}
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2
                         w-[125vw] [@media(max-width:1319px)]:w-[100vw]
                         h-full [@media(max-width:1319px)]:top-[-20vh]"
            >
              <Background imageUrl={base + hoveredImage.src} />
            </div>

            {/* 📌 Metadata Overlay */}
            <div className="absolute bottom-10 left-15 text-white">
              <h2
                className="text-2xl font-bold max-w-[40rem]"
                style={{
                  fontFamily:
                    "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                }}
              >
                {hoveredImage.name}{" "}
                <span className="text-sm font-medium text-gray-300">
                  ({hoveredImage.year})
                </span>
              </h2>
              <p
                className="mt-2 md:text-[0.80rem] opacity-90 text-justify max-w-[31rem]"
                style={{
                  fontFamily:
                    "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                }}
              >
                {hoveredImage.description}
              </p>
            </div>
          </div>

          {/* Right panel: gallery + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col">
            <div className="flex-none p-8">{/* optional title/header */}</div>
            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              <Gallery onHoverImage={setHoveredImage} />
              <div className="mt-12">
                <Footer />
              </div>
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
