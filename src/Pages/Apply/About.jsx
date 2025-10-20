import about from "@/assets/video/about.webm";

export default function About() {
  return (
    <section id="about" className="relative w-full h-screen grid items-center md:max-h-[725px] overflow-hidden font-montserrat">
      {/* Background video */}
      <video
        src={about}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />
      {/* Custom gradient overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#161051_10%,#000000_50%,#161051_130%)] opacity-90 z-0"></div>  */}
      <div className = "absolute inset-0 z-0 about-gradient"></div>
    {/* <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#170e4f] to-[#030209] opacity-100"></div>
    <div className="absolute inset-x-0 top-1/3 h-1/3 bg-black opacity-75"></div>
    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0824] to-[#030209] opacity-100"></div> */}
      {/* Overlay (text on top of video) */}
      <div className="relative z-10 flex items-center justify-center h-[600px]">
        <div className="text-center text-white px-6 max-w-[800px]">
          <h2 className="section-header font-insideout">
            About Us
          </h2>
          <p className="mt-4 text-base md:text-xl drop-shadow font-montserrat ">
            <strong>Green & White</strong> is the official yearbook publication of De La Salle University. 
          </p>
          <p className="mt-4 text-base md:text-xl drop-shadow font-montserrat">
            Celebrating its 101st year, the publication lives as the record-keeper of Lasallian memories. 
            From portraits to pages, <strong>Green & White</strong> brings the Lasallian community together and etches their 
            place in time through the yearbook.
          </p>
        </div>
      </div>

    
    </section>
  );
}
