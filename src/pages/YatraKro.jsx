import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkedAlt,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

/* =========================
   YATRAKRO IMAGES
========================= */
import HomeYatraKro from "../assets/homeYatrakro.png";
import HomeYatraKro1 from "../assets/homeYatrakro1.png";
import DestinationYatraKro from "../assets/destinationYatrakro.png";
import TripYatraKro from "../assets/tripYatrakro.png";

import AgentDashboard from "../assets/agentYatrakro.png";
import AgentAllTrips from "../assets/agentAalltripsYatrakro.png";
import AgentRevenue from "../assets/agentRevenueYatrakro.png";
import AgentRefund from "../assets/agentRefundYatrakro.png";

import AdminShriJee from "../assets/AdminShriJee.png";
import AdminShriJee2 from "../assets/AdminShriJee2.png";
import AdminDashboard from "../assets/AdminDashboard.png";

/* =========================
   REUSABLE COMPONENTS (Compact & Responsive like RefreshH2O)
========================= */

const Section = ({ title, subtitle, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="mb-8 sm:mb-10 md:mb-14"
  >
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-1">
      {title}
    </h2>
    {subtitle && (
      <p className="text-gray-400 mb-3 sm:mb-4 max-w-3xl text-xs sm:text-sm">
        {subtitle}
      </p>
    )}
    {children}
  </motion.section>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-[#020617]/80 border border-gray-800 rounded-lg p-3 sm:p-4 hover:border-cyan-400 transition">
    <div className="text-cyan-400 text-lg sm:text-xl mb-1">{icon}</div>
    <h4 className="font-medium text-sm sm:text-base mb-0.5">{title}</h4>
    <p className="text-gray-400 text-xs sm:text-sm leading-snug">{desc}</p>
  </div>
);

const TechPill = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
    {children}
  </span>
);

const AppMockup = ({ src, alt }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-20"></div>
    <div className="relative bg-[#020617] border border-gray-800 rounded-xl p-2">
      <img src={src} alt={alt} className="rounded-lg w-full object-cover" />
    </div>
  </div>
);

/* =========================
   MAIN PAGE
========================= */

const YatraKro = () => {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-5 py-10 sm:py-14 md:py-18">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 sm:mb-14 md:mb-18"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-2 sm:mb-3">
          YatraKro – Problem-Solving Travel Platform
        </h1>
        <p className="text-gray-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Not just a booking site — YatraKro solves real travel problems by
          unifying discovery, trusted partners, secure payments, and operations
          into one scalable platform.
        </p>
      </motion.div>

      {/* WHAT */}
      <Section
        title="What is YatraKro?"
        subtitle="A problem-solving travel ecosystem"
      >
        <p className="text-gray-300 max-w-3xl text-sm leading-relaxed">
          YatraKro replaces WhatsApp chaos and Excel tracking with a
          centralized, real-time system for travelers, tour partners, and admins
          — enabling transparent bookings, secure payments, and operational
          insights.
        </p>
      </Section>

      {/* WHY (Problems → Solutions) */}
      <Section
        title="Why YatraKro?"
        subtitle="Problems we identified and how we solved them"
      >
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          <FeatureCard
            icon={<FaSearch />}
            title="Discovery is broken"
            desc="Users can’t find trusted trips. → Built powerful search, filters, and verified partner listings."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Partner chaos"
            desc="Operators manage bookings manually. → Built dashboards for trips, bookings, revenue, and refunds."
          />
          <FeatureCard
            icon={<FaMoneyBillWave />}
            title="Payment trust issues"
            desc="No transparency in payments. → Integrated Razorpay with secure checkout and history."
          />
          <FeatureCard
            icon={<FaMapMarkedAlt />}
            title="No real-time insights"
            desc="Admins lack visibility. → Built real-time admin analytics and reports."
          />
        </div>
      </Section>

      {/* ROLE */}
      <Section
        title="My Role & Key Decisions"
        subtitle="Full‑stack ownership: frontend + backend"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>
            Owned the entire product end‑to‑end: designed and built both
            frontend and backend
          </li>
          <li>
            Architected a component-driven frontend with React & Tailwind for
            speed and scale
          </li>
          <li>
            Designed REST APIs with Node.js & MongoDB and integrated them with
            the UI
          </li>
          <li>
            Implemented Firebase Auth, Razorpay payments, protected routes, and
            role-based access
          </li>
          <li>
            Optimized performance, security rules, and data flows for production
            readiness
          </li>
        </ul>
      </Section>

      {/* TRAVELER */}
      <Section title="Traveler Experience" subtitle="From problem to solution">
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 text-sm">
          <li>Find trusted trips with search & filters</li>
          <li>Book securely with Razorpay</li>
          <li>Track bookings and payments in one place</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-4">
          <AppMockup src={HomeYatraKro} alt="YatraKro Home" />
          <AppMockup src={TripYatraKro} alt="Trip Listing" />
          <AppMockup src={DestinationYatraKro} alt="Destinations" />
          <AppMockup src={HomeYatraKro1} alt="Trip Details" />
        </div>
      </Section>

      {/* PARTNER */}
      <Section
        title="Tour Partner Dashboard"
        subtitle="Run your travel business digitally"
      >
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 text-sm">
          <li>Create & manage trips with inventory control</li>
          <li>Track bookings, revenue, and refunds</li>
          <li>Communicate with travelers and reduce support load</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-4">
          <AppMockup src={AgentDashboard} alt="Partner Dashboard" />
          <AppMockup src={AgentAllTrips} alt="Partner Trips" />
          <AppMockup src={AgentRevenue} alt="Partner Revenue" />
          <AppMockup src={AgentRefund} alt="Partner Refunds" />
        </div>
      </Section>

      {/* ADMIN */}
      <Section
        title="Admin Control Center"
        subtitle="Full visibility & operations"
      >
        <p className="text-gray-400 max-w-3xl text-xs sm:text-sm mb-3">
          Single source of truth for sales, partners, trips, payments, and
          platform health.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {/* <AppMockup src={AdminDashboard} alt="Admin Dashboard" />
          <AppMockup src={AdminShriJee} alt="Admin Trips" />
          <AppMockup src={AdminShriJee2} alt="Admin Reports" /> */}
        </div>
      </Section>

      {/* TECH */}
      <Section
        title="Tech Stack & Architecture"
        subtitle="Built for scalability and reliability"
      >
        <div className="flex flex-wrap gap-2 mb-3">
          <TechPill>React</TechPill>
          <TechPill>Tailwind CSS</TechPill>
          <TechPill>JavaScript</TechPill>
          <TechPill>Node.js</TechPill>
          <TechPill>MongoDB</TechPill>
          <TechPill>REST API</TechPill>
          <TechPill>Razorpay</TechPill>
          <TechPill>Firebase Auth</TechPill>
        </div>
        <p className="text-gray-400 max-w-3xl text-xs sm:text-sm">
          Modular React architecture with secure auth, payments, and real-time
          data flows.
        </p>
      </Section>

      {/* IMPACT */}
      <Section title="Impact & Results" subtitle="Measured outcomes">
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>~45% faster booking completion for travelers</li>
          <li>Centralized operations for multiple partners</li>
          <li>Secure, transparent payments and refunds</li>
        </ul>
      </Section>

      {/* FUTURE */}
      <Section title="What I’d Improve Next" subtitle="Roadmap">
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Advanced analytics & forecasting</li>
          <li>AI trip recommendations</li>
          <li>Multi-currency & internationalization</li>
        </ul>
      </Section>
    </div>
  );
};

export default YatraKro;
