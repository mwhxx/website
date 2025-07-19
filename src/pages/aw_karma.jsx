import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/background";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_karma() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("karma.png")) ||
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
              MICROCINEMA
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
                  src="https://www.youtube.com/embed/GvVARv0TNvE?si=JbYWpvzMNeDEmJJf"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  className="absolute inset-0 w-full h-full"
                  title="CMC"
                ></iframe>
              </div>

              {/* 2x2 Image Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src={base + "assets/k001.png"}
                  alt="Scene from Karma 1"
                  className="w-full h-auto"
                />
                <img
                  src={base + "assets/k002.png"}
                  alt="Scene from Karma 2"
                  className="w-full h-auto"
                />
                <img
                  src={base + "assets/k003.png"}
                  alt="Scene from Karma 3"
                  className="w-full h-auto"
                />
                <img
                  src={base + "assets/k004.png"}
                  alt="Scene from Karma 4"
                  className="w-full h-auto"
                />
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
                  Karma
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  May 2024
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
                  "Karma" is a concise and impactful horror narrative that
                  explores the theme of karmic retribution. It serves as a
                  modern parable, centering on an ill-mannered young man whose
                  consistently poor behavior leads to a fatal supernatural
                  encounter. The narrative methodically builds a profile of the
                  protagonist, first revealing his judgmental nature in a
                  stairwell scene. The plot then escalates with a chance
                  encounter at a train station where he rudely dismisses a
                  mysterious woman. Her calm warning about his "bad character"
                  serves as a premonition, which he arrogantly ignores, setting
                  the stage for his downfall.
                  <br />
                  <br />
                  Following their initial meeting, the woman appears to him in
                  several other locations, almost like a shadow he cannot shake.
                  He sees her watching him from a distance as he urinates in a
                  public alleyway and again in a dimly lit tunnel. With each
                  appearance, the atmosphere grows more ominous, but the man
                  never reflects on his actions. His reaction progresses from
                  simple annoyance to outright anger, and he views her
                  persistent presence not as a warning, but as a hostile
                  intrusion into his life. deeds.
                  <br />
                  <br />
                  The story reaches its climax when the man returns home.
                  Finding the elevator out of service, his exhausting climb up
                  the stairs symbolizes his inevitable journey toward his fate.
                  Upon entering his apartment and falling asleep, the true
                  horror unfolds as the woman appears as a ghost at his bedside
                  and strangles him. The film concludes with a poignant final
                  shot of her photograph on a table with a burning candle. This
                  image confirms she was a spirit, a personification of karma
                  itself, framing the man's tragic end not as a random
                  misfortune, but as the direct and inescapable result of his
                  accumulated negative deeds.
                  <br />
                  <br />
                  #Microcinema
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
