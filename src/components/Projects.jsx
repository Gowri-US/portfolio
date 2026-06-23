import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const projects = [
  {
    title: "Famto – Customer Delivery App",
    desc: "A production-ready multi-service delivery platform that enables customers to order food, groceries, medicines, pickup & drop services, and custom deliveries through a single application. Implemented real-time order tracking, live status updates, secure payments, wallet management, subscriptions, OTP authentication, and push notifications while ensuring a seamless user experience across Android and iOS.",
    tech: [
      "Flutter",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Razorpay",
      "Mappls",
    ],
    link: "#",
  },
  {
    title: "Famto Agent – Agent App",
    desc: "A real-time delivery management application designed for delivery executives. Built features including order assignment, acceptance workflows, background location tracking, route navigation, delivery status updates, earnings management, and instant notifications to improve delivery efficiency and operational visibility.",
    tech: ["Flutter", "Geolocation", "Google Maps", "Socket.IO"],
    link: "#",
  },
  {
    title: "Famto Business – Merchant App",
    desc: "A merchant-focused platform that allows businesses to manage products, categories, inventory, pricing, promotions, incoming orders and also creating order. Developed real-time order processing, stock management, sales insights, and merchant onboarding features to streamline day-to-day business operations.",
    tech: ["Flutter", "REST API", "Firebase", "MongoDB"],
    link: "#",
  },
  {
    title: "Famto Admin Panel",
    desc: "A centralized web dashboard for managing platform operations, merchants, customers, delivery partners, products, orders, pricing, and business analytics. Implemented role-based access control, geofence management, reporting dashboards, and real-time operational monitoring.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Famto Backend APIs",
    desc: "Designed and developed scalable backend services powering customer, merchant, delivery, and admin applications. Built secure REST APIs, JWT-based authentication, real-time communication using Socket.IO, payment integrations, and MongoDB data models following a microservice-oriented architecture.",
    tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "#",
  },
  {
    title: "Interactive Landing Website",
    desc: "A modern and visually engaging landing page built with React and Framer Motion, featuring smooth animations, interactive sections, responsive layouts, reusable components, and performance optimizations. Designed to provide an immersive user experience while maintaining fast load times and accessibility.",
    tech: [
      "React",
      "Framer Motion",
      "JavaScript",
      "CSS Modules",
      "Responsive Design",
    ],
    link: "#",
  },
  {
    title: "Famto Ordering Website",
    desc: "A web-based ordering platform that allows customers to browse products, place orders, manage carts, complete payments, and track orders directly from their browsers. Integrated seamlessly with merchant systems and backend APIs to deliver a consistent multi-platform ordering experience.",
    tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    link: "#",
  },
  {
    title: "Ambi's Kitchen Website",
    desc: "A production restaurant website developed with Next.js featuring modern UI design, GSAP-powered animations, SEO optimization, responsive layouts, and performance-focused implementation. Managed deployment, domain configuration, and hosting for a complete production launch.",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "SEO"],
    link: "https://ambiskitchen.in",
  },
  {
    title: "ScholarHub",
    desc: "A collaborative academic platform designed for students and faculty to share notes, resources, announcements, and knowledge efficiently. Implemented authentication, role-based access control, content sharing, and communication features to support a growing educational community.",
    tech: ["React", "Firebase", "Authentication"],
    link: "#",
  },
];

const TiltCard = ({ p, i }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      className="group relative flex flex-col p-8 rounded-2xl bg-zinc-900 border border-red-100/30 hover:border-red-500  hover:bg-white/[0.07] transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <motion.div
          className="p-3 rounded-lg bg-purple-500/10 text-red-100"
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Layers className="w-6 h-6 text-red-500" />
        </motion.div>

        {p.link !== "#" && (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
          >
            <ExternalLink size={20} />
          </motion.a>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
        {p.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {p.desc}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {p.tech.map((t, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 + idx * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, borderColor: "rgba(239,68,68,0.8)" }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black border border-red-500/20 text-gray-300 text-xs transition-colors"
          >
            {t}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0 rounded-2xl  opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20"
    >
      <AnimatedHeading
        text="Projects"
        className="text-3xl md:text-4xl font-bold text-red-500 mb-6"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((p, i) => (
          <TiltCard key={i} p={p} i={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
