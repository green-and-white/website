export default function Card({ bgColor = "bg-gray-200", activity = "Hi", description = "Hello" }) {
  return (
    <main
      className={`w-60 h-70 rounded-xl shadow-md flex flex-col items-center justify-center text-white text-xl font-semibold font-libre-caslon bg-conic-to-t ${bgColor} hover:scale-105 transition-transform duration-300`}
    >
     <span className="underline underline-offset-4">{activity}</span>
     <p className="text-base py-3 px-6 font-normal mt-1 text-center">{description}</p>
    </main>
  );
}
