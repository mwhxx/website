import React from "react";
import Background from "./sections/background";
import Navbar from "./sections/navbar";
import Title from "./sections/title";
import Footer from "./sections/footer";

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full-screen 3D background */}
      <Background />

      {/* Navbar on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

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

      {/* Footer on top */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Footer />
      </div>
    </div>
  );
}
