import about from "../assets/video/about.mp4";

export default function About() {
  return (
    <section className="relative w-full max-h-[725px] overflow-hidden font-montserrat">
      {/* Background video */}
      <video
        src={about}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay (text on top of video) */}
      <div className="relative z-10 flex items-center justify-center h-[600px]">
        <div className="text-center text-white px-6 max-w-[800px]">
          <h2 className="section-header">
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

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </section>
  );
}
