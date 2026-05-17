import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { T3_ASSETS } from '../../lib/t3Assets';
import { CloudinaryImage } from '../../components/t3-recweek/CloudinaryImage';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroPassed = useRef(false);
  const lastScrollY = useRef(0);

  const greenLogo = T3_ASSETS.logos.find(
    (logo) => logo.public_id === "Vertical_-_Green_l2vte9"
  ) || { public_id: "Vertical_-_Green_l2vte9", display_name: "GW Logo" };

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Application Steps', href: '#steps' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Apply Now', href: 'https://forms.gle/44nZBcpfgAyKT9m9A'}
  ];

  // Track when the hero has been scrolled past
  useEffect(() => {
    const hero = document.querySelector('#hero') as HTMLElement | null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroPassed.current = !entry.isIntersecting;
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          // Once hero is exceeded, display immediately on tablet/desktop viewports
          if (window.innerWidth >= 768) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0 }
    );

    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Responsive visibility scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;
      const isDesktopOrTablet = window.innerWidth >= 768;

      if (heroPassed.current) {
        if (isDesktopOrTablet) {
          // Tablet & Desktop: keep visible continuously once past the hero
          setIsVisible(true);
        } else {
          // Mobile: display only when scrolling up
          setIsVisible(scrollingUp);
        }
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-evaluate visibility state if viewport resizes across breakpoints dynamically
  useEffect(() => {
    const handleResize = () => {
      if (heroPassed.current && window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile dropdown when navbar hides
  useEffect(() => {
    if (!isVisible) setIsOpen(false);
  }, [isVisible]);

  const handleLinkScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`
        fixed top-0 z-50 h-18 w-full bg-[var(--color-app-white)]/95 backdrop-blur-md
        flex items-center justify-between px-6 py-3 md:px-12
        border-b border-[#B34865]/10
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <a
        href="#about"
        onClick={(e) => handleLinkScroll(e, '#about')}
        className="flex items-center h-full py-2 shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <CloudinaryImage
          publicId={greenLogo.public_id}
          alt={greenLogo.display_name}
          width={100}
          className="h-14 w-auto object-contain"
        />
      </a>

      <div className="hidden md:flex items-center justify-end flex-1 gap-6 lg:gap-10 ml-8">
        {navLinks.map((link, index) => {
          if (link.name === "Apply Now"){
            return (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkScroll(e, link.href)}
                className="font-futura-bold text-app-white bg-[#06402B] px-2 text-lg lg:text-xl tracking-wide transition-colors duration-200 relative py-1 after:absolute after:bottom-1 after:left-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)]"
              >
                {link.name.toUpperCase()}
              </a>
            )
          }
          return(
          <a
            key={index}
            href={link.href}
            onClick={(e) => handleLinkScroll(e, link.href)}
            className="font-futura-bold text-[#B34865] text-lg lg:text-xl tracking-wide hover:text-[#48B38A] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#48B38A] after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.name.toUpperCase()}
          </a>
          )
        })}
      </div>

      <div className="relative md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#B34865] hover:text-[#48B38A] transition-colors duration-300 cursor-pointer focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-4 w-64 bg-[#E8E4DD] border-2 border-[#B34865] rounded-xl shadow-[6px_6px_0px_0px_#B34865] py-4 px-6 flex flex-col gap-4 origin-top-right transition-all duration-300">
            {[...navLinks].sort((a) => (a.name === "Apply Now" ? -1 : 1)).map((link, index) => {
              if (link.name === "Apply Now") {
                return (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => handleLinkScroll(e, link.href)}
                    className="font-futura-bold text-xl hover:translate-x-1 transition-all duration-200 block py-1 border-b border-[#B34865]/10 last:border-none"
                  >
                    <span className="inline-block bg-[#06402B] text-app-white px-2">
                      {link.name}
                    </span>
                  </a>
                );
              }
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleLinkScroll(e, link.href)}
                  className="font-futura-bold text-[#B34865] text-xl hover:text-[#48B38A] hover:translate-x-1 transition-all duration-200 block py-1 border-b border-[#B34865]/10 last:border-none"
                >
                  {link.name}
                </a>
              );
            })}

          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;