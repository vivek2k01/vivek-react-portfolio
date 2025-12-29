import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={project.caseStudy}
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="
          relative bg-[#020617]/80 backdrop-blur
          border border-gray-800 rounded-2xl p-6
          hover:border-cyan-400 transition-all
          shadow-lg hover:shadow-cyan-500/20
        "
      >
        {/* Status Badge */}
        {project.status && (
          <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
            {project.status}
          </span>
        )}

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.split(",").map((tech, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {project.live && (
            <a
              href={`https://${project.live}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex items-center gap-2 text-sm
                bg-cyan-400 text-black px-4 py-2
                rounded-lg font-semibold
                hover:bg-cyan-300 transition
              "
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex items-center gap-2 text-sm
                border border-gray-600 px-4 py-2
                rounded-lg text-gray-300
                hover:border-cyan-400 hover:text-cyan-400 transition
              "
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
