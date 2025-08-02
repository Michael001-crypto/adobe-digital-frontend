// src/pages/ThankYou.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white dark:bg-gray-900 p-10 rounded-xl shadow-lg max-w-xl"
      >
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
           Message Sent!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default ThankYou;
