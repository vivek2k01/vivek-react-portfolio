import { motion } from "framer-motion";
import {
  FaUsers,
  FaMoneyBillWave,
  FaUserShield,
  FaServer,
} from "react-icons/fa";

/* =========================
   ADMIN IMAGES
========================= */
import AdminDashboardImg from "../assets/AdminDashboard.png";
import AllCustomer from "../assets/AllCustomers.png";
import ManageEmp from "../assets/ManageEmp.png";
import MonthlySales from "../assets/MonthlySales.png";

/* =========================
   USER IMAGES
========================= */
import UserHome from "../assets/HomePage.png";
import UserPage from "../assets/UserPage.png";
import UserBooking from "../assets/UserBooking.png";

/* =========================
   REUSABLE COMPONENTS
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

const RefreshH2O = () => {
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
          RefreshH2O – Water Plant CRM
        </h1>

        <p className="text-gray-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          A real-world, production-grade CRM built to digitize water plant
          operations — billing, payments, employees, and real-time insights.
        </p>
      </motion.div>

      {/* WHAT */}
      <Section
        title="What is RefreshH2O?"
        subtitle="A centralized CRM for water plant operations"
      >
        <p className="text-gray-300 max-w-3xl text-sm leading-relaxed">
          RefreshH2O replaces manual registers and Excel sheets with a real-time,
          cloud-based system for managing customers, billing, employees, sales
          and payments.
        </p>
      </Section>

      {/* WHY */}
      <Section
        title="Why RefreshH2O?"
        subtitle="Problems observed in real water plant businesses"
      >
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          <FeatureCard
            icon={<FaMoneyBillWave />}
            title="Billing Errors"
            desc="Manual billing caused frequent calculation mistakes."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Customer Trust Issues"
            desc="No transparency in bills or payment history."
          />
          <FeatureCard
            icon={<FaUserShield />}
            title="Admin Overload"
            desc="Difficult to manage staff, salary & sales together."
          />
          <FeatureCard
            icon={<FaServer />}
            title="Outdated Reports"
            desc="No real-time view of business performance."
          />
        </div>
      </Section>

      {/* ROLE */}
      <Section
        title="My Role & Key Decisions"
        subtitle="What I personally designed & implemented"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Designed complete CRM architecture using React & Firebase</li>
          <li>Implemented role-based access (Admin / User)</li>
          <li>Built reusable tables, modals & form components</li>
          <li>Optimized Firebase queries for real-time dashboards</li>
          <li>Handled deployment & production configuration</li>
        </ul>
      </Section>

      {/* USER SIDE */}
      <Section
        title="User-Side Experience"
        subtitle="Simple, transparent & mobile-friendly"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mb-4">
          <li>View monthly bills & payment history</li>
          <li>QR-based quick payments</li>
          <li>Service booking & downloads</li>
          <li>Clear billing transparency</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4">
          <AppMockup src={UserHome} alt="User Home Screen" />
          <AppMockup src={UserPage} alt="User Dashboard" />
          <AppMockup src={UserBooking} alt="User Booking Screen" />
        </div>
      </Section>

      {/* ADMIN SIDE */}
      <Section
        title="Admin Dashboard"
        subtitle="Full control over operations & insights"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mb-4">
          <li>Customer & employee management</li>
          <li>Automated monthly billing</li>
          <li>Sales, salary & event tracking</li>
          <li>Realtime Firebase synced dashboard</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4">
          <AppMockup src={AdminDashboardImg} alt="Admin Dashboard" />
          <AppMockup src={AllCustomer} alt="Customer Management" />
          <AppMockup src={ManageEmp} alt="Employee Management" />
          <AppMockup src={MonthlySales} alt="Sales & Reports" />
        </div>
      </Section>

      {/* TECH */}
      <Section
        title="Tech Stack & Architecture"
        subtitle="Chosen for scalability & real-world usage"
      >
        <div className="flex flex-wrap gap-2 mb-3">
          <TechPill>React.js</TechPill>
          <TechPill>JavaScript (ES6+)</TechPill>
          <TechPill>Tailwind CSS</TechPill>
          <TechPill>Material UI</TechPill>
          <TechPill>Firebase Auth</TechPill>
          <TechPill>Firestore</TechPill>
          <TechPill>Vercel / Netlify</TechPill>
        </div>

        <p className="text-gray-400 max-w-3xl text-sm">
          Component-driven React architecture with Firebase handling auth,
          real-time sync and secure access control.
        </p>
      </Section>

      {/* PERFORMANCE */}
      <Section
        title="Performance, Security & Best Practices"
        subtitle="Production-level considerations"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Optimized component re-renders</li>
          <li>Role-based protected routes</li>
          <li>Firebase security rules</li>
          <li>Graceful loading & empty states</li>
        </ul>
      </Section>

      {/* IMPACT */}
      <Section
        title="Impact & Results"
        subtitle="Measured real-world improvements"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Reduced manual billing errors by ~60%</li>
          <li>Improved admin task speed by ~40%</li>
          <li>Single source of truth for operations</li>
        </ul>
      </Section>

      {/* FUTURE */}
      <Section
        title="What I’d Improve Next"
        subtitle="Scalability & future enhancements"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Add advanced analytics dashboards</li>
          <li>Role-based notifications & reminders</li>
          <li>Optimize Firebase queries for scale</li>
          <li>Server-side heavy report processing</li>
          <li>Support high-volume daily transactions</li>
        </ul>
      </Section>
    </div>
  );
};

export default RefreshH2O;
