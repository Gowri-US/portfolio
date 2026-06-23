import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AnimatedHeading from "./AnimatedHeading";

const contactInfo = [
  { icon: Mail, text: "gowrikunju1805@gmail.com" },
  { icon: Phone, text: "+91 9778741983" },
  { icon: MapPin, text: "Trivandrum, Kerala, India" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Gowri-US" },
  { icon: FaLinkedin, href: "https://linkedin.com" },
  { icon: FaInstagram, href: "https://instagram.com/paruzzzgowri" },
];

const formFields = [
  { type: "text", name: "name", placeholder: "Your Name" },
  { type: "email", name: "email", placeholder: "Your Email" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
      <AnimatedHeading
        text="Contact Me"
        className="text-3xl md:text-4xl font-bold text-center text-red-500 mb-12"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <motion.h3
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let's Work Together
          </motion.h3>

          <motion.p
            className="text-gray-400 mb-8 leading-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm always open to discussing new opportunities, freelance projects, and collaborations.
          </motion.p>

          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="text-red-500" />
                </motion.div>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-red-500 rounded-full hover:bg-red-500 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.form
          action="https://formsubmit.co/gowrikunju1805@gmail.com"
          method="POST"
          className="bg-zinc-900 p-6 rounded-2xl border border-red-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:5173" />

          <div className="space-y-5">
            {formFields.map(({ type, name, placeholder }, i) => (
              <motion.input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none transition-colors"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              />
            ))}

            <motion.textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-red-500 outline-none resize-none transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {/* Pulsing glow ring */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-red-500/30 blur-md"
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.button
                type="submit"
                className="relative w-full bg-red-500 hover:bg-red-600 py-4 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
