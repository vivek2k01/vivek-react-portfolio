import { motion } from "framer-motion";

/* =========================
   REUSABLE SECTION
========================= */

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="mb-6 sm:mb-8"
  >
    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 mb-1">
      {title}
    </h2>

    <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
      {children}
    </div>
  </motion.section>
);

/* =========================
   MAIN PAGE
========================= */

const Transport = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-18">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 sm:mb-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
          Transport Management System
        </h1>

        <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Logistics system with Driver, Transport Partner & Admin modules
          designed for real-world operations.
        </p>
      </motion.div>

      {/* MODULES */}
      <Section title="Modules">
        <ul className="list-disc list-inside space-y-1">
          <li>Driver Panel</li>
          <li>Transport Partner Panel</li>
          <li>Admin Dashboard</li>
        </ul>
      </Section>

      {/* DRIVER FEATURES */}
      <Section title="Driver Panel – Key Features">
        <ul className="list-disc list-inside space-y-1">
          <li>View available transport loads in real-time</li>
          <li>Accept or reject loads based on location & availability</li>
          <li>Track assigned trips and delivery status</li>
          <li>Update trip progress (Started / In-Transit / Completed)</li>
          <li>View payment history and trip earnings</li>
          <li>Manage profile and vehicle details</li>
        </ul>
      </Section>

      {/* TRANSPORT PARTNER FEATURES */}
      <Section title="Transport Partner – Key Features">
        <ul className="list-disc list-inside space-y-1">
          <li>Create and manage transport loads</li>
          <li>Assign drivers to specific loads</li>
          <li>Track all active and completed trips</li>
          <li>View driver performance and availability</li>
          <li>Monitor payments and settlements</li>
          <li>Manage fleet and operational data</li>
        </ul>
      </Section>

      {/* STATUS */}
      <Section title="Status">
        <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
          🚧 Under Development
        </span>
      </Section>

      {/* TECH STACK */}
      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Firebase",
            "Material UI",
            "Tailwind CSS",
            "JavaScript",
            "Node.js",
            "Razorpay API",
            "Google Maps API",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs
              bg-cyan-400/10 text-cyan-300
              border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Transport;
