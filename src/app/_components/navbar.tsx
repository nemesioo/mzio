"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // State for toggling the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gray-800 p-4 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="text-2xl font-bold">MZIO</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center justify-center space-x-6 md:flex">
          {/* <Link href="#home" passHref>
            <span className="hover:text-gray-400">Home</span>
          </Link> */}
          <Link href="#about" passHref>
            <span className="hover:text-gray-400">About</span>
          </Link>
          <Link href="#projects" passHref>
            <span className="hover:text-gray-400">Projects</span>
          </Link>
          <Link href="#contact" passHref>
            <span className="hover:text-gray-400">Contact</span>
          </Link>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-800"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-4 bg-gray-800 p-4 md:hidden">
          {/* <Link href="#home" passHref>
            <span className="block text-white">Home</span>
          </Link> */}
          <Link href="#about" passHref>
            <span className="block text-white">About</span>
          </Link>
          <Link href="#projects" passHref>
            <span className="block text-white">Projects</span>
          </Link>
          <Link href="#contacts" passHref>
            <span className="block text-white">Contact</span>
          </Link>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-800"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
