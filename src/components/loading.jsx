import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import "./loading.css";

const Loading = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // --- Scene, Camera, Renderer, and other setup is the same ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.radius = 0.3;
    bloomPass.threshold = 0.4;
    bloomPass.strength = 0.6;
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());
    const gridSize = 15;
    const spacing = 0.15;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x000000,
      size: 0.05,
    });
    const position = [];
    const nodes = [];
    for (let x = -gridSize / 2; x < gridSize / 2; x++) {
      for (let y = -gridSize / 2; y < gridSize / 2; y++) {
        for (let z = -gridSize / 2; z < gridSize / 2; z++) {
          const posX = x * spacing;
          const posY = y * spacing;
          const posZ = z * spacing;
          position.push(posX, posY, posZ);
          nodes.push({ x: posX, y: posY, z: posZ });
        }
      }
    }
    nodeGeometry.setAttribute(
      "position",
      new THREE.Float16BufferAttribute(position, 3)
    );
    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    const lineColors = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(
          nodes[i].x - nodes[j].x,
          nodes[i].y - nodes[j].y,
          nodes[i].z - nodes[j].z
        );
        if (dist < spacing * 2.5 && Math.random() > 0.8) {
          linePositions.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );
          lineColors.push(0, 0, 0, 1, 1, 1);
        }
      }
    }
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(lineColors, 3)
    );
    const linematerial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
    });
    const lineSegments = new THREE.LineSegments(lineGeometry, linematerial);
    scene.add(lineSegments);

    const textCanvas = document.createElement("canvas");
    const context = textCanvas.getContext("2d");

    const canvasWidth = 512;
    const canvasHeight = 128;
    textCanvas.width = canvasWidth;
    textCanvas.height = canvasHeight;

    // ✨ I've increased the font size slightly for better readability
    context.font = "bold 25px 'Lucida Grande', sans-serif";
    context.fillStyle = "#666666";
    context.textAlign = "center";
    context.textBaseline = "middle";
    // We will draw the text inside the animation loop, so no initial fillText here.

    const textTexture = new THREE.CanvasTexture(textCanvas);
    const textMaterial = new THREE.SpriteMaterial({
      map: textTexture,
      transparent: true,
    });

    const textSprite = new THREE.Sprite(textMaterial);
    textSprite.scale.set(6, 6 * (canvasHeight / canvasWidth), 1);
    textSprite.position.y = -2.5;
    scene.add(textSprite);

    const rotationSpeedX = (Math.random() - 0.5) * 0.3;
    const rotationSpeedY = (Math.random() - 0.5) * 0.3;

    // --- ✨ Added Clock for animation timing ---
    const clock = new THREE.Clock();
    const loadingDuration = 3; // The loading animation will take 3 seconds

    // Animation loop
    let animationFrameId;
    const animate = () => {
      // --- ✨ Update and redraw the loading text on each frame ---
      const elapsedTime = clock.getElapsedTime();
      const percent = Math.min((elapsedTime / loadingDuration) * 100, 100);
      const loadingString = `Now Loading [${Math.floor(percent)}%]`;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.fillText(loadingString, canvasWidth / 2, canvasHeight / 2);
      textTexture.needsUpdate = true; // Required to update the texture in the scene

      // Animate the geometry
      nodePoints.rotation.x += rotationSpeedX;
      lineSegments.rotation.x += rotationSpeedX;

      nodePoints.rotation.y += rotationSpeedY;
      lineSegments.rotation.y += rotationSpeedY;

      composer.render();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // --- Resize handler and Cleanup are the same ---
    const handleResize = () => {
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      composer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div className="loading-canvas-container" ref={mountRef}></div>;
};

export default Loading;
