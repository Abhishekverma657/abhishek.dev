// "use client";
// import { motion } from "framer-motion";
// import { useCallback } from "react";
// // import Particles from "@tsparticles/react";
// // import { loadFull } from "tsparticles"; // ✅ updated import
// import Typewriter from "typewriter-effect";

// export default function Hero() {
//   // const particlesInit = useCallback(async (engine) => {
//   //   await loadFull(engine);  
//   // }, []);
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0d1117] overflow-hidden"
//     >
//       {/* Particle Background */}
//       {/* <Particles
//         init={particlesInit}
//         options={{
//           fullScreen: { enable: false },
//           background: { color: { value: "#0d1117" } },
//           fpsLimit: 60,
//           interactivity: {
//             events: { onHover: { enable: true, mode: "repulse" }, resize: true },
//             modes: { repulse: { distance: 120, duration: 0.4 } }
//           },
//           particles: {
//             color: { value: "#22d3ee" },
//             links: { color: "#22d3ee", distance: 120, enable: true, opacity: 0.2, width: 1 },
//             move: { enable: true, speed: 1, random: false },
//             number: { density: { enable: true, area: 800 }, value: 60 },
//             opacity: { value: 0.4 },
//             shape: { type: "circle" },
//             size: { value: { min: 1, max: 3 } }
//           },
//         }}
//         className="absolute inset-0 -z-10"
//       /> */}

//       {/* Blob Animation */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"
//         animate={{ scale: [1, 1.1, 1] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Main Content */}
//       <motion.h1
//         className="relative text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hey, I'm Abhishek 👋
//       </motion.h1>

//       {/* Typewriter Effect */}
//       <div className="relative text-cyan-300 text-xl sm:text-2xl font-medium h-[30px]">
//         <Typewriter
//           options={{
//             strings: ["Full‑Stack Dev", "Flutter Enthusiast", "Performance‑Focused"],
//             autoStart: true,
//             loop: true,
//             delay: 75,
//             deleteSpeed: 50,
//             pauseFor: 2000,
//           }}
//         />
//       </div>

//       <motion.h2
//         className="relative mt-4 text-lg sm:text-xl text-gray-300 font-light max-w-2xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         Building <span className="text-cyan-400">web apps</span> & <span className="text-cyan-400">mobile experiences</span>.
//       </motion.h2>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-black text-white"
//     >
//       {/* 🔁 Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
//       >
//         <source src="/tech-bg.mp4" type="video/mp4" />
//         {/* Backup message */}
//         Your browser does not support the video tag.
//       </video>

//       {/* 🌫️ Dark Overlay (for text clarity) */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] -z-10" />

//       {/* 🧠 Glow Animation */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* 👋 Hero Title */}
//       <motion.h1
//         className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Hey, I'm Abhishek 👋
//       </motion.h1>

//       {/* ✍️ Typewriter */}
//       <div className="text-cyan-300 text-xl sm:text-2xl font-medium h-[32px]">
//         <Typewriter
//           options={{
//             strings: [
//               "Full‑Stack Developer",
//               "Flutter App Specialist",
//               "MERN Stack Expert",
//               "Performance‑Driven Dev",
//             ],
//             autoStart: true,
//             loop: true,
//             delay: 70,
//             deleteSpeed: 40,
//             pauseFor: 2000,
//           }}
//         />
//       </div>

//       {/* 💬 Tagline */}
//       <motion.h2
//         className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         I craft <span className="text-cyan-400">fast, scalable</span> and{" "}
//         <span className="text-cyan-400">beautiful apps</span> with full focus on
//         performance and user experience.
//       </motion.h2>

//       {/* 🚀 CTA Button */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="mt-8"
//       >
//         <a
//           href="#projects"
//           className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-md transition"
//         >
//           See My Work
//         </a>
//       </motion.div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#0d1117] text-white"
    >
      {/* 🔁 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
        {/* Backup message */}
        Your browser does not support the video tag.
      </video>

      {/* 🌫️ Dark Overlay (for text clarity) */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] -z-10" />

      {/* 🧠 Glow Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 👋 Hero Title */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, I'm Abhishek 👋
      </motion.h1>

      {/* ✍️ Typewriter */}
      <div className="text-cyan-300 text-xl sm:text-2xl font-medium h-[32px]">
        <Typewriter
          options={{
            strings: [
              "Full‑Stack Developer",
              "Flutter App Specialist",
              "MERN Stack Expert",
              "Performance‑Driven Dev",
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 40,
            pauseFor: 2000,
          }}
        />
      </div>

      {/* 💬 Tagline */}
      <motion.h2
        className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I craft <span className="text-cyan-400">fast, scalable</span> and{" "}
        <span className="text-cyan-400">beautiful apps</span> with full focus on
        performance and user experience.
      </motion.h2>

      
    </section>
  );
}

