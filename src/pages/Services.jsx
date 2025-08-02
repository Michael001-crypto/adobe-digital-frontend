// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Code, Palette, ShoppingCart, Layers } from "lucide-react";

const services = [
  {
    title: "UI/UX & Web Design",
    icon: <Palette className="w-8 h-8 text-indigo-500" />,
    description: "Modern, user-friendly designs tailored for digital products, websites, and mobile apps.",
  },
  {
    title: "Full-Stack Development",
    icon: <Code className="w-8 h-8 text-indigo-500" />,
    description: "Robust frontend + backend development using React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Template Marketplace",
    icon: <Layers className="w-8 h-8 text-indigo-500" />,
    description: "Buy & sell creative templates including portfolios, landing pages, resumes, and more.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="w-8 h-8 text-indigo-500" />,
    description: "Custom online stores built with scalable backend, secure payment, and product management.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Our <span className="text-indigo-500">Services</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          From stunning designs to powerful digital solutions, we help creators, entrepreneurs, and brands thrive online.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow transition"
          >
            Get a Custom Quote →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
