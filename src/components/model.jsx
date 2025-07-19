import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Model({
  url,
  material,
  applyFloorTextures = false,
  castShadow = false,
  receiveShadow = false,
  position = [0, 0, 0],
  scale = 1,
}) {
  // Vite's base URL ("/website/" in production)
  const base = import.meta.env.BASE_URL;

  // 1. Load the OBJ, prepending the base path
  const obj = useLoader(
    OBJLoader,
    // e.g. "models/floor.obj" → "/website/models/floor.obj"
    base + url
  );

  // 2. Load floor textures with the same base path
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture([
    base + "textures/floor/floor_initialShadingGroup_BaseColor.png",
    base + "textures/floor/floor_initialShadingGroup_Normal.png",
    base + "textures/floor/floor_initialShadingGroup_Roughness.png",
    base + "textures/floor/floor_initialShadingGroup_Metallic.png",
  ]);

  // 3. Apply materials & shadows once loaded
  useEffect(() => {
    obj.traverse((child) => {
      if (!child.isMesh) return;

      // If flag set, swap in our floor textures
      if (applyFloorTextures) {
        child.material = new THREE.MeshStandardMaterial({
          map: colorMap,
          normalMap: normalMap,
          normalScale: new THREE.Vector2(2, 2),
          roughnessMap: roughnessMap,
          metalnessMap: metalnessMap,
          roughness: 1,
          metalness: 1,
        });
      }
      // Or use a custom material passed in
      else if (material) {
        child.material = material;
      }

      child.castShadow = castShadow;
      child.receiveShadow = receiveShadow;
      child.material.needsUpdate = true;
    });
  }, [
    obj,
    material,
    applyFloorTextures,
    colorMap,
    normalMap,
    roughnessMap,
    metalnessMap,
    castShadow,
    receiveShadow,
  ]);

  // 4. Render the loaded object
  return <primitive object={obj} position={position} scale={scale} />;
}
