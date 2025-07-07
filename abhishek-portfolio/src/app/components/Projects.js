"use client";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "MYUZE – Music App",
    desc: `MYUZE is a high-performance music streaming app built with Flutter. 
Users can explore, search, and save their playlists with real-time syncing. 
Designed with offline support and smooth audio transitions.`,
    tech: {
      Frontend: ["Flutter"],
      Backend: ["Firebase Functions"],
      Database: ["Firebase Firestore"],
      Others: ["REST API", "Audio Streaming"],
    },
    video: "/Muze.mp4",
    demo: "https://play.google.com/store/apps/details?id=com.myuze.play",
  },
  {
    title: "LYSTN – Podcast App",
    desc: `LYSTN is a clean podcast app where users can stream, search, and subscribe to their favorite content. 
It supports background playback, downloading, and smart recommendations.`,
    tech: {
      Frontend: ["Flutter"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      Others: ["Audio Player", "Smart Caching"],
    },
    video: "/lystn.mp4",
    demo: "https://play.google.com/store/apps/details?id=com.app.lystn",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0b0e13] py-24 px-2 sm:px-6">
      {/* 💡 Rotating Gradient Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 mb-20"
      >
        <Typewriter
          words={[
            "🛠️ Crafted Code, Real Results",
            "🚀 Launch-Ready Projects",
            "🎯 Impact Delivered",
            "💡 Innovation in Every Pixel",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </motion.h2>

      <div className="flex flex-col gap-20">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
