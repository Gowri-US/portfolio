import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import SocialLinks from "./SocialLinks";

const floatVariants = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const ProfileSection = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            className="relative"
            variants={floatVariants}
            animate="animate"
          >
            {/* Spinning ring */}
            <motion.div
              className="absolute inset-[-12px] rounded-full border-2 border-dashed border-red-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Second ring */}
            <motion.div
              className="absolute inset-[-24px] rounded-full border border-purple-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-red-500/30 shadow-[0_0_80px_rgba(239,68,68,0.3)]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img src={profile} alt="Gowri" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>

        {/* Text content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold mb-3">
            Hey I'm <span className="text-red-500">Gowri U S</span>
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-black mb-6 text-red-500">
            Flutter Developer
          </motion.h1>

          <motion.p variants={itemVariants} className="text-gray-400 text-xs leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            I'm a Flutter & React developer based in Trivandrum, focused on
            building fast, reliable apps that people actually enjoy using. From
            real-time delivery systems to fluid animated interfaces, I've
            shipped production-ready applications for Android and iOS.
          </motion.p>

          <motion.div variants={itemVariants}>
            <SocialLinks />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(239,68,68,0.5)" }}
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden bg-red-500 text-white px-8 py-3 rounded-lg font-bold text-base sm:text-lg shadow-lg shadow-red-500/20 mt-2"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", repeatDelay: 1 }}
            />
            Hire Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSection;
