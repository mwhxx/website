// src/sections/backgroundGlow.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import { EffectComposer, Bloom, SSAO } from "@react-three/postprocessing";
import * as THREE from "three";
import { Model } from "../components/model";

// — Procedural materials for non‐floor objects —
const wallMaterial = new THREE.MeshStandardMaterial({
  color: "#555555",
  metalness: 0.1,
  roughness: 0.9,
});

// — Glowing material just for the frame/videoimage —
const frameMaterial = new THREE.MeshStandardMaterial({
  color: "#222222", // base color
  metalness: 0.2,
  roughness: 0.3,
  emissive: new THREE.Color("#ffffff"),
  emissiveIntensity: 2.5,
});
frameMaterial.toneMapped = false;

export default function BackgroundGlow() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        gl={{
          physicallyCorrectLights: true,
          outputEncoding: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        camera={{ position: [12.26, 2.08, 13.97], fov: 45 }}
      >
        <color attach="background" args={["#000000"]} />
        <OrbitControls target={[0, 2, 0]} enabled={false} />
        <ambientLight intensity={0} />
        <pointLight
          castShadow
          position={[0, 2, 0]}
          color="#ccf2ff"
          intensity={8}
          distance={20}
        />

        <Suspense fallback={null}>
          {/* Note: pass relative paths (no leading slash) */}
          <Model
            url="models/floor.obj"
            applyFloorTextures
            receiveShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="models/frame.obj"
            material={wallMaterial}
            castShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="models/part1.obj"
            material={wallMaterial}
            castShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="models/part2.obj"
            material={wallMaterial}
            castShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          {/* videoimage.obj now uses our glowing frameMaterial */}
          <Model
            url="models/videoimage.obj"
            material={frameMaterial}
            position={[0, -2.5, 0]}
            scale={1}
          />
        </Suspense>

        <EffectComposer>
          <SSAO radius={0.1} intensity={20} luminanceInfluence={0.1} normalBuffer depthBuffer />
          <Bloom
            luminanceThreshold={0.1}
            intensity={2.8}
            kernelSize={5}
            mipmapBlur
          />
        </EffectComposer>

        <CameraShake
          maxYaw={0.22}
          maxPitch={0.22}
          maxRoll={0.22}
          yawFrequency={0.22}
          pitchFrequency={0.2}
          rollFrequency={0.22}
          intensity={0.3}
        />
      </Canvas>
    </div>
  );
}
