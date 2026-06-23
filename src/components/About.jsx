import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import developer from "../assets/developer.png";
import AnimatedHeading from "./AnimatedHeading";

const paragraphVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  const imgRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-2/3">
          <AnimatedHeading
            text="About Me"
            className="text-3xl md:text-4xl font-bold text-red-500 mb-6"
          />

          {[
            "I'm Gowri U S, a dedicated and performance-oriented Flutter Developer with 2 years of professional experience in building production-ready, scalable, and user-focused mobile applications for both Android and iOS.",
            "I have successfully developed and deployed complete applications from scratch to production, with strong expertise across the full mobile app development lifecycle. My experience includes integrating Firebase services such as OTP authentication, push notifications, and real-time data handling.",
            "I've actively contributed to commercial delivery and business management applications, ensuring smooth UI/UX, reliable performance, and seamless backend connectivity.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-gray-400 text-xs leading-relaxed mb-4 max-w-xl mx-auto md:mx-0"
              custom={i}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="w-full lg:w-1/3 flex justify-center" style={{ perspective: 800 }}>
          <motion.div
            ref={imgRef}
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-64 h-64 rounded-2xl overflow-hidden border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.15)] cursor-pointer"
          >
            <img src={developer} alt="Developer" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
