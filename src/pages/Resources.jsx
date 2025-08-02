// src/pages/Resources.jsx
import { motion } from "framer-motion";
import DownloadButton from "../components/DownloadButton";

const resources = [
  {
    id: 1,
    title: "Free Icon Packs",
    description: "A curated collection of free icons for your UI/UX projects.",
    link: "#",
  },
  {
    id: 2,
    title: "UI Kit Starter",
    description: "Essential UI kits to kickstart your web design.",
    link: "#",
  },
  {
    id: 3,
    title: "Color Palettes",
    description: "Trendy and accessible color palette suggestions.",
    link: "#",
  },
  {
    id: 4,
    title: "Typography Guide",
    description: "Typography styles and font pairing cheat sheets.",
    link: "#",
  },
];

const Resources = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-300 text-center mb-6">
          Design Resources
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Unlock a treasure chest of free downloads and curated resources to boost your digital design workflow.
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {resources.map((res) => (
            <motion.div
              key={res.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                {res.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{res.description}</p>
              <a
                href={res.link}
                className="inline-block text-indigo-500 dark:text-indigo-300 font-medium hover:underline"
              >
                View Resource →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Downloadable Files Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-300">
            Download Free Files
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <DownloadButton filename="brand-kit.zip" label="Download Brand Kit" />
            <DownloadButton filename="mockup-templates.zip" label="Download Mockup Templates" />
            <DownloadButton filename="free-icons-pack.zip" label="Download Icons Pack" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resources;
