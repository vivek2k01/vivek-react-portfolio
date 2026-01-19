import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-cyan-400" : "text-gray-300";

  return (
    <nav
      className="
    fixed top-0 left-0 w-full z-50
    bg-[#020617]/60
    backdrop-blur-md
    border-b border-gray-800/60
    shadow-sm
  "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Subtle background glow */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 -right-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 text-2xl font-extrabold tracking-wide"
        >
          <span className="text-cyan-400">Vivek</span>
          <span className="text-white">.dev</span>
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden md:flex items-center gap-10 relative z-10">
          <Link
            to="/"
            className={`font-medium transition hover:text-cyan-400 ${isActive("/")}`}
          >
            Home
          </Link>

          <Link
            to="/projects"
            className={`font-medium transition hover:text-cyan-400 ${isActive("/projects")}`}
          >
            Projects
          </Link>

          {/* Resume CTA */}
          <a
            href="/Vivek_frontend_resume.pdf"
            download
            className="
          ml-4 px-5 py-2 rounded-lg
          bg-gradient-to-r from-cyan-400 to-purple-500
          text-black font-semibold
          hover:opacity-90 transition
          shadow-lg shadow-cyan-500/20
        "
          >
            Resume
          </a>
        </div>

        {/* ===== MOBILE BUTTON ===== */}
        <button
          className="md:hidden text-3xl text-gray-300 relative z-10"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div
          className="
        md:hidden
        bg-[#020617]/90
        backdrop-blur-md
        border-t border-gray-800
        px-6 py-6 space-y-4
        text-gray-300
      "
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="block hover:text-cyan-400 transition"
          >
            Projects
          </Link>

          <a
            href="/Vivek_frontend_resume.pdf"
            download
            className="inline-block mt-2 px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
