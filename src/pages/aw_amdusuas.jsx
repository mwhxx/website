import React, { useState } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_amdusuas() {
  // ① Find the 'amdusuas.png' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/amdusuas.png")) ||
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

          {/* Right panel: content + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Main Image */}
              <img
                src="/assets/amduscias.png"
                alt="3D render of the Creative Media Centre building"
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
                  Amduscias: The Marked Ones
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Feb 2020
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
                  Poster Design:
                  <br />
                  This micro movie poster was made by Photoshop. On the
                  background, I painted Amduscias’ demon marks and roughened
                  them, making it feels like a witch drawing marks on the wall.
                  On the other hand, I placed Amduscias’ 3D model character on
                  the left, and darkened the area, and it creates a strange and
                  terrifying feeling. There was a piano under Amduscias, and it
                  was playing by itself. In terms of titles, reference is made
                  to the font of the demon literature, and the title of
                  Amduscias is lightened, while “The Marked Onces” is dim, and
                  the capital “T” is the shape of the grave, which enhances the
                  sense of terror. The text in the lower left is the Amduscias
                  record related to “The Lesser Key of Solomon.”
                  <br />
                  <br />
                  Synopsis:
                  <br />
                  In 1980, Parker Wilkinson was a student at the American
                  Conservatory of Music. His goal was to become a world-renowned
                  pianist, but his left hand was severely injured due to a car
                  accident and he could no longer play the piano. After he was
                  discharged from the hospital, he couldn’t accept that his
                  music dream had been broken, and he drank alcohol on the
                  street every day. One night, he was drunk in the backstreet
                  and was confused. He found the demonic literature “The Lesser
                  Key of Solomon” in the rubbish dump. The book stated that as
                  long as he entered into a contract with the devil, his wish
                  could be realized. This method summoned Amduscias, one of
                  Solomon’s 72 pillar deities, to trade with it. After waking up
                  drunk, Parker felt only a dream and went home, but his left
                  hand suddenly recovered and was shocked. He remembered what
                  happened last night. Since then, his music has continued to
                  inspire. He graduated with first class honors in the college
                  and took only one year to become a well-known pianist at the
                  time.
                  <br />
                  <br />
                  Forty years later, his son and daughter inherited his wealth
                  business and the big house. When they were 20 years old,
                  different spiritual events began to occur in the big house,
                  and even more haunted. The son and daughter began
                  investigating the incident and found that the wall of the big
                  house turned out to be marked by a demon, which was the same
                  as the birthmark on the son. They found out the mother’s
                  diary, and found out that the father and the demon had entered
                  into a contract. The content of the contract was to dedicate
                  his son’s adult body to the devil, and Parker could achieve
                  his musical dream. But Parker regretted it in his later years.
                  He didn’t want to lose his son, so he asked the seminary
                  people to help exorcism, and wanted to break the contract.
                  During the exorcism, Amduscias was injured, but his father and
                  the seminary were killed, and his mother escaped and flew to
                  the Holy See for help, but could not defeat Amduscias. The
                  curse died in the air crash. After knowing the matter, the son
                  immediately asked the priest to exorcise, and Amduscias who
                  appeared was a human unicorn that could sound various musical
                  instruments. But the exorcism ritual has no effect on
                  Amduscias. It first kills the priest, then attaches it to the
                  son to obtain his flesh.
                  <br />
                  <br />
                  Later, a neighbor called for help because of the rancid smell
                  of the body from Parker House.
                  <br />
                  <br />
                  A month later, the search for sons and daughters was still
                  published in the newspaper ...
                  <br />
                  <br />
                  #Creative Writing{"\u00A0\u00A0\u00A0\u00A0"}#Computer
                  Graphics
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
