'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        {/* Brand Logo with Image */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-wide text-emerald-400 whitespace-nowrap"
        >
          <Image 
            src="/images/logo.jpg" 
            alt="Minhas Brothers Logo" 
            width={40} 
            height={40} 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-emerald-400/40"
          />
          <span>
            MINHAS <span className="text-xs sm:text-sm font-normal text-gray-300 inline sm:inline-block ml-1">BROTHERS</span>
          </span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <Link href="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-emerald-400 transition">
            Products
          </Link>
          <Link href="/about" className="hover:text-emerald-400 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden text-gray-300 hover:text-emerald-400 focus:outline-none p-1.5 rounded-md hover:bg-slate-800 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/60 px-6 py-4 space-y-3 font-semibold text-sm">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-emerald-400 transition"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-emerald-400 transition"
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-emerald-400 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-1 hover:text-emerald-400 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}