import DraggableItem from "./components/DraggableItem"; 
import logo from "./assets/icons/logo_dark.png";
import sample from "./assets/images/sample.png";
import folder from "./assets/images/folder.png"; // 👈 add folder image

const items = [
  { id: "obj1", src: sample, w: 300, start: { x: 80, y: 120 }, alt: "Sample Object 1" },
  { id: "obj2", src: sample, w: 150, start: { x: 400, y: 400 }, alt: "Sample Object 2" },

  // 👇 folder objects with labels
  { id: "folder1", src: folder, w: 50, start: { x: 1190, y: 20 }, alt: "College Days", label: "College Days" },
  { id: "folder2", src: folder, w: 50, start: { x: 1190, y: 100 }, alt: "G&W YB Application", label: "G&W YB Application" },
  { id: "folder2", src: folder, w: 50, start: { x: 1190, y: 190 }, alt: "G&W YB Application", label: "Application to Graduate" },
];

export default function ComingSoon() {
  const resetLayout = () => {
    items.forEach((i) => localStorage.removeItem(`drag:${i.id}`));
    window.location.reload();
  };

  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      {/* Logo at top center */}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-10 flex justify-center">
        <img src={logo} alt="Green & White" className="h-12 drop-shadow-md select-none" />
      </div>

      {/* Hero text center */}
      <section
        aria-label="Coming soon message"
        className="pointer-events-none fixed inset-0 flex flex-col items-center justify-center gap-3 text-center"
      >
        <span className="px-4 py-1 rounded-full font-bold text-sm tracking-wide
                        bg-white text-green-800 border border-green-700 shadow-sm">
          Class of 2026
        </span>

        <h1
          className="font-serif font-extrabold text-5xl sm:text-6xl md:text-7xl leading-tight
                      bg-clip-text text-transparent drop-shadow-sm"
          style={{ backgroundImage: "linear-gradient(180deg,#e5c872 0%,#c7a44a 50%,#b48b2e 100%)" }}
        >
          Keep Your Memories Alive.
        </h1>

        <a
          className="pointer-events-auto mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2
                      text-white font-medium hover:bg-blue-700 shadow transition"
          href="https://forms.gle/your-prereg-form"
          target="_blank"
          rel="noreferrer"
        >
          Pre-register Now
        </a>
      </section>

      {/* Draggable objects */}
    {items.map((it) => (
    <DraggableItem key={it.id} id={it.id} start={it.start}>
        <figure className="m-0 flex flex-col items-center text-center max-w-[110px]">
        <img
            src={it.src}
            alt={it.alt}
            style={{ width: it.w }}
            className="block select-none"
            draggable={false}
        />
        {it.label && (
            <figcaption className="mt-1 text-xs text-gray-800 break-words leading-tight max-w-[80px]">
            {it.label}
            </figcaption>
        )}
        </figure>
    </DraggableItem>
    ))}


      {/* Footer */}
      <footer className="fixed inset-x-0 bottom-0 bg-[#3b699a] text-white text-center py-4 m-1 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">COMING SOON</h1>
        <div className="mt-1 text-xs opacity-90">
          Website by Ramon Enrico Martinez, Johan Mario Cabili, &amp; Danielle Ang
        </div>
        {/* <button
          onClick={resetLayout}
          className="absolute right-3 top-3 rounded-md bg-white px-3 py-1 text-[#2a67a7] shadow"
        >
          Reset layout
        </button> */}
      </footer>
    </main>
  );
}
