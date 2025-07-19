import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_poisedperfection() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/poisedperfection.png")) ||
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
                [writing-mode:vertical-rl] tracking-[0.28em]
              "
            >
              INSTALLATION
            </div>
          </div>

          {/* Right panel: video + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Main Image */}
              <img
                src="/assets/pp001.png"
                alt="Poised Perfection main installation view"
                className="w-full mb-8"
              />

              {/* Vimeo embed (Moved to the top) */}
              <div className="relative w-full aspect-video mb-8">
                <iframe
                  src="https://player.vimeo.com/video/1059419414?h=2fb68a50fb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="Poised Perfection Video"
                ></iframe>
              </div>

              {/* Image Gallery Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Row 1: pp005, pp006 */}
                <div>
                  <img
                    className="h-auto max-w-full"
                    src="/assets/pp005.png"
                    alt="Installation detail shot 1"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src="/assets/pp006.png"
                    alt="Installation detail shot 2"
                  />
                </div>
                {/* Row 2: pp002, pp003 */}
                <div>
                  <img
                    className="h-auto max-w-full"
                    src="/assets/pp002.png"
                    alt="Installation detail shot 3"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src="/assets/pp003.png"
                    alt="Installation detail shot 4"
                  />
                </div>
                {/* Row 3: pp004, pp007 */}
                <div>
                  <img
                    className="h-auto max-w-full"
                    src="/assets/pp004.png"
                    alt="Installation detail shot 5"
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full"
                    src="/assets/pp007.png"
                    alt="Installation detail shot 6"
                  />
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
                  Poised Perfection
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Feb 2023
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
                  The whole installation is a temporary structure that is
                  artwork without adhesive tape or glue, and it uses physical
                  theory to stabilize all the objects. I found some kitchenware
                  from home and the bar stool chair in the school workshop as my
                  materials. I removed the chair’s seat and used the original
                  screws from the chair to combine it with the wood board and
                  wok shovel. Besides, I used a cup hook to hang the stones with
                  a mesh bag which helped me to balance the weight of the whole
                  object since I only used the top vertex of the wok shovel to
                  hold the clear glass jug on the opposite side. However, I put
                  a coca cola glass bottle inside the handle of the clear glass
                  jug and used an iron fork to stick it. Moreover, I put a jug
                  lid on top of the glass bottle and used wood pellets to hold
                  it. Finally, I inserted a light bulb in the styrofoam and put
                  it on top of the jug. The jug will be rotated when you push
                  it.
                  <br />
                  <br />
                  Materials:
                  <br />
                  Bar Stool Chair, Wood Board, Cup Hook, Stones
                  <br />
                  Mesh Bag, Wok Shovel, Clear Glass Jug with Lid
                  <br />
                  Coca Cola Glass Bottles, Iron Fork, Wood Pellet,
                  <br />
                  Incandescent Light Bulb, Styrofoam, Screw
                  <br />
                  <br />
                  #installation
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
