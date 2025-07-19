import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_voiceswithin() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("voiceswithin.png")) ||
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
                  src="https://player.vimeo.com/video/1059428658?h=0dd17f4f9e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
                  Voices Within
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  May 2021
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
                  Overview:
                  <br />
                  This is the mixed microcinema of live-action and 3D animation.
                  The film's length is 2 minutes and 36 seconds, and the style
                  is horrible and dark. The story is about a girl suffering from
                  a dissociative identity disorder (DID) who went into the
                  drainage tunnel to commit suicide. Therefore, her personality
                  was constantly changing during the period. Each personality is
                  communicating and arguing, and the animation part will
                  represent the girl's inner world.
                  <br />
                  <br />
                  Part 1 : Live Action
                  <br />
                  Based on the research, we believe that the life of DID
                  patients is harrowing, and their world is dark. However, they
                  have no choice but to establish one personality after another
                  to protect themselves. So, we chose Lai Chi Kok Drainage
                  Tunnel as the shooting location for the live action. The
                  environment here is very dark, nobody, and each drainage
                  tunnel exit is straightforward. It can represent the life of
                  the DID patient and the feeling of creating a horror story.
                  During the filming, I entered the rainwater drainage tunnel
                  with the actor. And then, the actor will express the feeling
                  of life as a DID patient through simple movements and eye
                  contact with computerized special effects in post-production.
                  We hope that this video can create feelings of fear, terror,
                  and escapism without dialogue. The most important is that no
                  one trusts them, or no one can talk with them, so they will
                  build up their personality to protect themselves. This is the
                  reason why we chose this shooting location.
                  <br />
                  <br />
                  Part 2 : Maya 3D Animation
                  <br />
                  In the animation part, I created a sphere with a PxrChecker
                  pattern (black and white color) to represent the inner world
                  of the DID patient (actor). Furthermore, I had modeled the
                  Chibi Base Mesh character with body rigging to set up
                  different poses of the character. And each character modeling
                  will represent one personality. Based on the case about Jeni
                  (2019) and Kim (2011), there are as many as 100 Chibi Base
                  Mesh characters in the entire environment modeling (i.e., the
                  actor in the story will have more than 100 personalities).
                  Therefore, I edited about 20 poses for the character, and then
                  copy and paste, copy and paste, to add a sense of hierarchy to
                  the entire space. On the other hand, I created a capsule shape
                  cockpit as the heart of the DID patient. When the character
                  (one of the personality) enters the cockpit, the character
                  (personality) will control the patient's body. Consequently, I
                  added 6 groups of curve, nurbsCircle, plus extrudeSurface to
                  create the extrude line effect animation. Also, the character
                  will change in different colors. This means that different
                  personalities will also have disputes. It will cause the
                  personality to change or even collapse constantly. For
                  instance, in Jeni's case, one of the personality Muscles said
                  he wanted to kill Jeni's father, but Symphony (another
                  personality) said it was too fast and stopped Muscles.
                  <br />
                  <br />
                  Part 3: Post-Production
                  <br />
                  I used Adobe Premiere Pro for editing and After Effect to
                  produce special effects in the post-production part. First of
                  all, I exported the Chibi Base Mesh character modeling in Maya
                  to the OBJ format and then imported it in the After effect
                  using the 3D elements plug-in. Therefore, I added tracking
                  motion and tracking points to follow the movement of the
                  actor's hand and then linked the 3D character modeling. At the
                  end of the video, I created the demon eyes effect, which
                  symbolized that the patient (actor) has been controlled by the
                  other personality and increased the sense of horror. In the
                  editing part, I used the lumetri color to make the filter. And
                  I added the effects of brightness, invert and channel blur in
                  different transition processes to increase the sense of
                  horrible and unpeaceful.
                  <br />
                  <br />
                  #Microcinema{"\u00A0\u00A0\u00A0\u00A0"}#Live Action
                  {"\u00A0\u00A0\u00A0\u00A0"}#3D Animation
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
