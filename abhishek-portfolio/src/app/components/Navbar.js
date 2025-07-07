"use client"
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-dark/80 px-8 py-4 flex justify-between"
    >
      <h1 className="text-xl font-bold text-primary">Abhishek.dev</h1>
      <div className="space-x-6 text-sm">
        <a href="#projects" className="hover:text-primary transition">Projects</a>
        <a href="#about" className="hover:text-primary transition">About</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>
      </div>
    </motion.nav>
  );
}
