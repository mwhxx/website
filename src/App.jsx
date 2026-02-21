import React, { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import Background from "./sections/background";
import Navbar from "./sections/navbar";
import Title from "./sections/title";
import Footer from "./sections/footer";
import Loading from "./components/loading";

export default function App() {
  const { progress, total } = useProgress();
  const [isBgVisible, setIsBgVisible] = useState(false);

  useEffect(() => {
    // Wait until progress is 100 AND Three.js has registered the assets (total > 0)
    if (progress === 100 && total > 0) {
      const timer = setTimeout(() => setIsBgVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [progress, total]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Loading Screen Overlay */}
      <div
        className={`absolute inset-0 z-50 transition-opacity duration-1000 ease-in-out ${
          isBgVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ backgroundColor: "#000000" }}
      >
        {/* Custom 3D Loading Effect (Text Removed) */}
        <Loading />
      </div>

      {/* Background purely fading in (No Blur for Safari compatibility) */}
      <div
        className={`transition-opacity duration-2000 ease-in-out w-full h-full ${
          isBgVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Background />
      </div>

      {/* Navbar (static) */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Title */}
      <div
        className="
          absolute inset-0 flex flex-col items-start justify-center
          px-8 md:px-16 lg:px-32 z-10
          pointer-events-none
          [@media(max-width:1050px)]:hidden
          [@media(max-height:700px)]:hidden
        "
      >
        <Title />
      </div>

      {/* Footer (static) */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
