import React, { useState, useEffect } from 'react';

import whiteVertical from '@/assets/logos_updated/white-vertical.svg';
import yearbook2026 from '@/assets/stickers/YEARBOOK_2026.webp';

import styles from '../Main/home.module.css';

import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '#hero', type: 'section' },
    { name: 'Links', href: '/links', type: 'route' },
    { name: 'Catalog', href: '/catalog', type: 'route'},
    //{ name: 'Apply', href: '/apply', type: 'route'}    
];

//own component, diff behavior on scroll for main page

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling up, show when scrolling down
      // But only show if we've scrolled past 10px
      if (currentScrollY < lastScrollY) {
        // Scrolling up - hide navbar
        setShowNavbar(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 20) {
        // Scrolling down - show navbar
        setShowNavbar(true);
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
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50  px-4 sm:px-6
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
              className="text-[#FEC530] font-libre-caslon font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-gray-300"
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
                className="text-white font-helvetica font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-gray-300"
            >
                {link.name}
            </Link>
            ) : (
            <a
                key={index}
                href={link.href}
                className="text-white font-helvetica font-bold text-xl cursor-pointer transition-colors duration-300 hover:text-gray-300"
            >
                {link.name}
            </a>
            )
        ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden py-4 px-6 rounded-3xl ${styles.glassCard}`}>
        <div className="flex items-center justify-center gap-4">
          {/* Logo and Sticker - Now clickable to open menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img src={yearbook2026} alt="Yearbook 2026" className="h-10" />
          </button>

          {/* Pre-register Link */}
          <a
            className="text-[#FEC530] font-bold text-sm cursor-pointer transition-colors duration-300 hover:text-gray-300 font-libre-caslon"
            href="https://forms.gle/xNBJWFrup67DRsjP8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              WebkitTextStrokeColor: '#000',
              WebkitTextStrokeWidth: '1px',
              paintOrder: 'stroke fill'
            }}
          >
            Pre-register for Yearbook 2026
          </a>
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
