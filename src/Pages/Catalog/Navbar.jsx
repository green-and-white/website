import React, { useState, useEffect } from 'react';

import whiteVertical from '@/assets/logos_updated/white-vertical.svg';
import yearbook2026 from '@/assets/stickers/YEARBOOK_2026.webp';

import styles from '../Main/home.module.css';

import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '#header', type: 'section' },
    { name: 'Links', href: '/links', type: 'route' },
    { name: 'Catalog', href: '#catalog', type: 'section'},
    { name: 'Apply', href: '/apply', type: 'route'}    
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = window.innerHeight - window.innerHeight * 0.7;
      
      // Always show navbar in the header section (first screen)
      if (currentScrollY < headerHeight) {
        setShowNavbar(true);
      } else {
        // Apply scroll-based behavior only after header
        if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          setShowNavbar(true);
        } else if (currentScrollY > lastScrollY) {
          // Scrolling down - hide navbar
          setShowNavbar(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 px-4 sm:px-6 md:px-8
        ${showNavbar ? "translate-y-12" : "-translate-y-full"}`}
    >
      {/* Desktop Navigation */}
      <div className={`hidden md:flex max-w-[1280px] mx-auto py-4 px-8 items-center justify-between ${styles.glassCard} rounded-full`}>
        {/* Left: Logo and Sticker */}
        <div className="flex items-center gap-4 ">
          <img src={yearbook2026} alt="Yearbook 2026" className="h-12 py-0.5"/>

           {/* Beside : Pre-register Link */}
          <div className="flex">
            <a
              className="text-[#EED849] font-helvetica font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-gray-300"
              href="https://forms.gle/xNBJWFrup67DRsjP8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                WebkitTextStrokeColor: '#000',
                WebkitTextStrokeWidth: '1px',
                paintOrder: 'stroke fill'
              }}
            >
              Pre-register for 2026
            </a>
          </div>
        </div>

        {/* Center: Nav Links */}
        <div className="flex gap-8 flex-1 justify-end">
          {navLinks.map((link, index) => (
            link.type === 'route' ? (
            <Link
                key={index}
                to={link.href}
                className="text-white font-helvetica text-xl cursor-pointer transition-colors duration-300 hover:text-gray-300"
            >
                {link.name}
            </Link>
            ) : (
            <a
                key={index}
                href={link.href}
                className="text-white font-helvetica text-xl cursor-pointer transition-colors duration-300 hover:text-gray-300"
            >
                {link.name}
            </a>
            )
        ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden py-4 px-6 ${styles.glassCard} rounded-3xl`}>
        <div className="flex items-center justify-between">
          {/* Logo and Sticker */}
          <div className="flex items-center gap-2">
            <img src={yearbook2026} alt="Yearbook 2026" className="h-10" />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link, index) => (
                link.type === 'route' ? (
                <Link
                    key={index}
                    to={link.href}
                    className="text-white font-helvetica font-bold text-base transition-colors duration-300 hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </Link>
                ) : (
                <a
                    key={index}
                    href={link.href}
                    className="text-white font-helvetica font-bold text-base transition-colors duration-300 hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </a>
                )
            ))}
            <a
              className="text-[#EED849] font-helvetica font-bold text-base cursor-pointer transition-colors duration-300 hover:text-gray-300"
              href="https://forms.gle/xNBJWFrup67DRsjP8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                WebkitTextStrokeColor: '#000',
                WebkitTextStrokeWidth: '2px',
                paintOrder: 'stroke fill'
              }}
            >
              Pre-register for 2026
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
