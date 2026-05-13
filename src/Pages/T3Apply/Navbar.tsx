import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { T3_ASSETS } from '../../lib/t3Assets';
import { CloudinaryImage } from '../../components/t3-recweek/CloudinaryImage';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Find the vertical green logo asset
  const greenLogo = T3_ASSETS.logos.find(
    (logo) => logo.public_id === "Vertical_-_Green_l2vte9"
  ) || { public_id: "Vertical_-_Green_l2vte9", display_name: "GW Logo" };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Application Steps', href: '#steps' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'FAQs', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 h-22 w-full bg-[var(--color-app-white)]/95 backdrop-blur-md flex items-center justify-between px-6 py-3 md:px-12 transition-all duration-300 border-b border-[#B34865]/10">
      {/* GW Logo Container - takes only necessary width */}
      <a 
        href="#about" 
        onClick={(e) => handleScroll(e, '#about')}
        className="flex items-center h-full py-2 shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <CloudinaryImage
          publicId={greenLogo.public_id}
          alt={greenLogo.display_name}
          className="h-14 w-auto object-contain"
        />
      </a>

      {/* Desktop & Tablet Inline Navigation Options */}
      <div className="hidden md:flex items-center justify-end flex-1 gap-6 lg:gap-10 ml-8">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="font-futura-bold text-[#B34865] text-lg lg:text-xl tracking-wide hover:text-[#48B38A] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#48B38A] after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.name.toUpperCase()}
          </a>
        ))}
      </div>

      {/* Mobile Burger Menu Button */}
      <div className="relative md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#B34865] hover:text-[#48B38A] transition-colors duration-300 cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Dropdown Navigation Links */}
        {isOpen && (
          <div className="absolute right-0 mt-4 w-64 bg-[#E8E4DD] border-2 border-[#B34865] rounded-xl shadow-[6px_6px_0px_0px_#B34865] py-4 px-6 flex flex-col gap-4 origin-top-right transition-all duration-300">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-futura-bold text-[#B34865] text-xl hover:text-[#48B38A] hover:translate-x-1 transition-all duration-200 block py-1 border-b border-[#B34865]/10 last:border-none"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
