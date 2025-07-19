import React, { useState, useEffect, useRef } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

// ===================================================================
// 1. Your p5.js sketch, adapted for React's "instance mode"
// ===================================================================
const flowFieldSketch = (p) => {
  let rws = [];
  let num = 2200;
  let container;

  // Helper function to initialize or reset the particle system
  const initializeParticles = () => {
    // By setting a seed, the "random" values will be the same every time,
    // ensuring the particle layout is consistent after a resize.
    p.randomSeed(99);

    rws = []; // Clear the existing particles
    for (let i = 0; i < num; i++) {
      let x = p.random(p.width);
      let y = p.random(p.height);
      let vx = p.random(-1, 1);
      let vy = p.random(-1, 1);
      rws.push(new rw(x, y, vx, vy));
    }
  };

  // Class for the random walkers
  class rw {
    constructor(x, y, vx, vy) {
      this.pos = p.createVector(x, y);
      this.vel = p.createVector(vx, vy);
      this.prevpos = this.pos.copy();
    }

    update() {
      let noiseAngle =
        p.noise(this.pos.x * 0.005, this.pos.y * 10.005, p.frameCount * 0.01) *
        p.TWO_PI;
      let noiseSpeed = p.noise(this.pos.x * 0.01, this.pos.y * 0.01) * 8;
      this.vel.x = p.cos(noiseAngle) * noiseSpeed;
      this.vel.y = p.sin(noiseAngle) * noiseSpeed;
      this.pos.add(this.vel);

      // Handle screen edges
      if (this.pos.x < 0) {
        this.pos.x = p.width;
        this.prevpos.x = this.pos.x;
      }
      if (this.pos.x > p.width) {
        this.pos.x = 0;
        this.prevpos.x = this.pos.x;
      }
      if (this.pos.y < 0) {
        this.pos.y = p.height;
        this.prevpos.y = this.pos.y;
      }
      if (this.pos.y > p.height) {
        this.pos.y = 0;
        this.prevpos.y = this.pos.y;
      }
    }

    display() {
      let size = p.width < 768 ? p.random(20, 48) : p.random(20, 68);
      let c =
        p.noise(this.pos.x * 10.01, this.pos.y * 10.01) * p.random(80, 2500);
      p.fill(c, 80, 100, 1);
      p.ellipse(this.pos.x, this.pos.y, size, size);
      p.line(this.prevpos.x, this.prevpos.y, this.pos.x, this.pos.y);
      this.prevpos = this.pos.copy();
    }
  }

  p.setup = () => {
    // Get the container div and create the canvas to fill it
    container = document.getElementById("p5-container-redandwhite");
    let cWidth = container ? container.offsetWidth : 400;
    let cHeight = container ? container.offsetHeight : 400;
    p.createCanvas(cWidth, cHeight).parent(container);

    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.background(0);

    initializeParticles(); // Create the initial set of particles
  };

  p.draw = () => {
    p.blendMode(p.BLEND);
    p.noStroke();
    p.fill(0, 5);
    p.rect(0, 0, p.width, p.height);
    p.blendMode(p.ADD);

    for (let i = 0; i < rws.length; i++) {
      rws[i].update();
      rws[i].display();
    }
  };

  // Auto-resize and refresh canvas on window change
  p.windowResized = () => {
    if (container) {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
      p.background(0);
      initializeParticles(); // Refresh the sketch by re-creating particles
    }
  };
};

// ===================================================================
// 2. A reusable React component to host the p5.js sketch
// ===================================================================
const P5Sketch = ({ sketch }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    // Ensure p5 is loaded and available on the window object before creating the instance
    if (window.p5) {
      const p5Instance = new window.p5(sketch, sketchRef.current);
      // Cleanup function to remove the p5 instance when the component unmounts
      return () => {
        p5Instance.remove();
      };
    }
  }, [sketch]);

  // This div hosts the p5.js canvas. It fills its parent container.
  return (
    <div
      ref={sketchRef}
      id="p5-container-redandwhite" // Unique ID for the container
      className="w-full h-full"
    />
  );
};

// ===================================================================
// 3. Your main page component, now using <P5Sketch />
// ===================================================================
export default function aw_redandwhite() {
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/redandwhite.png")) ||
    portfolioImages[0];
  const [hoveredImage] = useState(defaultImage);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* ==== two-panel grid container ==== */}
      <div className="absolute inset-0 z-0 pt-5">
        <div
          className="
            relative grid h-full w-full
            [@media(min-width:1320px)]:grid-cols-[4fr_6fr]
            [@media(max-width:1319px)]:grid-rows-[2fr_1fr]
            [@media(max-width:1319px)]:grid-cols-1
          "
        >
          {/* Left panel */}
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="
                absolute top-0 left-1/2 transform -translate-x-1/2
                w-[125vw] [@media(max-width:1319px)]:w-[100vw]
                h-full [@media(max-width:1319px)]:top-[-20vh]
              "
            >
              <Background imageUrl={hoveredImage.src} />
            </div>
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.2em]
              "
            >
              SOFTWARE{"\u00A0"}ART
            </div>
          </div>

          {/* Right panel: content + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            <div className="flex-none p-8"></div>
            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* This is the white rectangle container with the p5 sketch inside */}
              <div className="relative w-full aspect-video mb-8 bg-white">
                <P5Sketch sketch={flowFieldSketch} />
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
                  Red and White
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  June 2025
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
                  “Red and White” is a critical software artw that translates
                  the silent, internal conflict of G6PD (Glucose-6-Phosphate
                  Dehydrogenase) deficiency into a dynamic visual experience.
                  The piece explores the fragility of the human body at a
                  cellular level by contrasting the vibrant life force of
                  healthy red blood cells with their sudden, chaotic breakdown
                  in the process called hemolysis.
                  <br />
                  <br />
                  People with G6PD deficiency, a common genetic condition, face
                  an especially fragile internal balance. Without a key
                  protective enzyme, their red blood cells cannot withstand
                  oxidative stress caused by some foods, medications or
                  infections. A hemolytic crisis may ensue when a trigger
                  appears. In “Red and White,” this crisis becomes visible as a
                  sudden and mesmerizing breakdown: once-uniform red particles
                  burst into clouds of white and pale hues, their ordered paths
                  dissolving into turbulence.
                  <br />
                  <br />
                  This work serves as a meditation on the unseen vulnerabilities
                  we carry within us. It gives form to a biological process that
                  is invisible to the naked eye yet profoundly affects millions.
                  By transforming a medical condition into a generative visual
                  poem, “Red and White” invites viewers to reflect on the
                  intricate, often fragile, balance between order and chaos that
                  defines life itself.
                  <br />
                  <br />
                  #Software Art
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
