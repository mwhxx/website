import React, { useState, useEffect, useRef } from "react";
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

// ===================================================================
//  Your p5.js sketch, adapted for React's "instance mode"
// ===================================================================
const roboticHeartSketch = (p) => {
  let c = ["#f5c527", "#E6343C", "#3A4794", "#010101", "#CACACA"];
  let sd = 4; // subdivision
  let rs = 0.03; // base rotate speed
  let g3d = []; // p5.Graphics for each face
  let cr3d = Array(6)
    .fill()
    .map(() => []); // arrays of cubes per face
  let currRotateX = 0; // dynamic X rotation
  let currRotateY = 0; // dynamic Y rotation
  let container;

  p.setup = () => {
    // Get the container div and create the canvas to fill it
    container = document.getElementById("roboticheart-container");
    let cWidth = container ? container.offsetWidth : p.windowWidth;
    let cHeight = container ? container.offsetHeight : 720;
    p.createCanvas(cWidth, cHeight, p.WEBGL).parent(container);
    p.frameRate(39);

    for (let i = 0; i < 6; i++) {
      g3d[i] = p.createGraphics(200, 200);
      rspm(0, 0, g3d[i].width, g3d[i].height, sd, g3d[i], i);
    }
  };

  p.draw = () => {
    p.background(0);
    p.noStroke();

    // Increment rotations
    currRotateX += rs;
    currRotateY += rs;

    // Apply cube rotation
    p.rotateX(currRotateX);
    p.rotateY(currRotateY);

    p.blendMode(p.ADD);
    for (let i = 0; i < 6; i++) {
      p.push();
      surfaces(i);

      // Draw each subdivided cube on this face
      let offset = 35;
      for (let k = 0; k < cr3d[i].length; k++) {
        let rd = cr3d[i][k];
        rd.updateDepth();

        // Emissive “dark red” cube behind
        p.push();
        p.emissiveMaterial("#1B0101");
        p.translate(rd.x, rd.y, rd.d / 2);
        p.box(rd.w + 3, rd.h + 3, rd.d + 3);
        p.pop();

        // Original-color cube in front
        p.push();
        rd.updateDepth();
        p.fill(rd.color);
        p.translate(rd.x, rd.y, rd.d / 2 + 35);
        // Adjust for top/bottom faces
        if (i === 4 || i === 5) {
          p.translate(0, 0, -rd.d - offset);
        }
        p.box(rd.w, rd.h, rd.d);
        p.pop();
      }
      p.pop();

      // Central solid black cube
      p.push();
      p.fill(0);
      p.box(100);
      p.pop();
    }
  };

  // Subdivision for Mondrian‐style cubes
  const rspm = (x0, y0, x1, y1, depth, g, face) => {
    if (depth === 1) {
      let col = p.random(c);
      let r = new Scr3d(
        p.map(x0, 0, 200, -100, 100) + (x1 - x0) / 2,
        p.map(y0, 0, 200, -100, 100) + (y1 - y0) / 2,
        x1 - x0,
        y1 - y0,
        p.random(10, 40),
        p.color(col)
      );
      cr3d[face].push(r);
      return;
    }
    let prx = p.lerp(x0, x1, p.random(0.2, 0.8));
    let pry = p.lerp(y0, y1, p.random(0.2, 0.8));
    rspm(x0, y0, prx, pry, depth - 1, g, face);
    rspm(prx, y0, x1, pry, depth - 1, g, face);
    rspm(x0, pry, prx, y1, depth - 1, g, face);
    rspm(prx, pry, x1, y1, depth - 1, g, face);
  };

  // Class for the 3D rectangles
  class Scr3d {
    constructor(x, y, w, h, d, color) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.d = d;
      this.color = color;
      this.phase = p.random(p.TWO_PI);
    }
    updateDepth() {
      // Animate non-white cubes
      if (this.color.toString() !== p.color("#CACACA").toString()) {
        this.d = this.d + p.sin(p.frameCount * 0.4 + this.phase) * 5.5;
      }
    }
  }

  // Position and orient each of the 6 faces
  const surfaces = (index) => {
    if (index === 0) p.translate(0, 0, 100);
    else if (index === 1) {
      p.translate(0, 0, -100);
      p.rotateY(p.PI);
    } else if (index === 2) {
      p.translate(100, 0, 0);
      p.rotateY(p.HALF_PI);
    } else if (index === 3) {
      p.translate(-100, 0, 0);
      p.rotateY(-p.HALF_PI);
    } else if (index === 4) {
      p.translate(0, -100, 0);
      p.rotateX(-p.HALF_PI);
    } else if (index === 5) {
      p.translate(0, 100, 0);
      p.rotateX(p.HALF_PI);
    }
  };

  // Auto-resize canvas on window change
  p.windowResized = () => {
    if (container) {
      let cWidth = container.offsetWidth;
      let cHeight = container.offsetHeight;
      p.resizeCanvas(cWidth, cHeight);
    }
  };
};

// ===================================================================
// A reusable React component to host the p5.js sketch
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
      id="roboticheart-container"
      className="w-full h-full"
    />
  );
};

// ===================================================================
// Your main page component, now using <P5Sketch />
// ===================================================================
export default function aw_roboticheart() {
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("/roboticheart.png")) ||
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

            {/* Vertical Text */}
            <div
              className="
                pointer-events-none select-none
                absolute top-1/2 left-8 z-10 -translate-y-1/2
                text-7xl font-bold text-white opacity-20
                [writing-mode:vertical-rl] tracking-[0.15em]
              "
            >
              GENERATIVE{"\u00A0"}ART
            </div>
          </div>

          {/* Right panel: content + description + footer */}
          <div className="w-full min-h-screen bg-black flex flex-col text-white">
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* p5.js Sketch Embed Container with a fixed 1:1 aspect ratio */}
              <div className="relative w-full aspect-square mb-8 bg-white flex items-center justify-center">
                {/* The sketch is scaled down, revealing the white background of the parent */}
                <div className="w-full h-full scale-90">
                  <P5Sketch sketch={roboticHeartSketch} />
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
                  Robotic Heart
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    /Selected from p5.js Community Sketch 2024
                  </span>
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Feb 2024
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
                  “Robotic Heart” is an intricate 3D interpretation of Piet
                  Mondrian’s iconic “Composition with Red, Blue and Yellow.”
                  This generative art project blends Mondrian’s geometric
                  abstraction with elements of futuristic science fiction,
                  resulting in a visual experience that is both familiar and
                  innovative. Drawing inspiration from Mondrian’s disciplined
                  use of lines, colors, and grids, the project reimagines those
                  principles through the lens of modern digital media.
                  <br />
                  <br />
                  The artwork is developed using the rectangular subdivision
                  algorithm in p5.js, which allows for recursive division of
                  space to generate varying grid patterns. These patterns are
                  then translated into six separate panels, each representing a
                  face of a cube. The panels are constructed using rectangles of
                  differing sizes, strategically placed to maintain visual
                  harmony while introducing subtle randomness, reflecting the
                  balance between control and spontaneity that defines
                  generative art.
                  <br />
                  <br />
                  Once assembled, the six subdivided panels form a 3D cube that
                  acts as the core structure, symbolizing a robotic heart. Each
                  face of the cube pulsates independently in an up-and-down
                  motion, creating a rhythmic effect that resembles the beating
                  of a heart. However, rather than imitating an organic pulse,
                  the movement follows a mechanical cadence, which evokes a
                  sense of artificial life. This steady, machine-like rhythm,
                  combined with Mondrian’s iconic color palette, creates a
                  compelling fusion of modernist abstraction and futuristic
                  design.
                  <br />
                  <br />
                  To enhance audience engagement, the entire cube rotates
                  continuously, allowing viewers to observe each panel from
                  multiple angles. This rotation reveals how each subdivision
                  contributes to the overall structure, inviting the viewer to
                  experience the work in motion rather than from a fixed
                  perspective. The result is a dynamic, ever-changing sculpture
                  that pays tribute to Mondrian’s legacy while exploring the
                  emotional potential of motion, geometry, and code in a digital
                  age.
                  <br />
                  <br />
                  #Generative Art
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
