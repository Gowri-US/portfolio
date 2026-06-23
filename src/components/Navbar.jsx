import { useState } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.h1
          className="text-2xl font-bold text-red-500"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {"Gowri U S".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
              className="inline-block"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="relative py-1 hover:text-red-500 transition-colors"
                onMouseEnter={() => setHovered(link)}
                onMouseLeave={() => setHovered(null)}
              >
                {link}
                {hovered === link && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
