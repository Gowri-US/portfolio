import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const skills = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Flutter" },
      { name: "React" },
      { name: "JavaScript" },
      { name: "Riverpod" },
      { name: "Provider" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "Map Integration" },
      { name: "Payment Gateway" },
      { name: "Web Sockets" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Database & Maps",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Google Map" },
      { name: "Mappls Map" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Android Studio" },
      { name: "Postman" },
      { name: "Android Deployment" },
      { name: "iOS Deployment" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.06, ease: "easeOut" },
  }),
};

const SkillSection = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
      <AnimatedHeading
        text="Skills"
        className="text-3xl md:text-4xl font-bold text-red-500 mb-12"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(239,68,68,0.18)",
              borderColor: "rgba(239,68,68,0.5)",
            }}
            className="bg-zinc-900 border border-red-100/30 rounded-xl p-6 transition-colors duration-300 cursor-default"
          >
            <h3 className="text-xl font-semibold text-red-500 mb-5">{category.title}</h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, borderColor: "rgba(239,68,68,0.8)" }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-red-500/20 text-gray-300 transition-colors"
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
