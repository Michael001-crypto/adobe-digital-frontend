import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-800 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-red-500 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
