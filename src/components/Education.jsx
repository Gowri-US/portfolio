import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const education = [
  {
    period: "Jun 2021 — May 2024",
    title: "Bachelor's in Computer Applications",
    institute: "Kerala University",
    score: "8.02 CGPA",
    location: "Thiruvananthapuram Kerala",
  },
  {
    period: "Jun 2019 — May 2021",
    title: "Computer Science",
    institute: "Govt Model Girls Higher Secondary School Pattom",
    score: "95.25%",
    location: "Thiruvananthapuram Kerala",
  },
  {
    period: "Jun 2018 — May 2019",
    title: "High School",
    institute: "Govt Model Girl Higher Secondary School Cottonhill",
    score: "95%",
    location: "Thiruvananthapuram Kerala",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <AnimatedHeading
          text="Education"
          className="text-3xl md:text-4xl font-bold text-red-500 mb-6"
        />

        <div className="w-full lg:w-2/3 flex justify-center">
          <div className="relative mt-14 pl-6">
            <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-red-500/20" />
            <motion.div
              className="absolute left-3 top-0 border-l-2 border-dashed border-red-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.18 }}
                >
                  <motion.span
                    className="absolute -left-[2px] top-2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_18px_rgba(168,85,247,0.9)]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: index * 0.18 + 0.2 }}
                  />

                  <motion.div
                    className="bg-zinc-900 p-6 rounded-2xl border border-red-100/30 ml-6"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(239,68,68,0.15)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold text-red-500">{edu.title}</h3>
                      <span className="text-sm text-gray-400">{edu.period}</span>
                    </div>

                    <motion.p
                      className="mt-1 text-gray-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.18 + 0.35, duration: 0.4 }}
                    >
                      {edu.institute}
                    </motion.p>

                    <div className="mt-2 flex gap-4 text-sm text-gray-400">
                      <span>📍 {edu.location}</span>
                      <span>🎯 {edu.score}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
