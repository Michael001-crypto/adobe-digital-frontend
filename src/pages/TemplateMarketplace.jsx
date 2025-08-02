
// src/pages/TemplateMarketplace.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    title: "Creative Portfolio Website",
    category: "Website",
    price: "$19",
    description: "A sleek React-based portfolio template.",
    link: "#",
  },
  {
    id: 2,
    title: "Business Landing Page",
    category: "Landing Page",
    price: "$25",
    description: "Clean and modern landing page for startups.",
    link: "#",
  },
  {
    id: 3,
    title: "Instagram Post Pack",
    category: "Social Media",
    price: "Free",
    description: "Editable Canva templates for IG marketing.",
    link: "#",
  },
  {
    id: 4,
    title: "Mobile App UI",
    category: "App UI",
    price: "$29",
    description: "Stylish mobile app screen designs in Figma.",
    link: "#",
  },
  {
    id: 5,
    title: "Resume/CV Templates",
    category: "Print",
    price: "Free",
    description: "Clean and modern resume templates in DOCX.",
    link: "#",
  },
  {
    id: 6,
    title: "E-commerce UI Kit",
    category: "Website",
    price: "$39",
    description: "Complete e-commerce website design system.",
    link: "#",
  },
];

const categories = ["All", "Website", "Landing Page", "Social Media", "App UI", "Print"];

const TemplateMarketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section className="min-h-screen bg-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-800">Template Marketplace</h1>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Shop and download ready-made templates for all your digital needs.
        </p>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border-purple-600"
            } hover:shadow transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Template Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredTemplates.map((template) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: template.id * 0.1 }}
            className="border rounded-xl p-6 bg-gray-50 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{template.title}</h3>
            <p className="text-gray-600 mb-2">{template.description}</p>
            <span className="inline-block text-sm font-medium mb-4 px-3 py-1 rounded-full bg-purple-100 text-purple-700">
              {template.price}
            </span>
            <br />
            <a
              href={template.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline font-medium"
            >
              View Template →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TemplateMarketplace;
