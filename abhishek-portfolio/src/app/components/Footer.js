"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-32">
      {/* 🚀 Sliding Bar */}
      <div className="relative h-12 overflow-hidden bg-gradient-to-r from-[#0f1117] via-[#121821] to-[#0f1117] border-t border-cyan-800/30 shadow-inner">
        <div className="absolute whitespace-nowrap animate-marquee text-lg text-cyan-400 font-semibold tracking-wide flex gap-16 px-10">
          <span>🎯 Building Scalable, Elegant, and Efficient Digital Products.</span>
          <span>💡 Code that speaks. Design that delivers. Experience that matters.</span>
          <span>⚙️ Clean Code. Stunning UI. Real-world Impact.</span>
          <span>🌍 Trusted by Clients. Powered by Passion.</span>
        </div>
      </div>

      {/* 🎥 Animation: RIGHT to LEFT */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </footer>
  );
}
