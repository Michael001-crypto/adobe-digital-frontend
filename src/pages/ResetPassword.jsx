import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    // 🚀 Placeholder for real backend/Firebase integration
    toast.success("If this email exists, a reset link has been sent.");
    setEmail("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="max-w-md w-full p-8 bg-white dark:bg-gray-900 shadow-xl rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition"
          >
            Send Reset Link
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ResetPassword;
