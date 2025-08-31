import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 font-montserrat">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* First row: logo, about, socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/assets/gnw-logo.png"
              alt="Green & White Logo"
              className="h-12 mb-3"
            />
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
            <div className="flex gap-4">
              <a href="https://www.facebook.com/dlsu.gnw" aria-label="Facebook">
                <img src={facebook} alt="Facebook" className="h-6 w-6 hover:opacity-80 transition" />
              </a>
              <a href="https://www.instagram.com/greenandwhite.dlsu/" aria-label="Instagram">
                <img src={instagram} alt="Instagram" className="h-6 w-6 hover:opacity-80 transition" />
              </a>
              <a href="https://github.com/green-and-white" aria-label="GitHub">
                <img src={github} alt="GitHub" className="h-7 w-7 hover:opacity-80 transition" />
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
            Website by Johan Marlo Cabili, Ramon Martinez, & Jabin Guamos
          </p>
          <p>
            Art and graphics by <span className="text-white">Kim Balasabas & Kurt Villagracia</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
