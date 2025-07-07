// import { motion } from "framer-motion";
// import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";

// export default function Services() {
//   const services = [
//     {
//       icon: <FaMobileAlt size={28} />,
//       title: "App Development",
//       desc: "Cross-platform mobile apps with Flutter & Firebase.",
//     },
//     {
//       icon: <FaLaptopCode size={28} />,
//       title: "Web Development",
//       desc: "MERN Stack websites, admin panels & dashboards.",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 px-6 text-center">
//       <h2 className="text-3xl font-bold mb-12">What I Do</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
//         {services.map((service, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="bg-[#161b22] p-6 rounded-xl border border-cyan-600/20 hover:shadow-cyan-500/10 hover:shadow-lg transition-all"
//           >
//             <div className="text-primary mb-4">{service.icon}</div>
//             <h3 className="text-xl font-semibold">{service.title}</h3>
//             <p className="text-gray-400 mt-2">{service.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import {
  HiOutlineDeviceMobile,
  HiOutlineCode,
  HiOutlinePencilAlt,
  HiOutlineCloudUpload,
} from "react-icons/hi";
import { VscTools } from "react-icons/vsc";
import { TbSeo } from "react-icons/tb";

export default function Services() {
  const services = [
    {
      icon: <HiOutlineDeviceMobile size={34} className="text-cyan-400" />,
      title: "App Development",
      desc: `Custom mobile apps using Flutter & Firebase – fast, reliable, and ready for scale.`,
    },
    {
      icon: <HiOutlineCode size={34} className="text-cyan-400" />,
      title: "Web Development",
      desc: `Modern websites & web apps with React, Node.js & MongoDB – built for speed and performance.`,
    },
    {
      icon: <HiOutlinePencilAlt size={34} className="text-cyan-400" />,
      title: "UI/UX Design",
      desc: `Clean and intuitive interfaces tailored for user experience, accessibility, and brand feel.`,
    },
    {
      icon: <HiOutlineCloudUpload size={34} className="text-cyan-400" />,
      title: "Deployment & CI/CD",
      desc: `Seamless cloud deployments using Vercel, Netlify, Firebase & GitHub Actions.`,
    },
    {
      icon: <VscTools size={34} className="text-cyan-400" />,
      title: "Maintenance & Optimization",
      desc: `Performance tuning, bug fixing, security patches, and version upgrades — done right.`,
    },
    {
      icon: <TbSeo size={34} className="text-cyan-400" />,
      title: "SEO & Analytics",
      desc: `Boost your visibility with SEO-ready architecture and real-time user analytics tracking.`,
    },
  ];

  return (
    <section id="services" className="py-20 px-6 text-center bg-[#0b0e13]">
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-14 tracking-tight">
        💼 What I Do
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04, rotateY: 3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-cyan-600/20 hover:shadow-lg hover:shadow-cyan-400/10 transition-all text-left group transform-gpu hover:rotate-[0.3deg]"
          >
            <div className="mb-4 transform transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 mt-3 text-[0.95rem] leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

