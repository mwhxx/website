import React, { useState } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

export default function aw_neuroblocks() {
  // ① Find the 'CMC' image object and set it as the default
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("neuroblocks.png")) ||
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

            {/* Vertical Text */}
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.3em]
              "
            >
              CONCEPT{"\u00A0"}ART
            </div>
          </div>

          {/* Right panel: video + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* Added Image */}
              <img src={base + "assets/neuroblocks001.png"} className="w-full mb-8" />
              <img src={base + "assets/neuroblocks002.png"} className="w-full mb-8" />
              <img src={base + "assets/neuroblocks003.png"} className="w-full mb-8" />

              {/* Title row with Year */}
              <div className="flex justify-between items-baseline mb-4">
                <h2
                  className="text-[1.1rem] font-bold"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  NeuroBlocks
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
                  Overview:
                  <br />
                  Han (2015) distinguishes the existence of immunological and
                  neurons in the first chapter of the burnout Han (2015)
                  distinguishes the existence of immunological and neurons in
                  the first chapter of the burnout society. He argues that the
                  paradigm of the immune system has disappeared in the current
                  century since society. He argues that the paradigm of the
                  immune system has disappeared in the current century since the
                  emergence of “difference”. The increase in self-affirmation
                  causes the self not to find outsiders, and the emergence of
                  “difference”. The increase in self-affirmation causes the self
                  not to find outsiders, and the immune system cannot find
                  invaders, which would turn to attack itself. Finally,
                  producing neuronal the immune system cannot find invaders,
                  which would turn to attack itself. Finally, producing neuronal
                  violence.
                  <br />
                  <br />
                  So, it the immunological pattern disappear utterly in our
                  society? Although Han tries to show that immunologists are
                  incompatible with the current process of globalization, it is
                  challenging to prove that it munologists are incompatible with
                  the current process of globalization, it is challenging to
                  prove that it has elapsed. Because the world is changing every
                  day and many new events are happening based on social has
                  elapsed. Because the world is changing every day and many new
                  events are happening based on social trends. Han can’t quite
                  say that modern society has shaken off the defenses of the
                  immune system. The trends. Han can’t quite say that modern
                  society has shaken off the defenses of the immune system. The
                  “other” could always reappear everywhere, such as
                  Russo-Ukrainian War, Cross- Strait relations, Hong “other”
                  could always reappear everywhere, such as Russo-Ukrainian War,
                  Cross- Strait relations, Hong Kong protests, etc. We can
                  clearly define who is “self ” and who is “other” in these
                  cases.
                  <br />
                  <br />
                  Perhaps, the current society is determined by immunology and
                  neurons at the same time, but we need to classify the
                  proportion of them.
                  <br />
                  <br />
                  Inspiration:
                  <br />
                  Generally, a human’s average heartbeat ranges from 60 to 100
                  per minute in sedentary activities, and the resting heart rate
                  represents those with capable heart function and excellent
                  cardiovascular fitness . On the resting heart rate represents
                  those with capable heart function and excellent cardiovascular
                  fitness . On the contrary, people suffering from neurological
                  illnesses like ADHD, BPD, or burnout syndrome will emerge
                  contrary, people suffering from neurological illnesses like
                  ADHD, BPD, or burnout syndrome will emerge with a rapid
                  heartbeat even without any strenuous exercise. Therefore, I
                  would like to use the BITalino with a rapid heartbeat even
                  without any strenuous exercise. Therefore, I would like to use
                  the BITalino sensors to get the electrocardiogram data of the
                  participant and generate a physical visualization work sensors
                  to get the electrocardiogram data of the participant and
                  generate a physical visualization work by 3D printing
                  immediately. The ECG data and symptoms can help us get the
                  result to analyze whether by 3D printing immediately. The ECG
                  data and symptoms can help us get the result to analyze
                  whether neurons determine the current century. So, it will be
                  a large interactive installation and move to different neurons
                  determine the current century. So, it will be a large
                  interactive installation and move to different exhibitions
                  within a specific period around the world.
                  <br />
                  <br />
                  The interactive installation combines 3D printing and
                  animation to create a data visualization artwork The
                  interactive installation combines 3D printing and animation to
                  create a data visualization artwork through the audience’s
                  participation. The device will instantly detect the
                  participants’ heartbeats and print through the audience’s
                  participation. The device will instantly detect the
                  participants’ heartbeats and print an original 3D cube based
                  on their electrocardiogram data. They can freely put the
                  3D-printed cube in the an original 3D cube based on their
                  electrocardiogram data. They can freely put the 3D-printed
                  cube in the installation platform to establish an abstract
                  city artwork. The finished shape will show whether neurons
                  installation platform to establish an abstract city artwork.
                  The finished shape will show whether neurons dominate the
                  local city.
                  <br />
                  <br />
                  Planned Idea:
                  <br />
                  The interactive installation combines 3D printing and
                  animation to create a data visualization artwork through the
                  audience’s participation. The device will instantly detect the
                  participants’ heartbeats and print through the audience’s
                  participation. The device will instantly detect the
                  participants’ heartbeats and print an original 3D cube based
                  on their electrocardiogram data. They can freely put the
                  3D-printed cube in the an original 3D cube based on their
                  electrocardiogram data. They can freely put the 3D-printed
                  cube in the installation platform to establish an abstract
                  city artwork. The finished shape will show whether neurons
                  installation platform to establish an abstract city artwork.
                  The finished shape will show whether neurons dominate the
                  local city.
                  <br />
                  <br />
                  Firstly, the participant must put their hand inside the
                  BITalino device to check their heartbeat to generate an ECG
                  data file. And then, the system will import the data and add a
                  procedural operation to change the an ECG data file. And then,
                  the system will import the data and add a procedural operation
                  to change the vertex and edge of the mesh object for 3D
                  printing. Suppose the participants hold an ECG at a
                  high-fre-vertex and edge of the mesh object for 3D printing.
                  Suppose the participants hold an ECG at a high-fre-quency
                  wavelength during a static exhibition. In that case, the
                  system will create the strange shape of a quency wavelength
                  during a static exhibition. In that case, the system will
                  create the strange shape of a cube, representing those people
                  likely to suffer from neurological diseases and vice versa.
                  During the cube, representing those people likely to suffer
                  from neurological diseases and vice versa. During the waiting
                  time, the display screen will demonstrate an animated
                  character affected by the ECG data. After waiting time, the
                  display screen will demonstrate an animated character affected
                  by the ECG data. After that, the participant we have their
                  3D-printed cube, and they can put it on the platform depending
                  on their that, the participant we have their 3D-printed cube,
                  and they can put it on the platform depending on their idea.
                  There are no rules or standpoints.
                  <br />
                  <br />
                  #Concept Art
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
