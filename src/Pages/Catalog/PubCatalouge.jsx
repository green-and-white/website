import WaterBackground from "./WaterBackground";
export function PubCatalogue() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* 3D Background Layer */}
      <WaterBackground />

      {/* Content Layer (The Grid) */}
      <div className="relative z-10 container mx-auto py-20 pointer-events-none">
        <h2 className="text-center text-4xl font-bold text-yellow-400 mb-10">
          PUB CATALOGUE PROPER
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pointer-events-auto max-w-5xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className=" w-[200px] h-[200px] mx-auto bg-gray-900/50 backdrop-blur-sm border border-white/10 transition-transform hover:scale-105"
            >
              {/* Pub Content Here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}