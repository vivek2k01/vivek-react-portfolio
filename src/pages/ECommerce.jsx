import { motion } from "framer-motion";
import { FaShoppingCart, FaUsers, FaBullhorn, FaServer } from "react-icons/fa";

/* =========================
   IMAGES
========================= */
import AdminDashboardImg from "../assets/AdminDashboard.png";

import UserCatagoryInsideshrijee from "../assets/UserCatagoryInsideshrijee.png";
import UserCatagoryShrijee from "../assets/UserCatagoryShrijee.png";
import UserDetialsShrijee from "../assets/UserDetialsShrijee.png";
import UserShrijee from "../assets/UserShrijee.png";
import AdminShriJee from "../assets/AdminShriJee.png";
import AdminShriJee2 from "../assets/AdminShriJee2.png";

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

const ECommerce = () => {
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
          Devotees E-Commerce (ShriJeeMart)
        </h1>

        <p className="text-gray-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          An Amazon affiliate e-commerce platform built for pooja and festival
          products, focusing on SEO traffic, conversion optimization, and admin
          insights.
        </p>
      </motion.div>

      {/* WHAT */}
      <Section
        title="What is this E-Commerce platform?"
        subtitle="Affiliate-based product discovery & conversion system"
      >
        <p className="text-gray-300 max-w-3xl text-sm leading-relaxed">
          This project is a niche Amazon affiliate website that showcases curated
          pooja and festival products. The goal is to drive organic traffic,
          improve user trust, and maximize affiliate conversions.
        </p>
      </Section>

      {/* WHY */}
      <Section
        title="Why this project?"
        subtitle="Problems with traditional affiliate websites"
      >
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          <FeatureCard
            icon={<FaShoppingCart />}
            title="Low Conversion"
            desc="Generic affiliate sites fail to guide users effectively."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Poor User Trust"
            desc="Lack of niche focus reduces credibility."
          />
          <FeatureCard
            icon={<FaBullhorn />}
            title="No Lead Capture"
            desc="Visitors leave without any retention mechanism."
          />
          <FeatureCard
            icon={<FaServer />}
            title="No Admin Insights"
            desc="Admins can’t track content performance or leads."
          />
        </div>
      </Section>

      {/* ROLE */}
      <Section
        title="My Role & Key Decisions"
        subtitle="End-to-end ownership of the project"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Designed full frontend architecture using React</li>
          <li>Integrated Amazon affiliate product redirection</li>
          <li>Built admin panel for managing products & leads</li>
          <li>Focused on SEO-friendly structure & fast loading</li>
          <li>Handled Firebase setup and production deployment</li>
        </ul>
      </Section>

      {/* USER EXPERIENCE */}
      <Section
        title="User Experience"
        subtitle="Optimized for browsing, trust & conversion"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mb-4">
          <li>
            Centralized platform to discover all pooja & festival items at one
            place.
          </li>
          <li>Clean product listings with festival-based categorization</li>
          <li>Fast, mobile-first UI for SEO traffic</li>
          <li>Direct redirection to Amazon for checkout</li>
          <li>Popup-based lead capture for offers</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4">
          <AppMockup src={UserShrijee} alt="Ecommerce Home Page" />
          <AppMockup src={UserCatagoryShrijee} alt="Product Listing Page" />
          <AppMockup
            src={UserCatagoryInsideshrijee}
            alt="Lead Capture Popup"
          />
          <AppMockup src={UserDetialsShrijee} alt="Mobile View" />
        </div>
      </Section>

      {/* ADMIN */}
      <Section
        title="Admin Panel"
        subtitle="Tracking content & affiliate performance"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm mb-4">
          <li>Manage product listings</li>
          <li>Track user leads from popups</li>
          <li>Identify high-performing products</li>
          <li>Control content & campaigns</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-4">
          <AppMockup src={AdminShriJee} alt="Admin Dashboard" />
          <AppMockup src={AdminShriJee2} alt="Lead Management" />
        </div>
      </Section>

      {/* TECH */}
      <Section
        title="Tech Stack & Architecture"
        subtitle="Optimized for speed, SEO & scalability"
      >
        <div className="flex flex-wrap gap-2 mb-3">
          <TechPill>React.js</TechPill>
          <TechPill>JavaScript (ES6+)</TechPill>
          <TechPill>Tailwind CSS</TechPill>
          <TechPill>Material UI</TechPill>
          <TechPill>Firebase</TechPill>
          <TechPill>Amazon Affiliate</TechPill>
          <TechPill>Vercel / Netlify</TechPill>
        </div>

        <p className="text-gray-400 max-w-3xl text-sm">
          Component-driven React architecture with Firebase handling admin data
          and lead storage. UI optimized for SEO, responsiveness and performance.
        </p>
      </Section>

      {/* PERFORMANCE */}
      <Section
        title="Performance & Best Practices"
        subtitle="Built with real-world usage in mind"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Lazy-loaded components for faster initial load</li>
          <li>SEO-friendly layout for organic traffic</li>
          <li>Responsive design for mobile-heavy users</li>
          <li>Optimized images & reusable components</li>
        </ul>
      </Section>

      {/* IMPACT */}
      <Section title="Impact & Results" subtitle="Business-focused outcomes">
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Improved affiliate click-through rate</li>
          <li>Higher engagement due to niche focus</li>
          <li>Lead capture enabled for remarketing</li>
        </ul>
      </Section>

      {/* FUTURE */}
      <Section
        title="What I’d Improve Next"
        subtitle="Scalability & growth roadmap"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm max-w-3xl">
          <li>Advanced analytics for traffic & conversions</li>
          <li>Personalized product recommendations</li>
          <li>Email & WhatsApp remarketing automation</li>
          <li>Server-side rendering for SEO scaling</li>
        </ul>
      </Section>
    </div>
  );
};

export default ECommerce;
