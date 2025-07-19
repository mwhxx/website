import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/background";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_namshanestate() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("namshanestate.png")) ||
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
                [writing-mode:vertical-rl] tracking-[0.0em]
              "
            >
              COMPUTER{"\u00A0"}GRAPHICS
            </div>
          </div>

          {/* Right panel: video + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Added Image */}
              <img src={base + "assets/namshanestate001.png"} className="w-full mb-8" />
              <img src={base + "assets/namshanestate002.png"} className="w-full mb-8" />

              {/* Title row with Year */}
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className="text-[1.1rem] font-bold"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Nam Shan Estate
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    {/* === Added Link === */}
                    <a
                      href="https://jupas.mingpao.com/%E9%99%A2%E6%A0%A1%E8%B3%87%E8%A8%8A/%E5%9F%8E%E5%A4%A7%E3%80%8C%E5%83%95%E4%BA%BA%E9%A0%98%E8%A2%96%E8%A8%88%E5%8A%83%E3%80%8D%E7%B5%90%E6%A5%AD%E7%A6%AE/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      /明報 - 城大「僕人領袖計劃」結業禮 嘉許卓越典範
                      總結服務成果
                    </a>
                    <br />
                    <a
                      href="https://drive.google.com/file/d/15AYqIs62-hP0KhNM-rVxpkzzMbXIE9Sq/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      /The HKFYG "Easy Volunteer" - Bronze Award for Volunteer Service
                    </a>
                    <br />
                    /Friendly Neighbour - Servant Leadership Training Programme
                    <br />
                    /Student Development Services, Cityu University of Hong Kong
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
                  April 2023
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
                  During this one-year volunteer program, I served as a Servant
                  Leader - Friendly Neighbour, conducting community site visits
                  in neighborhoods near CityU and building connections with
                  local residents by delivering various services.
                  <br />
                  <br />
                  Being an internship in the SLTP program was a memorable
                  experience where I was encouraged, influenced, and studied
                  many new things during the service period. Friendly Neighbour
                  is a new service team that started this year to conduct
                  community visits in a neighborhood close to CityU and build
                  community connections through volunteer activities. From
                  walking in on my first day until it ended, we had a field
                  study in Nam Shan Estate, interviewed the restaurant’s owner
                  to design a community map, and prepared for the promotion.
                  <br />
                  <br />
                  The community interviews were the most unforgettable moment
                  since it was so nervous but exciting. Some shopkeepers or
                  staff will refuse our interviews for various reasons and not
                  allow us to take photos of their shop. We understand that
                  lunchtime is so busy, and they need to serve many consumers,
                  so there is no time to answer our questions in detail. Most of
                  the time, we must play the role of customers to ask questions
                  and collect menus that will quickly get information about the
                  restaurants. For instance, payment methods, food delivery
                  platforms, and unique office hours during adverse weather
                  conditions, etc. But it is instrumental in enhancing my
                  bravery and communication skills with different people.
                  <br />
                  <br />
                  For the 3D graphics, I built a 3D model of Nam Shan Estate as
                  the cover page of the map in Maya for the map. This is the
                  front view of Nam Shan Estate, and I built the building,
                  windows, air conditioners, and the sign of Nam Shan
                  Marketplace at night. It was rendered in Arnold and textured
                  in Substance Painters.
                  <br />
                  <br />
                  #Computer Graphics
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
