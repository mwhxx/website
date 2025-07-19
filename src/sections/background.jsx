import React, { Suspense, useMemo, useRef, useEffect } from "react";
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

// — Glowing material just for the frame —
const frameMaterial = new THREE.MeshStandardMaterial({
  color: "#222222", // base color
  metalness: 0.2,
  roughness: 0.3,
  emissive: new THREE.Color("#ffffff"), // glow color
  emissiveIntensity: 1.3, // glow strength
});
frameMaterial.toneMapped = false;

export default function Background() {
  // --- Video Texture Setup ---
  const videoRef = useRef();

  const video = useMemo(() => {
    const vid = document.createElement("video");
    vid.src = "/textures/encage.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    return vid;
  }, []);

  useEffect(() => {
    // attach video element to ref for Safari compatibility
    if (videoRef.current) return;
    videoRef.current = video;
    video.play().catch((err) => console.warn("Video play prevented:", err));
  }, [video]);

  const videoTexture = useMemo(() => {
    if (!video) return;
    const tex = new THREE.VideoTexture(video);
    if ("colorSpace" in tex) tex.colorSpace = THREE.SRGBColorSpace;
    else tex.encoding = THREE.sRGBEncoding;
    tex.needsUpdate = true;
    return tex;
  }, [video]);

  const videoMaterial = useMemo(() => {
    if (!videoTexture) return;
    const mat = new THREE.MeshStandardMaterial({
      map: videoTexture,
      emissiveMap: videoTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 2.0,
      metalness: 0,
      roughness: 0,
    });
    mat.toneMapped = false;
    return mat;
  }, [videoTexture]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        gl={{
          physicallyCorrectLights: true,
          outputEncoding: THREE.sRGBEncoding,
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
          intensity={15}
          distance={20}
        />

        <Suspense fallback={null}>
          <Model
            url="/models/floor.obj"
            applyFloorTextures
            receiveShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="/models/frame.obj"
            material={frameMaterial}
            castShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="/models/part1.obj"
            material={wallMaterial}
            castShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="/models/part2.obj"
            material={wallMaterial}
            castShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          {videoMaterial && (
            <Model
              url="/models/videoimage.obj"
              material={videoMaterial}
              position={[0, -2.5, 0]}
              scale={1}
            />
          )}
          <Model
            url="/models/audience.obj"
            material={wallMaterial}
            position={[1, -2.5, 4]}
            scale={0.85}
          />
        </Suspense>

        <EffectComposer>
          <SSAO radius={0.1} intensity={20} luminanceInfluence={0.1} />
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
