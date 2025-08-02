// src/pages/Portfolio.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects"; // Assume you moved project data here

const categories = ["All", ...new Set(projects.map((p) => p.category || "Other"))];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-6">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          A selection of recent creative work using modern stacks.
        </p>
      </motion.div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-all text-sm font-medium ${
              filter === cat
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
