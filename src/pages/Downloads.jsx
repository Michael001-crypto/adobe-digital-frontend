// src/pages/Downloads.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaFileImage, FaFileArchive, FaDownload } from "react-icons/fa";
import { Filter } from "lucide-react";

const sampleFiles = [
  {
    id: 1,
    name: "Resume Design Template",
    type: "pdf",
    size: "2.4 MB",
    category: "Templates",
    url: "#",
    thumbnail: "https://source.unsplash.com/200x150/?resume,design",
  },
  {
    id: 2,
    name: "Creative Portfolio Sample",
    type: "zip",
    size: "10 MB",
    category: "Portfolios",
    url: "#",
    thumbnail: "https://source.unsplash.com/200x150/?portfolio,design",
  },
  {
    id: 3,
    name: "Modern CV Mockup",
    type: "image",
    size: "1.5 MB",
    category: "Graphics",
    url: "#",
    thumbnail: "https://source.unsplash.com/200x150/?cv,mockup",
  },
];

const Downloads = () => {
  const [filter, setFilter] = useState("All");

  const getIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-500 text-xl" />;
      case "zip":
        return <FaFileArchive className="text-yellow-500 text-xl" />;
      case "image":
        return <FaFileImage className="text-blue-500 text-xl" />;
      default:
        return null;
    }
  };

  const filteredFiles =
    filter === "All" ? sampleFiles : sampleFiles.filter((f) => f.category === filter);

  const categories = ["All", "Templates", "Portfolios", "Graphics"];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center md:text-left">
            My Downloads
          </h2>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                  filter === cat
                    ? "bg-indigo-600 text-white"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFiles.map((file) => (
            <motion.div
              key={file.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 border border-gray-200 dark:border-gray-700"
            >
              <img
                src={file.thumbnail}
                alt={file.name}
                className="rounded-md mb-4 h-40 w-full object-cover"
              />
              <div className="flex items-center gap-3 mb-3">
                {getIcon(file.type)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    {file.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {file.category} • {file.size}
                  </p>
                </div>
              </div>
              <a
                href={file.url}
                download
                className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <FaDownload className="mr-2" />
                Re-download
              </a>
            </motion.div>
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
            No files found for this category.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Downloads;
