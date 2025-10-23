export default function Card({ bgColor = "bg-gray-200", activity = "Hi", description = "Hello" }) {
  return (
    <main
      className={`w-60 h-70 rounded-xl shadow-md flex flex-col items-center justify-center text-white text-xl font-semibold font-libre-caslon bg-conic-to-t ${bgColor}`}
    >
     <span className="underline underline-offset-4">{activity}</span>
     <p className="text-sm font-normal mt-1 text-center" style={{fontSize: 12, padding: 15}}>{description}</p>
    </main>
  );
}
