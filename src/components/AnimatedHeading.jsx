import { motion } from "framer-motion";

const AnimatedHeading = ({ text, className = "" }) => {
  const words = text.split(" ");

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;
