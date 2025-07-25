// src/App.jsx
import React, { useState, useEffect } from "react";
import Background from "./sections/background";
import Navbar from "./sections/navbar";
import Title from "./sections/title";
import Footer from "./sections/footer";

export default function App() {
  // Only control the background animation now
  const [isBgVisible, setIsBgVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsBgVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background blur→focus */}
      <div
        className={`transition-all duration-2000 ease-in-out ${
          isBgVisible ? "opacity-100 blur-0" : "opacity-0 blur-lg"
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
