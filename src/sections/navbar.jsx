// src/sections/navbar.jsx
import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul className="flex items-center space-x-5 sm:space-x-15">
      <li className="nav-li">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/works">
          Works
        </Link>
      </li>
      <li className="nav-li">
        <Link className="nav-link" to="/exhibit">
          Exhibit
        </Link>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="inset-x-0 z-20 w-full">
      <div className="mx-auto b-space max-w-8xl">
        <div className="flex items-center justify-between py-2 sm:py-9">
          <Link
            to="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            WMH
          </Link>

          {/* Hamburger button on small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt={isOpen ? "Close menu" : "Open menu"}
            />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile menu (slide-in) */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ maxHeight: "100vh" }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
