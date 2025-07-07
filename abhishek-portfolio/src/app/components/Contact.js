import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const email = "vermabhishek657@gmail.com";
  const phone = "+919473958898";
  const whatsappLink = `https://wa.me/919473958898?text=Hi%20Abhishek%2C%20I'm%20interested%20in%20working%20with%20you!`;
  const linkedin = "https://www.linkedin.com/in/abhishek-verma-28320719b/";
 

  const links = [
    { icon: <FaEnvelope />, label: "Email", href: `mailto:${email}` },
    { icon: <FaPhoneAlt />, label: "Call", href: `tel:${phone}` },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: whatsappLink },
    { icon: <FaLinkedin />, label: "LinkedIn", href: linkedin },
 
  ];

  return (
    <section id="contact" className="py-24 px-6 text-center bg-[#0d1117]">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
         Let’s Work Together
      </motion.h2>

     <motion.p
  className="text-gray-400 max-w-xl mx-auto mb-12 text-base sm:text-lg"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  Have a project in mind? Want to build something amazing together?  
  Let's turn your ideas into reality.
  I'm just a message away — reach out via your favorite platform.
</motion.p>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#161b22] border border-cyan-500/10 text-cyan-300 hover:shadow-cyan-400/20 hover:shadow-md transition-all text-base w-full"
          >
            <span className="text-xl">{link.icon}</span>
            {link.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
