import React, { useState, useEffect } from 'react';
import logo from './assets/icons/logo.svg';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Applications', href: '#process' },
    { name: 'Dates', href: '#dates' },
    { name: 'FAQs', href: '#faqs' },
  ];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowNavbar(!entry.isIntersecting); // navbar visible once hero is not visible
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50
        ${showNavbar ? "translate-y-0 bg-opacity-30 backdrop-blur-sm shadow-md" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo/Brand (can be a logo image or text) */}
        <div className="flex-shrink-0 text-white font-insideout text-2xl font-bold">
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">
            <img src={logo} alt="Logo" className="max-h-10" 
                style={{
                    filter: "drop-shadow(0 0 2px white)"
            }}/>
            
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white font-montserrat cursor-pointer font-semibold transition-colors duration-300 hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white font-montserrat text-lg font-semibold uppercase transition-colors duration-300 hover:text-gray-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
