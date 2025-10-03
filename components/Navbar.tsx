"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#0D0D0D] shadow-md fixed top-0 w-full z-50 font-sans">
      <div className="flex items-center justify-between h-16">
        {/* Logo / Title */}
        <div className="flex-shrink-0 text-white font-bold text-xl ml-2">
          Portfolio
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 mr-4">
          <Link href="/" className="text-white hover:text-[#00FFE0]">
            Home
          </Link>
          <Link href="/project" className="text-white hover:text-[#00FFE0]">
            Project
          </Link>
          <Link href="/skill" className="text-white hover:text-[#00FFE0]">
            Skill
          </Link>
        </div>

        {/* Mobile Options */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4">
          <Link href="/" className="text-white hover:text-[#00FFE0]">
            Home
          </Link>
          <Link href="/project" className="text-white hover:text-[#00FFE0]">
            Project
          </Link>
          <Link href="/skill" className="text-white hover:text-[#00FFE0]">
            Skill
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
