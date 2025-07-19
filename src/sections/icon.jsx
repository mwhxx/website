import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, CameraShake } from "@react-three/drei";
import { EffectComposer, Bloom, SSAO } from "@react-three/postprocessing";
import * as THREE from "three";
import { Model } from "../components/model";

export default function Background({ imageUrl }) {
  // Load (and reload) the texture whenever imageUrl changes
  const imageTexture = useLoader(THREE.TextureLoader, imageUrl);

  // Color encoding & UV flip
  if ("colorSpace" in imageTexture) {
    imageTexture.colorSpace = THREE.SRGBColorSpace;
  } else {
    imageTexture.encoding = THREE.SRGBColorSpace;
  }
  imageTexture.wrapS = THREE.RepeatWrapping;
  imageTexture.wrapT = THREE.RepeatWrapping;
  imageTexture.repeat.set(1, 1);
  imageTexture.offset.set(0, 1);

  // Determine emissive intensity based on filename
  const emissiveIntensity = imageUrl.toLowerCase().endsWith("/plab.png")
    ? 0.55
    : 0.78;

  // Build the emissive material
  const imageMaterial = new THREE.MeshStandardMaterial({
    map: imageTexture,
    emissiveMap: imageTexture,
    emissive: new THREE.Color(0xffffff),
    emissiveIntensity,
    metalness: 0,
    roughness: 0,
  });
  imageMaterial.toneMapped = false;

  // Static materials
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: "#555555",
    metalness: 0.1,
    roughness: 0.9,
  });
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: "#222222",
    metalness: 0.2,
    roughness: 0.3,
    emissive: new THREE.Color("#ffffff"),
    emissiveIntensity: 1.3,
  });
  frameMaterial.toneMapped = false;

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

        {/* Lights */}
        <ambientLight intensity={0} />
        <pointLight
          castShadow
          position={[7, 2, 4]}
          color="#ccf2ff"
          intensity={50}
          distance={20}
        />
        <pointLight
          castShadow
          position={[0, 2, 6]}
          color="#ccf2ff"
          intensity={3}
          distance={20}
        />

        <Suspense fallback={null}>
          {/* Floor & Walls */}
          <Model
            url="/models/floor.obj"
            applyFloorTextures
            receiveShadow
            position={[0, -2.5, 0]}
            scale={1}
          />
          <Model
            url="/models/frame.obj"
            material={wallMaterial}
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

          {/* Dynamically-textured panel */}
          <Model
            url="/models/videoimage.obj"
            material={imageMaterial}
            position={[0, -2.5, 0]}
            scale={1}
          />
        </Suspense>

        {/* Post‐processing */}
        <EffectComposer>
          <SSAO
            radius={0.1}
            intensity={20}
            luminanceInfluence={0.1}
            normalBuffer
            depthBuffer
          />
          <Bloom
            luminanceThreshold={0.1}
            intensity={1.8}
            kernelSize={5}
            mipmapBlur
          />
        </EffectComposer>

        {/* Camera shake */}
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
