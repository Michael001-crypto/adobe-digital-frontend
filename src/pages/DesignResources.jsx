import { useState } from "react";
import { motion } from "framer-motion";

const resources = [
  {
    id: 1,
    title: "Modern UI Kit",
    category: "UI Kit",
    description: "A sleek Figma-based UI kit for web apps.",
    link: "#",
  },
  {
    id: 2,
    title: "Minimal Icon Set",
    category: "Icons",
    description: "300+ minimalist icons in SVG and PNG.",
    link: "#",
  },
  {
    id: 3,
    title: "Creative Font Pack",
    category: "Fonts",
    description: "Handpicked fonts for branding and digital design.",
    link: "#",
  },
  {
    id: 4,
    title: "Illustration Pack",
    category: "Illustrations",
    description: "Colorful vector illustrations for landing pages.",
    link: "#",
  },
  {
    id: 5,
    title: "Glassmorphism UI Kit",
    category: "UI Kit",
    description: "Trendy glass-style interface components.",
    link: "#",
  },
  {
    id: 6,
    title: "Hand Drawn Icon Set",
    category: "Icons",
    description: "Unique sketch-style icons for creative websites.",
    link: "#",
  },
];

const categories = ["All", "UI Kit", "Icons", "Fonts", "Illustrations"];

const DesignResources = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((item) => item.category === activeCategory);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Design Resources</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Explore premium and free resources for designers, developers, and creatives.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 border-indigo-600 dark:bg-gray-800 dark:text-indigo-300 dark:border-indigo-400"
            } hover:shadow-md hover:scale-105`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: item.id * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg border dark:border-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-indigo-600 dark:text-indigo-300 hover:underline font-medium"
            >
              Download →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DesignResources;
