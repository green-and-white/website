import logo from "/src/assets/icons/logo.svg";
import logo2 from "/src/assets/icons/ARW_GW_SVG.svg"
export default function Hero() {
  return (

    <section className="relative bg-radial from-blue-900 from-11% to-blue-800 to-100% min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-between items-center text-center h-screen py-8">
          
            {/* Top: Logo + Org Name + Tagline */}
            <div className="relative flex flex-col h-1/2 md:justify-end md:bottom-16 items-center gap-2">
                <img src={logo2} alt="Logo" className="max-h-18" />

                <h2 className="font-waltograph text-white text-2xl md:text-3xl font-bold tracking-wide">
                    Green &amp; White
                </h2>

                <p className="font-montserrat text-white text-xs italic ">
                    CAPTURING IMAGES OF LASALLIAN EXCELLENCE
                </p>
            </div>
            <div className = "flex flex-col justify-between">
                {/* Bottom: Tagline */}
                <p className="text-white text-center text-xs md:text-lg font-pixar">
                    ANNUAL RECRUITMENT WEEK
                </p>
            </div>
            {/* Middle: Headline */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-insideout font-bold tracking-wider text-white cta px-6 w-full">
                Make A Core Memory
            </h1>
         
        </div>
      </div>
    </section>
    
  );
}
