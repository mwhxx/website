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
  // 1. load the OBJ
  const obj = useLoader(OBJLoader, url);

  // 2. load floor textures (we’ll only use them if applyFloorTextures is true)
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture([
    "/textures/floor/floor_initialShadingGroup_BaseColor.png",
    "/textures/floor/floor_initialShadingGroup_Normal.png",
    "/textures/floor/floor_initialShadingGroup_Roughness.png",
    "/textures/floor/floor_initialShadingGroup_Metallic.png",
  ]);

  useEffect(() => {
    obj.traverse((child) => {
      if (!child.isMesh) return;

      // swap in the floor material?
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
      } else if (material) {
        // or use the passed‐in material
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

  return <primitive object={obj} position={position} scale={scale} />;
}
