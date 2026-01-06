import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";

import Profile from "../assets/Profile.jpeg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaWordpress,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMui,
  SiCplusplus,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiGooglechrome,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Java", icon: <FaJava className="text-red-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
];

const featuredProjects = [
  {
    title: "RefreshH2O Water Plant CRM",
    desc: "Admin CRM for customers, employees, sales, salary, QR payments & billing.",
    tech: ["React", "JavaScript", "Tailwind", "MUI", "Firebase"],
    link: "/refreshh2o",
    text: "case study",
  },
  {
    title: "ShriJeeMart – Devotional E-Commerce",
    desc: "Amazon affiliate pooja & festival store with admin tracking.",
    tech: ["React", "JavaScript", "Tailwind", "Firebase"],
    link: "/ecommerce",
    text: "case study",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMMON SECTION HEADING ================= */
const sectionHeading =
  "text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-3 sm:mb-4";

const startYear = 2024;
const currentYear = new Date().getFullYear();
const experience = currentYear - startYear;

const Home = () => {
  return (
    <div className="px-3 sm:px-6 max-w-6xl mx-auto relative ">
      {/* ================= HERO ================= */}
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-40 w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <section className="py-12 sm:py-16 md:py-12 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            <span
              className="inline-block mb-3 px-3 py-1 text-xs sm:text-sm rounded-full 
              bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 font-mono"
            >
              &lt;Web Developer /&gt;
            </span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6 }}
              className="
    text-2xl
    sm:text-3xl
    md:text-5xl
    font-extrabold
    leading-tight
  "
            >
              Hi, I'm <br />
              <span className="text-cyan-400">Vivek Kumar Yadav</span>
            </motion.h1>

            <motion.p
              className="
    mt-3 sm:mt-4
    text-gray-400
    max-w-xl
    text-xs sm:text-sm md:text-base
    leading-relaxed
  "
            >
              I build{" "}
              <span className="text-cyan-400">
                modern, high-performance React apps
              </span>{" "}
              with a strong focus on user experience, scalable architecture, and
              production-ready integrations.
            </motion.p>

            {/* ===== CTA BUTTONS ===== */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap"
            >
              <Link
                to="/projects"
                className="bg-cyan-400 text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-cyan-300 transition"
              >
                View Projects
              </Link>

              <a
                href="/resume.pdf"
                download
                className="border border-cyan-400 text-cyan-400 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-cyan-400 hover:text-black transition"
              >
                Download Resume
              </a>

              <a
                href="mailto:yadavranjana845@gmail.com?subject=Hiring%20Vivek%20Kumar%20Yadav&body=Hi%20Vivek,%0A%0AI%20went%20through%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0ARegards,"
                className="bg-gradient-to-r from-cyan-400 to-purple-500
                        text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg 
                        text-sm sm:text-base font-semibold
                        hover:scale-105 transition-transform
                        shadow-lg shadow-cyan-500/30"
              >
                Hire Me
              </a>
            </motion.div>

            {/* ===== Stats ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 font-mono">
                  {experience}+
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Years Experience
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400">
                  10+
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Projects Completed
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400">
                  3
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Live Projects
                </span>
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl"
            >
              {[FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href={
                    i === 0
                      ? "https://github.com/vivek2k01"
                      : i === 1
                      ? "https://www.linkedin.com/in/vivek-kumar-yadav-b79555238/"
                      : "https://instagram.com/vivek.2k01"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT PHOTO ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-full 
                bg-gradient-to-r from-cyan-400 to-purple-500 
                blur opacity-70 group-hover:opacity-100 transition"
              ></div>

              <img
                src={Profile}
                alt="Vivek Kumar Yadav"
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 
                object-cover rounded-full border-4 border-black z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section className="py-8 sm:py-10 md:py-12 border-t border-gray-800">
        <motion.h2 className={sectionHeading}>About Me</motion.h2>

        <p
          className="
      text-gray-400
      max-w-3xl
      text-xs sm:text-sm md:text-base
      leading-relaxed
    "
        >
          I’m a React Developer who enjoys building modern web applications that
          are fast, scalable, and user-friendly.
          <br />
          <br />
          Over the past{" "}
          <span className="text-cyan-400 font-semibold">2+ years</span>, I’ve
          worked on different types of projects — from dashboards and internal
          tools to customer-facing web apps — focusing on clean UI, smooth user
          experience, and maintainable code.
          <br />
          <br />I like working on products where design, performance, and
          real-world usability come together to solve meaningful problems.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-10 md:py-12 border-t border-gray-800 overflow-hidden">
        <h2 className={sectionHeading}>Skills</h2>

        <div className="overflow-hidden">
          <div className="marquee flex items-center gap-8 sm:gap-12 text-gray-300">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="
            flex items-center gap-3
            px-5 py-3
            bg-[#020617]/80
            border border-gray-800
            rounded-xl
            hover:border-cyan-400
            hover:text-cyan-400
            transition
            whitespace-nowrap
          "
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm sm:text-base font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS & WORKFLOW ================= */}

      <section className="py-10 md:py-12 border-t border-gray-800">
        <h2 className={sectionHeading}>Tools & Workflow</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Development */}
          <div className="bg-[#020617]/80 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-lg font-semibold text-white mb-4">
              Development
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <VscVscode className="text-blue-400 text-xl" />
                <span>VS Code</span>
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="text-gray-400 text-xl" />
                <span>Git & GitHub</span>
              </li>
              <li className="flex items-center gap-3">
                <SiFirebase className="text-yellow-500 text-xl" />
                <span>Firebase Console</span>
              </li>
              <li className="flex items-center gap-3">
                <SiNpm className="text-red-500 text-xl" />
                <span>npm / Vite</span>
              </li>
            </ul>
          </div>

          {/* Debugging */}
          <div className="bg-[#020617]/80 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-lg font-semibold text-white mb-4">
              Debugging & Testing
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <SiGooglechrome className="text-blue-400 text-xl" />
                <span>Chrome DevTools</span>
              </li>
              <li className="flex items-center gap-3">
                <SiPostman className="text-orange-400 text-xl" />
                <span>Postman (API Testing)</span>
              </li>
            </ul>
          </div>

          {/* Design */}
          <div className="bg-[#020617]/80 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition">
            <h3 className="text-lg font-semibold text-white mb-4">
              Design & Handoff
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <SiFigma className="text-pink-400 text-xl" />
                <span>Figma</span>
              </li>
              <li className="flex items-center gap-3">
                <SiTailwindcss className="text-cyan-400 text-xl" />
                <span>Tailwind UI</span>
              </li>
              <li className="flex items-center gap-3">
                <SiMui className="text-cyan-400 text-xl" />
                <span>Material UI</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-8 sm:py-10 md:py-12 border-t border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <h2 className={sectionHeading}>Featured Projects</h2>

          <Link
            to="/projects"
            className="
        text-cyan-400 border border-cyan-400 rounded-lg
        px-3 py-1.5 text-xs
        sm:px-4 sm:py-2 sm:text-sm
        hover:bg-cyan-400 hover:text-black
        transition
        whitespace-nowrap
      "
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {featuredProjects.map((project, i) => (
            <Link key={i} to={project.link} className="group relative block">
              <div
                className="
            h-full bg-[#020617]/80 border border-gray-800
            rounded-2xl p-4 sm:p-5 md:p-6
            hover:border-cyan-400
            hover:-translate-y-1
            transition-all
          "
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="
                  text-[10px] sm:text-xs
                  px-2 sm:px-3 py-1
                  rounded-full
                  bg-cyan-400/10 text-cyan-400
                  border border-cyan-400/20
                "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Case Study */}
                <span
                  className="
              absolute bottom-3 right-3 sm:bottom-4 sm:right-4
              text-[10px] sm:text-xs
              border border-cyan-400 text-cyan-400
              px-2 sm:px-3 py-1
              rounded-full
              group-hover:bg-cyan-400
              group-hover:text-black
              transition
              whitespace-nowrap
            "
                >
                  Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="py-10 md:py-12 border-t border-gray-800">
        <h2 className={sectionHeading}>Experience</h2>

        <div
          className="bg-[#020617]/80 border border-gray-800 rounded-2xl p-6 md:p-8
                  hover:border-cyan-400 transition"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-semibold">
              React Developer
            </h3>

            <span
              className="text-xs px-3 py-1 rounded-full
                       bg-cyan-400/10 text-cyan-400
                       border border-cyan-400/20"
            >
              Full-Time
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            DevQsoft Technology • Indore • 2024 – Present
          </p>

          {/* High-level Summary */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            Working as a React Developer with{" "}
            <span className="text-cyan-400 font-semibold">
              2+ years of experience
            </span>
            , contributing to multiple web applications across different
            domains. Responsible for building scalable UIs, handling complex
            frontend logic, and delivering production-ready features used by
            real users.
          </p>

          {/* Key Responsibilities */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-400 transition">
              <p className="font-medium mb-1">Frontend Development</p>
              <p className="text-sm text-gray-400">
                Developed reusable React components, managed state, and
                implemented responsive layouts for modern web applications.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-400 transition">
              <p className="font-medium mb-1">Admin Panels & Dashboards</p>
              <p className="text-sm text-gray-400">
                Built data-driven dashboards with role-based access, charts,
                tables and real-time updates.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-400 transition">
              <p className="font-medium mb-1">Authentication & Integrations</p>
              <p className="text-sm text-gray-400">
                Integrated authentication, APIs, databases and third-party
                services following best practices.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-4 hover:border-cyan-400 transition">
              <p className="font-medium mb-1">Team Collaboration</p>
              <p className="text-sm text-gray-400">
                Collaborated closely with designers, backend developers and
                managers to deliver features end-to-end.
              </p>
            </div>
          </div>

          {/* Impact / Growth */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-2xl font-bold text-cyan-400">2+</p>
              <p className="text-xs text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">Multiple</p>
              <p className="text-xs text-gray-400">Domains Worked On</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">Daily</p>
              <p className="text-xs text-gray-400">Production Deployments</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-cyan-400">Team</p>
              <p className="text-xs text-gray-400">Cross-Functional Work</p>
            </div>
          </div>

          {/* Footer line */}
          <p className="text-gray-400 text-sm italic">
            Focused on writing clean, maintainable code and continuously
            improving performance, UX and development workflows.
          </p>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-8 md:py-10 border-t border-gray-800">
        <h2 className={sectionHeading}>Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
          {[
            {
              title: "React Developer Certification",
              org: "Udemy",
              year: "2024",
            },
            {
              title: "Core Java Programming",
              org: "Apna College",
              year: "2023",
            },
            {
              title: "C/C++ Programming",
              org: "Universal Informatics Indore",
              year: "2021",
            },
            {
              title: "Frontend Web Development",
              org: "edu-versity",
              year: "2022",
            },
          ].map((cert, i) => (
            <div
              key={i}
              className="bg-[#020617]/80 border border-gray-800 p-4 sm:p-5 rounded-xl hover:border-cyan-400 transition"
            >
              <h3 className="text-base sm:text-lg font-semibold">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {cert.org} • {cert.year}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ================= EDUCATION ================= */}
      <section className="py-8 md:py-10 border-t border-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "MCA (2023)", place: "Medicaps University, Indore" },
            { title: "B.Sc Computer Science (2021)", place: "DAVV, Indore" },
          ].map((edu, i) => (
            <div
              key={i}
              className="bg-[#020617]/80 border border-gray-800 p-5 sm:p-6 rounded-xl hover:border-cyan-400 transition"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                {edu.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">{edu.place}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-6 sm:py-8 border-t border-gray-800">
        <h2 className="text-xl sm:text-3xl font-bold text-cyan-400 mb-4 sm:mb-6">
          Beyond Coding
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-300">
          <li className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
            <span className="text-base sm:text-lg">🚀</span>
            <span>Exploring new frontend tools & UI trends</span>
          </li>

          <li className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
            <span className="text-base sm:text-lg">🎨</span>
            <span>Improving UI/UX through design inspiration</span>
          </li>

          <li className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
            <span className="text-base sm:text-lg">🧠</span>
            <span>Solving real-world problems with technology</span>
          </li>

          <li className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
            <span className="text-base sm:text-lg">📚</span>
            <span>Learning about scalable systems & products</span>
          </li>

          <li className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
            <span className="text-base sm:text-lg">🛕</span>
            <span>Interest in Indian culture, festivals & traditions</span>
          </li>

          <li className="flex items-start gap-2 text-sm sm:text-base leading-relaxed">
            <span className="text-base sm:text-lg">⚽</span>
            <span>Playing outdoor games to stay active</span>
          </li>
        </ul>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-6 sm:py-10 md:py-14 border-t border-gray-800 mb-6 relative overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -right-32 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-cyan-400">
            Let’s Build Something Great 🚀
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-400 text-xs sm:text-sm md:text-lg">
            Open to full-time React roles, freelance projects, and
            collaborations.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Left – Contact Cards */}
          <div className="space-y-3 sm:space-y-5">
            {[
              {
                label: "Email",
                value: "yadavranjana845@gmail.com",
              },
              {
                label: "Phone",
                value: "+91 8770289281",
              },
              {
                label: "Location",
                value: "Vijay Nagar, Indore (MP)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#020617]/80 border border-gray-800 p-3 sm:p-5 rounded-xl hover:border-cyan-400 transition"
              >
                <p className="text-gray-400 text-[8px] sm:text-sm">
                  {item.label}
                </p>
                <p className="text-white font-medium text-xs sm:text-base">
                  {item.value}
                </p>
              </div>
            ))}

            <p className="text-gray-400 text-[10px] sm:text-sm pt-1 sm:pt-2">
              ✔ Available for React / Frontend roles • Immediate / 30 days
              notice
            </p>
          </div>

          {/* Right – CTA Card */}
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-[1px] rounded-2xl">
            <div className="bg-[#020617] p-4 sm:p-6 md:p-8 rounded-2xl text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                Want to discuss an opportunity?
              </h3>
              <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                I usually respond within a few hours.
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:yadavranjana845@gmail.com?subject=React%20Developer%20Opportunity"
                  className="bg-cyan-400 text-black
            px-4 py-2 sm:px-6 sm:py-3
            text-xs sm:text-sm md:text-base
            rounded-lg font-semibold
            hover:bg-cyan-300 transition"
                >
                  Email Me
                </a>

                <a
                  href="https://wa.me/918770289281"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 text-cyan-400
            px-4 py-2 sm:px-6 sm:py-3
            text-xs sm:text-sm md:text-base
            rounded-lg
            hover:bg-cyan-400 hover:text-black transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
