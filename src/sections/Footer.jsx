import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import logo from '../assets/icons/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 md:px-8 py-12 font-montserrat">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* First row: logo, about, socials */}
        <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
          
          {/* Logo */}
          <div className="flex flex-row gap-2 items-center md:items-start">
            <img
              src={logo}
              alt="Green & White Logo"
              className="h-12"
            />
            <div className="flex flex-col justify-center items-center md:items-start font-montserrat">
              <div className="tracking-widest text-2xl text-center md:text-left">GREEN & WHITE</div>
              <div className="text-xs text-center md:text-left">Capturing Images of Lasallian Excellence</div>
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-bold mb-2">ABOUT</div>
            <p className="text-sm text-gray-300 max-w-xs">
              <span className="font-semibold">Green & White</span> is the official yearbook 
              publication of De La Salle University.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h4 className="text-sm font-semibold mb-3">FOLLOW US</h4>
            <div className="flex gap-4 md:-ml-1.5">
              <a href="https://www.facebook.com/dlsu.gnw" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className="h-6 w-6 hover:opacity-80 transition" />
              </a>
              <a href="https://www.instagram.com/greenandwhite.dlsu/" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="h-6 w-6 hover:opacity-80 transition" />
              </a>
              <a href="https://github.com/green-and-white" aria-label="GitHub">
                <img src={github} alt="GitHub" className="h-6 w-6 hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-8"></div>

        {/* Second row: credits */}
        <div className="text-center md:text-left text-sm">
          <div className="font-bold mb-2">CREDITS</div>
          <p>
            Website by Ramon Enrico Martinez, Johan Marlo Cabili, & Jabin Guamos
          </p>
          <p>
            Art by Andrea Estrella
          </p>
        </div>
      </div>
    </footer>
  );
}
