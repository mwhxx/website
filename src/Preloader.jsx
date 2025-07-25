// src/Preloader.jsx
import React, { useState, useEffect } from "react";
import Loading from "./components/loading.jsx"; // adjust if needed

// 1) Full list of static assets to fetch up-front
const assetsToPreload = [
  // detailed thumbnails & icons
  "/assets/ad002.png",
  "/assets/ad003.png",
  "/assets/ad004.png",
  "/assets/amduscias.png",
  "/assets/close.svg",
  "/assets/cmc001.png",
  "/assets/k001.png",
  "/assets/k002.png",
  "/assets/k003.png",
  "/assets/k004.png",
  "/assets/liverguardian001.png",
  "/assets/liverguardian002.png",
  "/assets/liverguardian003.png",
  "/assets/liverguardian004.png",
  "/assets/lostinthelife001.png",
  "/assets/lostinthelife002.png",
  "/assets/mappm001.png",
  "/assets/mappm002.png",
  "/assets/mappm003.png",
  "/assets/menu.svg",
  "/assets/namshanestate001.png",
  "/assets/namshanestate002.png",
  "/assets/neuroblocks001.png",
  "/assets/neuroblocks002.png",
  "/assets/neuroblocks003.png",
  "/assets/plab001.png",
  "/assets/plab002.png",
  "/assets/plab003.png",
  "/assets/plab004.png",
  "/assets/pp001.png",
  "/assets/pp002.png",
  "/assets/pp003.png",
  "/assets/pp004.png",
  "/assets/pp005.png",
  "/assets/pp006.png",
  "/assets/pp007.png",
  "/assets/whiteechoes001.png",
  "/assets/whiteechoes004.png",
  "/assets/woodlogcake001.png",
  "/assets/woodlogcake002.png",

  // icon set
  "/assets/icon/adaptiveworld.png",
  "/assets/icon/aims.png",
  "/assets/icon/amdusuas.png",
  "/assets/icon/blood.png",
  "/assets/icon/cmc.png",
  "/assets/icon/cover.png",
  "/assets/icon/cuberangers.png",
  "/assets/icon/cuhk.png",
  "/assets/icon/encage.png",
  "/assets/icon/evilqueen.png",
  "/assets/icon/karma.png",
  "/assets/icon/liverguardian.png",
  "/assets/icon/lostinthelife.png",
  "/assets/icon/mappm.png",
  "/assets/icon/metalwireman.png",
  "/assets/icon/namshanestate.png",
  "/assets/icon/neuroblocks.png",
  "/assets/icon/phantomrabbit.png",
  "/assets/icon/plab.png",
  "/assets/icon/poisedperfection.png",
  "/assets/icon/roboticheart.png",
  "/assets/icon/secretknock.png",
  "/assets/icon/veiledtrading.png",
  "/assets/icon/voiceswithin.png",
  "/assets/icon/whiteechoes.png",
  "/assets/icon/woodlogcake.png",

  // floor textures
  "/assets/textures/floor/floor_initialShadingGroup_BaseColor.png",
  "/assets/textures/floor/floor_initialShadingGroup_Height.png",
  "/assets/textures/floor/floor_initialShadingGroup_Metallic.png",
  "/assets/textures/floor/floor_initialShadingGroup_Normal.png",
  "/assets/textures/floor/floor_initialShadingGroup_roughness.png",

  // video
  "/assets/encage.mp4",
];

// Helper: preload images via JS Image()
function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((res, rej) => {
          const img = new Image();
          img.onload = res;
          img.onerror = rej;
          img.src = src;
        })
    )
  );
}

// Helper: preload videos via <video> element
function preloadVideos(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((res) => {
          const vid = document.createElement("video");
          vid.preload = "metadata";
          vid.onloadedmetadata = () => res();
          vid.src = src;
        })
    )
  );
}

export default function Preloader({ children }) {
  const [ready, setReady] = useState(
    sessionStorage.getItem("appPreloaded") === "true"
  );

  useEffect(() => {
    if (ready) return;

    const startTime = Date.now();
    const MIN_DISPLAY_MS = 5000; // ensure loader shows at least 5s

    // 2) Warm up code-split chunks
    const codePromises = [
      import(/* webpackChunkName: "WorksPage" */ "./pages/works.jsx"),
      import(/* webpackChunkName: "AboutPage" */ "./pages/about.jsx"),
      import(/* webpackChunkName: "ExhibitPage" */ "./pages/exhibit.jsx"),
      // …add more if you split other pages
    ];

    // 3) Split assets into images vs. videos
    const imageUrls = assetsToPreload.filter((u) =>
      u.match(/\.(png|jpe?g|gif|svg)$/)
    );
    const videoUrls = assetsToPreload.filter((u) =>
      u.match(/\.(mp4|webm|ogg)$/)
    );

    const imagePromise = preloadImages(imageUrls);
    const videoPromise = preloadVideos(videoUrls);

    // 4) Wait for all + enforce minimum display duration
    Promise.all([...codePromises, imagePromise, videoPromise])
      .then(() => {
        const elapsed = Date.now() - startTime;
        const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
        setTimeout(() => {
          sessionStorage.setItem("appPreloaded", "true");
          setReady(true);
        }, wait);
      })
      .catch((err) => {
        console.error("Preloader error:", err);
        const elapsed = Date.now() - startTime;
        const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
        setTimeout(() => {
          // even on failure, let user in after 5s
          setReady(true);
        }, wait);
      });
  }, [ready]);

  // Show loader until ready, then render children (your <Routes> or <App/>)
  return ready ? children : <Loading />;
}
