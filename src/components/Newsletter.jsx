// src/components/Newsletter.jsx
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white py-12 px-6 text-center rounded-xl mx-4 md:mx-20 my-12 shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get the latest design resources, templates, and tutorials delivered to your inbox.</p>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md text-black"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-pink-600 transition-colors px-6 py-3 rounded-md font-semibold"
        >
          Subscribe
        </button>
      </form>
    </motion.section>
  );
};

export default Newsletter;
