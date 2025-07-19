import React, { useState, useEffect, useRef } from "react";
// Vite public base path ("/website/" in production)
const base = import.meta.env.BASE_URL;
import Background from "../sections/icon";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";
import Gallery, { portfolioImages } from "../components/gallery";

// ===================================================================
//  The "encage" p5.js sketch, adapted for React
// ===================================================================
const encageSketch = (p) => {
  let numLines = 50;
  let amp = 110;
  let mod1 = 10;
  let mod2 = -0.049;
  let twist = 0.385;
  let shapegap = 30;
  let rotateCanvas = 0;
  let scroll = 0.38;
  let startHue = 200;
  let endHue = 260;
  let numSteps = 10;
  let spriteSeedX, spriteSeedY;
  let seeds = [];
  let walkers = [];
  var xmotion = 0;
  var ymotion = 0;
  let rx = 0;
  let ry = 0;
  let ax = 0;
  let ay = 0;
  let strokeColor = { h: 200, s: 100, b: 100, a: 8 };

  // Helper functions adapted for instance mode
  function rF1(x, y) {
    return { x: x / 2, y: y / 2 };
  }
  function rF2(x, y) {
    return { x: (p.width / 32 + x) / 2, y: (p.height / 2 + y) / 1.5 };
  }
  function rF3(x, y) {
    return { x: (p.width / 8 + x) / 1.25, y: y / 2 };
  }
  function rF4(x, y) {
    return { x: (p.width / 16 + x) / 1.75, y: (p.height / 4 + y) / 1.3 };
  }
  function rF5(x, y) {
    return { x: (p.width / 12 + x) / 1.6, y: (p.height / 3 + y) / 1.4 };
  }
  function rF6(x, y) {
    return { x: (p.width / 20 + x) / 1.9, y: (p.height / 5 + y) / 1.25 };
  }
  function rF7(x, y) {
    return { x: x * 0.8 + p.width / 10, y: y * 0.7 + p.height / 10 };
  }
  function rF8(x, y) {
    return { x: x * 0.6 + p.width / 5, y: y * 0.5 + p.height / 5 };
  }
  function rF9(x, y) {
    return { x: x * 0.9 + p.width / 15, y: y * 0.85 + p.height / 15 };
  }

  function aF1(x, y) {
    return { x: x, y: y };
  }
  function aF2(x, y) {
    return { x: (0.25 + x) / 2, y: y / 8 };
  }
  function aF3(x, y) {
    return { x: 1 + x, y: y };
  }
  function aF4(x, y) {
    return { x: (x + 0.1) / 1.2, y: (y + 0.1) / 1.5 };
  }
  function aF5(x, y) {
    return { x: (x - 0.15) * 1.1, y: (y + 0.05) * 1.2 };
  }
  function aF6(x, y) {
    return { x: (x + 0.05) * 1.3, y: (y - 0.1) * 1.4 };
  }
  function aF7(x, y) {
    return { x: x * 0.9 + 0.1, y: y * 0.8 + 0.05 };
  }
  function aF8(x, y) {
    return { x: x * 1.1 - 0.05, y: y * 0.95 + 0.02 };
  }
  function aF9(x, y) {
    return { x: x * 1.2 + 0.15, y: y * 1.1 - 0.05 };
  }

  var rFuns = [rF1, rF2, rF3, rF4, rF5, rF6, rF7, rF8, rF9];
  var aFuns = [aF1, aF2, aF3, aF4, aF5, aF6, aF7, aF8, aF9];

  function initializeWalkers() {
    walkers = [];
    for (let i = 0; i < 100; i++) {
      let w = new Walker(
        p.random(p.width),
        p.random(p.height),
        (i + 1) / 5,
        2.5 * i
      );
      walkers.push(w);
    }
  }

  p.setup = () => {
    const container = document.getElementById("p5-container");
    const side = Math.min(container.offsetWidth, container.offsetHeight);
    const canvasSize = Math.min(side, 550);
    p.createCanvas(canvasSize, canvasSize).parent(container);

    p.background(0);
    initializeWalkers();

    spriteSeedX = p.random(1000);
    spriteSeedY = p.random(1000);
    for (let i = 0; i < numLines; i++) {
      seeds.push({ x: p.random(1000), y: p.random(1000) });
    }
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.noStroke();
    p.frameRate(60);
  };

  p.windowResized = () => {
    const container = document.getElementById("p5-container");
    if (container) {
      const side = Math.min(container.offsetWidth, container.offsetHeight);
      const canvasSize = Math.min(side, 550);
      p.resizeCanvas(canvasSize, canvasSize);
      p.background(0);
      initializeWalkers(); // Re-initialize walkers for new canvas size
    }
  };

  p.draw = () => {
    let t = p.millis() / 1000;
    for (let stepCount = 0; stepCount < numSteps; stepCount++) {
      for (let i = 0; i < walkers.length; i++) {
        walkers[i].step();
        walkers[i].render();
      }
    }
    p.blendMode(p.ADD);
    let spriteX = p.map(p.noise(t * 0.1 + spriteSeedX), 0, 1, 0, p.width);
    let spriteY = p.map(p.noise(t * 0.1 + spriteSeedY), 0, 1, 0, p.height);
    let spritePos = p.createVector(spriteX, spriteY);
    p.push();
    p.translate(spritePos.x, spritePos.y);
    p.rotate(rotateCanvas * -p.TWO_PI);
    p.scale(0.5);
    let numPoints = 20;
    for (let i = 0; i < numLines; i++) {
      p.push();
      let offsetX = p.map(p.noise(t * 2.3 + seeds[i].x), 0, 1, -50, 50);
      let offsetY = p.map(p.noise(t * 2.3 + seeds[i].y), 0, 1, -50, 50);
      p.translate(offsetX, offsetY);
      p.rotate(-p.TWO_PI * twist * i);
      for (let j = 0; j < numPoints; j++) {
        let tt = p.map(j, 0, numPoints - 1, -0.5, 0.5);
        let innerVal = p.sin(tt + i * mod1 + scroll * p.TWO_PI);
        let displacement = p.sin(
          innerVal * amp + ((mod2 / 0.3) * p.PI * tt) / 6.0
        );
        let x = tt * shapegap;
        let y = displacement * shapegap;
        let hueVal = p.lerp(startHue, endHue, j / (numPoints - 1));
        p.fill(hueVal, 180, 100, 10);
        p.rect(x, y, 9, 9);
        p.ellipse(x, y, 7, 7);
      }
      p.pop();
    }
    p.pop();
    p.blendMode(p.BLEND);

    strokeColor.h = p.map(p.sin(p.frameCount * 0.01), -1, 1, 200, 210);
    strokeColor.s = p.map(p.sin(p.frameCount * 0.015), -1, 1, 20, 40);
    strokeColor.a = p.map(p.sin(p.frameCount * 0.02), -1, 1, 5, 15);
    p.blendMode(p.ADD);
    drawTopLayer();
    drawTopLayer();
    p.blendMode(p.BLEND);
  };

  class Walker {
    constructor(xpos, ypos, stepSz, c) {
      this.x = xpos;
      this.y = ypos;
      this.lx = xpos;
      this.ly = ypos;
      this.stepSz = stepSz;
      this.c = c;
    }

    step() {
      let flip = p.floor(p.random(0, 4));
      if (flip === 0) {
        this.x += this.stepSz;
      } else if (flip === 1) {
        this.x -= this.stepSz;
      } else if (flip === 2) {
        this.y += this.stepSz;
      } else if (flip === 3) {
        this.y -= this.stepSz;
      }
      this.x = (this.x + p.width) % p.width;
      this.y = (this.y + p.height) % p.height;
    }

    render() {
      p.noStroke();
      p.fill(0);
      p.rect(this.x, this.y, this.stepSz, this.stepSz);
      this.lx = this.x;
      this.ly = this.y;
    }
  }

  function drawTopLayer() {
    for (let i = 0; i < 7500; i++) {
      let index1 = p.floor(p.random(0, 9));
      let r = rFuns[index1](rx, ry);
      rx = r.x;
      ry = r.y;

      let a = aFuns[(index1 + 1) % aFuns.length](ax, ay);
      ax = a.x;
      ay = a.y;

      let inputX = (rx + 0.5 * ax) * 0.01 + xmotion;
      let inputY = (ry + 0.5 * ay) * 0.01 + ymotion;
      let nx = p.noise(inputX);
      let ny = p.noise(inputY);
      let x = p.map(nx, 0, 1, -p.width * 0.4, p.width * 1.4);
      x = x < 0 ? p.width + (x % p.width) : x % p.width;
      let y = p.map(ny, 0, 1, -p.height * 0.4, p.height * 1.4);
      y = y < 0 ? p.height + (y % p.height) : y % p.height;
      p.stroke(strokeColor.h, strokeColor.s, strokeColor.b, strokeColor.a);
      p.point(x, y);
    }
    xmotion += 0.06;
    ymotion += 0.06;
  }
};

// ===================================================================
// A reusable React component to host the p5.js sketch
// ===================================================================
const P5Sketch = ({ sketch }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (window.p5) {
      const p5Instance = new window.p5(sketch, sketchRef.current);
      return () => {
        p5Instance.remove();
      };
    }
  }, [sketch]);

  // This div hosts the p5.js canvas. Flexbox will center the canvas within it.
  return (
    <div
      ref={sketchRef}
      id="p5-container"
      className="w-full h-full flex items-center justify-center"
    />
  );
};

// ===================================================================
// Your main page component, now using <P5Sketch />
// ===================================================================
export default function aw_encage() {
  const defaultImage =
    portfolioImages.find((img) => img.src.endsWith("encage.png")) ||
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
              <Background imageUrl={base + hoveredImage.src} />
            </div>

            {/* Vertical Text */}
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
            {/* optional title/header */}
            <div className="flex-none p-8"></div>

            <div className="flex-1 mt-12 px-8 pb-8 overflow-auto">
              {/* p5.js Sketch Embed Container */}
              <div className="relative w-full h-[800px] mb-8 bg-white flex items-center justify-center">
                {/* The sketch is scaled down, revealing the white background of the parent */}
                <div className="w-full h-full scale-90">
                  <P5Sketch sketch={encageSketch} />
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
                  Encage
                  <span className="text-[0.85rem] font-bold">
                    <br />
                    *low-quality machine may experience low frame rate in the
                    real-time rendering
                  </span>
                </h2>
                <span
                  className="text-[0.7rem]"
                  style={{
                    fontFamily:
                      "'Lucida Sans Unicode','Helvetica','Andale Mono','Lucida Grande'",
                  }}
                >
                  Feb 2025
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
                  “Encage” is a critical software art created in p5.js that
                  explores the emotions of those who have been illegally
                  imprisoned and subjected to cruel treatment. They remain
                  confined and unable to escape, even when freedom is just a
                  single wall away. This confinement is not solely physical. It
                  also reflects deep-seated psychological and systemic forces
                  that continue to imprison them.
                  <br />
                  <br />
                  In this artwork, a collection of particles coalesces into a
                  luminous sprite symbolizing the human soul. This
                  representation roams endlessly and erratically across a
                  confined rectangular digital canvas, encapsulating the
                  restless search for freedom and meaning within oppressive
                  boundaries. The first visual layer of the piece manifests as a
                  subtly glowing grid composed of small, translucent rectangles
                  and circles, evoking the sense of an electronic barrier. This
                  digital barrier perpetually shifts its form, changing patterns
                  and intensities, yet it remains an insurmountable obstacle,
                  consistently blocking the soul’s escape attempts. It’s just
                  like a human trying to escape the room but endlessly colliding
                  with the wall and unable to find a way out.
                  <br />
                  <br />
                  The wall becomes more than a physical obstacle. It represents
                  an ever-present force that limits action, freedom, and hope.
                  Even the light within the grid feels oppressive, not
                  illuminating the path forward, but instead watching every
                  movement, acting as a silent form of surveillance. The soul’s
                  constant, futile movement generates a slow, haunting rhythm.
                  This rhythm captures the psychological torment of endless
                  captivity and speaks to the emotional toll of being confined
                  without escape.
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
