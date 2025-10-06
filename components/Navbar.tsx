"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi"; // icon menu
import { HiX } from "react-icons/hi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black/50 fixed top-0 w-full z-[9999] font-sans">
      <div className="flex items-center justify-between h-16">
        {/* Logo / Title */}
        <div className="flex-shrink-0 text-white font-bold text-xl ml-2">
          Portfolio
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 mr-4">
          <Link href="#home" className="text-white hover:text-[#00FFE0]">
            Beranda
          </Link>
          <Link href="#project" className="text-white hover:text-[#00FFE0]">
            Proyek
          </Link>
          <Link href="#certificate" className="text-white hover:text-[#00FFE0]">
            Sertifikat
          </Link>
        </div>

        {/* Mobile Options */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none mr-4"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4">
          <Link href="/" className="text-white hover:text-[#00FFE0]">
            Beranda
          </Link>
          <Link href="#project" className="text-white hover:text-[#00FFE0]">
            Proyek
          </Link>
          <Link href="#certificate" className="text-white hover:text-[#00FFE0]">
            Sertifikat
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
