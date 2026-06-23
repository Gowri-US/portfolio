import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <AnimatedHeading
          text="Experience"
          className="text-3xl md:text-4xl font-bold text-red-500 mb-6"
        />

        <div className="w-full lg:w-2/3 flex justify-center">
          <div className="relative mt-5 md:mt-14 pl-6">
            <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-red-500/20" />
            <motion.div
              className="absolute left-3 top-0 border-l-2 border-dashed border-red-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            

              <motion.div
                className="bg-zinc-900 p-6 rounded-2xl border border-red-100/30 ml-6"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 24px rgba(239,68,68,0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <motion.h3
                    className="text-md md:text-xl font-semibold text-red-500"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    Software Developer | My Famto Pvt Ltd
                  </motion.h3>

                  <span className="text-sm text-gray-400">
                    June 2024 – Present
                  </span>
                </div>

                <ul className="space-y-2 mt-2 text-gray-400 text-xs sm:text-sm ">
               
                    Started as a Flutter Intern and transitioned into a
                    full-time Software Developer role based on performance and
                    technical contributions. Developed and deployed
                    production-ready Flutter applications for customers,
                    merchants, and delivery partners, while building real-time
                    tracking systems, payment integrations, and Firebase-powered
                    features. Contributed to React-based admin dashboards and
                    collaborated with backend teams on scalable microservice
                    architectures, REST APIs, and performance optimization.
                  
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
