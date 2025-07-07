
"use client"
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar.js";
// import Hero from "./components/Hero.js";
const Hero = dynamic(() => import("./components/Hero.js"), { ssr: false });
// import Hero from "./components/Hero.js";
import Services from "./components/Services.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
const projects = [
  {
    title: "MYUZE – Music App",
    desc: "A clean and fast music streaming Flutter app with playlists and real-time syncing.",
    tech: ["Flutter", "Firebase", "REST API"],
    video: "/muze.mp4",
  },
  {
    title: "LYSTN – Podcast App",
    desc: "An intuitive podcast app with background audio and smart content suggestions.",
    tech: ["Flutter", "Firebase", "Audio Player"],
    video: "/lystn.mp4",
  },
];
 

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek | Full Stack Dev</title>
        <meta name="description" content="Portfolio of Abhishek - Full Stack Developer" />
      </Head>

      <main className="bg-dark text-white">
        {/* <Navbar/> */}
        <Hero/>
        <Services/>
        <Skills/>
        <Projects />
        <Contact/>
        <Footer/>
         
        {/* Baaki sections yahin add hote jayenge */}
      </main>
    </>
  );
}
