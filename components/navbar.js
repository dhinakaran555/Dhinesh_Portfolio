"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-9 relative">
        <Link href="/" className="hover:text-[#eab308]">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#eab308]">
          About
        </Link>
        <Link href="/projects" className="hover:text-[#eab308]">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-[#eab308]">
          Contact
        </Link>
        <Link href="/footer" className="hover:text-[#eab308]">
          Footer
        </Link>

        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none transition-all duration-300"
          />
        )}

        <button
          onClick={() => setShowSearch(!showSearch)}
          className="cursor-pointer"
        >
          {showSearch ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-800 flex flex-col items-start px-12 py-4 space-y-3 md:hidden">
          <Link href="/" className="hover:text-[#eab308]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#eab308]">
            About
          </Link>
          <Link href="/projects" className="hover:text-[#eab308]">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#eab308]">
            Contact
          </Link>
          <Link href="/footer" className="hover:text-[#eab308]">
            Footer
          </Link>
        </div>
      )}
    </nav>
  );
}
