import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const projects = [
  {
    title: "Famto – Customer Delivery App",
    desc: "Multi-service delivery platform for food, groceries, medicine, and pick & drop services.",
    points: [
      "Built complete customer application using Flutter.",
      "Implemented live order tracking with Socket.IO.",
      "Integrated Razorpay payments, wallet, and subscriptions.",
      "Added Firebase push notifications and OTP authentication.",
    ],
    tech: ["Flutter", "Firebase", "Node.js", "MongoDB", "Socket.IO"],
    link: "#",
  },
  {
    title: "Famto Agent – Delivery Partner App",
    desc: "Real-time delivery management application for delivery executives.",
    points: [
      "Developed order assignment and acceptance workflow.",
      "Implemented background location tracking.",
      "Integrated Google Maps navigation and route updates.",
      "Built earnings, wallet, and delivery history modules.",
    ],
    tech: ["Flutter", "Geolocation", "Google Maps", "Socket.IO"],
    link: "#",
  },
  {
    title: "Famto Business – Merchant App",
    desc: "Merchant platform for managing stores, products, and orders.",
    points: [
      "Created product, category, and inventory management modules.",
      "Implemented order status updates in real time.",
      "Added sales reports and earnings analytics.",
      "Integrated merchant onboarding and profile management.",
    ],
    tech: ["Flutter", "REST API", "Firebase", "MongoDB"],
    link: "#",
  },
  {
    title: "Famto Admin Panel",
    desc: "Centralized dashboard for platform operations and business management.",
    points: [
      "Managed merchants, customers, delivery agents, and orders.",
      "Built role-based access control for admins and merchants.",
      "Implemented profit statistics and analytics dashboards.",
      "Created banner, category, pricing, and geofence management.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Famto Backend APIs",
    desc: "Scalable backend powering customer, merchant, and delivery applications.",
    points: [
      "Developed RESTful APIs using Node.js and Express.",
      "Implemented authentication, authorization, and JWT security.",
      "Integrated Socket.IO for real-time order updates.",
      "Designed MongoDB schemas and microservice-based architecture.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "#",
  },
  {
    title: "Interactive Landing Website",
    desc: "Modern animated landing page designed to deliver an engaging user experience with smooth interactions and responsive design.",
    points: [
      "Built using React and Framer Motion for smooth animations.",
      "Implemented page transitions, hover effects, and scroll-based animations.",
      "Developed fully responsive layouts for mobile, tablet, and desktop.",
      "Optimized performance using lazy loading and reusable components.",
    ],
    tech: ["React", "Framer Motion", "JavaScript", "CSS Modules", "Responsive Design"],
    link: "#",
  },
  {
    title: "Famto Ordering Website",
    desc: "Web ordering platform allowing customers to place orders directly from browsers.",
    points: [
      "Built responsive ordering interface using React.",
      "Implemented cart, checkout, and payment workflows.",
      "Integrated live order status tracking.",
      "Connected customer website with backend APIs and merchant system.",
    ],
    tech: ["React", "Node.js", "MongoDB", "Razorpay"],
    link: "#",
  },
  {
    title: "Ambi's Kitchen Website",
    desc: "Production restaurant website with modern UI and animations.",
    points: [
      "Developed responsive website using Next.js.",
      "Implemented GSAP animations and smooth transitions.",
      "Optimized SEO and page performance.",
      "Handled deployment, domain setup, and hosting.",
    ],
    tech: ["Next.js", "GSAP", "Tailwind CSS", "SEO"],
    link: "https://ambiskitchen.in",
  },
  {
    title: "ScholarHub",
    desc: "College resource sharing and collaboration platform.",
    points: [
      "Built authentication and role-based access system.",
      "Enabled sharing of notes, resources, and announcements.",
      "Created collaborative communication features.",
      "Designed scalable architecture for growing user base.",
    ],
    tech: ["React", "Firebase", "Authentication"],
    link: "#",
  },
];

const TiltCard = ({ p, i }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-8, 8]), { stiffness: 150, damping: 20 });

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
      className="group relative flex flex-col p-8 rounded-2xl bg-zinc-900 border border-red-100/30 hover:border-purple-500/50 hover:bg-white/[0.07] transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <motion.div
          className="p-3 rounded-lg bg-purple-500/10 text-purple-400"
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

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
        {p.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>

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

      <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
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
