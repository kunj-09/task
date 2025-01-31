"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Img src="/SepnotyLogo.png" alt="Sepnoty Logo" />
          </div>
          <span className="text-white text-2xl font-semibold italic">Sepnoty</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex bg-[#1B1E2A] px-8 py-3 rounded-full space-x-6 shadow-md">
          <Link href="#" className="text-white text-sm hover:text-purple-300 transition">Features</Link>
          <Link href="#" className="text-white text-sm hover:text-purple-300 transition">Who We Are?</Link>
          <Link href="#" className="text-white text-sm hover:text-purple-300 transition">Services</Link>
          <Link href="#" className="text-white text-sm hover:text-purple-300 transition">Tepnoty App</Link>
          <Link href="#" className="text-white text-sm hover:text-purple-300 transition">Membership</Link>
          <Link href="#" className="text-white text-sm hover:text-purple-300 transition">Contact Us</Link>
        </div>

        {/* Join Now Button - Always Visible */}
        <button className="hidden md:block bg-[#9333EA] text-white px-5 py-2 rounded-full hover:bg-[#7E22CE] transition">
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#1B1E2A] shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link href="#" className="text-white text-lg hover:text-purple-300 transition">Features</Link>
          <Link href="#" className="text-white text-lg hover:text-purple-300 transition">Who We Are?</Link>
          <Link href="#" className="text-white text-lg hover:text-purple-300 transition">Services</Link>
          <Link href="#" className="text-white text-lg hover:text-purple-300 transition">Tepnoty App</Link>
          <Link href="#" className="text-white text-lg hover:text-purple-300 transition">Membership</Link>
          <Link href="#" className="text-white text-lg hover:text-purple-300 transition">Contact Us</Link>
          <button className="bg-[#9333EA] text-white px-5 py-2 rounded-full hover:bg-[#7E22CE] transition">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}
