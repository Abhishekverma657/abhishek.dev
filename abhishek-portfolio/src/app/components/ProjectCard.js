 "use client";
import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, video, demo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16 w-full max-w-5xl mx-auto bg-[#10141b] rounded-3xl shadow-lg p-6 md:p-10"
    >
      {/* Details */}
      <div className="flex-1 flex flex-col justify-center text-white">
        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2"
        >
          {title}
        </motion.h3>

        <p className="text-gray-300 mb-4">{desc}</p>

        <div className="space-y-1 text-sm mb-4">
          {tech?.Frontend && (
            <p>
              <span className="font-semibold text-cyan-500">Frontend:</span>{" "}
              {tech.Frontend.join(", ")}
            </p>
          )}
          {tech?.Backend && (
            <p>
              <span className="font-semibold text-cyan-500">Backend:</span>{" "}
              {tech.Backend.join(", ")}
            </p>
          )}
          {tech?.Database && (
            <p>
              <span className="font-semibold text-cyan-500">Database:</span>{" "}
              {tech.Database.join(", ")}
            </p>
          )}
          {tech?.Others && (
            <p>
              <span className="font-semibold text-cyan-500">Others:</span>{" "}
              {tech.Others.join(", ")}
            </p>
          )}
        </div>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center mt-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-xl shadow-md transition"
          >
            View on Play Store
          </a>
        )}
      </div>

      {/* Phone Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative w-[180px] h-[360px] md:w-[210px] md:h-[420px] bg-white rounded-[2rem] shadow-2xl border-[3px] border-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center"
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-400 rounded-full z-10" />
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-6 left-0 w-full h-[92%] object-cover bg-black"
          style={{ background: "#000" }}
        />
      </motion.div>
    </motion.div>
  );
}
