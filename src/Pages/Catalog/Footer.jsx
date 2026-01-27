import FooterBgImg from "@/assets/catalog/Footer.webp"
import Logo from "@/assets/icons/White-Vertical.svg"
import { Link } from "react-router-dom";

const glassStyle = {
  color: 'white',
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  border: '0.5px solid rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  padding: '2rem', 
  zIndex: 10
}; 

// Retrieved from main css module
const fontStyle = {
  textShadow: `
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.5),
    0px 4px 20px #000000
  `
};

const Footer = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-semibold font-libre-caslon"
    >
      
      {/* Image background */}
      <img 
        src={FooterBgImg} alt="footer bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div style={glassStyle} className="grid grid-cols-3">
        {/* Logo */}
        <div className="flex flex-col gap-2 border-r-2 border-white">
          <img 
            src={Logo}
            alt="G&W Logo"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
          <p
            style={fontStyle} 
          >
            Green & White is the official yearbook publication of De La Salle University.
          </p> 
        </div>   
        
        {/* Explore */}
        <div className="flex flex-col gap-6">
          <h3 className="border-b-2 border-white pr-14 w-fit">Explore</h3> 

          {/* Navlinks */}
          <div className="flex flex-col gap-4">
            {/* TODO: ADD LINKS */}
            <Link to="/">Homepage</Link> 
            <Link to="/">GW Links</Link> 
            <Link to="/">Pre-Register to the 2026 Yearbook</Link> 
            <Link to="/">Apply to Green & White</Link> 
          </div> 
        
        </div>
        
        {/* Contact Info */}
        <div>
          Contact
        </div>
      </div>
    </section>
  );
}

// {/* Footer Section */}
//         <section className="relative min-h-screen bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
//           <div className="container mx-auto px-8 py-20">
//             <div className="grid md:grid-cols-3 gap-12 mb-16">
//               {/* About */}
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-bold text-yellow-400 mb-6">About Us</h3>
//                 <p className="text-gray-400 leading-relaxed">
//                   Creating memorable experiences through stunning publications and timeless memories captured for the DLSU community.
//                 </p>
//                 <div className="flex gap-4 pt-4">
//                   <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition">
//                     <span className="text-black font-bold">f</span>
//                   </div>
//                   <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition">
//                     <span className="text-black font-bold">ig</span>
//                   </div>
//                   <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition">
//                     <span className="text-black font-bold">tw</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Links */}
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-bold text-yellow-400 mb-6">Quick Links</h3>
//                 <ul className="space-y-3 text-gray-400">
//                   <li className="hover:text-yellow-400 cursor-pointer transition">Home</li>
//                   <li className="hover:text-yellow-400 cursor-pointer transition">Publications</li>
//                   <li className="hover:text-yellow-400 cursor-pointer transition">Gallery</li>
//                   <li className="hover:text-yellow-400 cursor-pointer transition">Events</li>
//                   <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
//                 </ul>
//               </div>

//               {/* Contact */}
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-bold text-yellow-400 mb-6">Get in Touch</h3>
//                 <p className="text-gray-400">De La Salle University</p>
//                 <p className="text-gray-400">2401 Taft Avenue, Manila</p>
//                 <p className="text-gray-400 mt-4">Email: yearbook@dlsu.edu.ph</p>
//                 <p className="text-gray-400">Phone: +63 2 8524 4611</p>
//               </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="border-t border-gray-700 pt-8 mt-8">
//               <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
//                 <p>© 2026 DLSU Yearbook. All rights reserved.</p>
//                 <div className="flex gap-6 mt-4 md:mt-0">
//                   <span className="hover:text-yellow-400 cursor-pointer transition">Privacy Policy</span>
//                   <span className="hover:text-yellow-400 cursor-pointer transition">Terms of Service</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


export default Footer;