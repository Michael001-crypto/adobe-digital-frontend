import { useState } from "react";
import { loginWithEmail } from "../firebase/authHelpers";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { user, error } = await loginWithEmail(formData.email, formData.password);

    if (error) {
      toast.error(error);
    } else {
      login({ email: user.email, uid: user.uid }); // sync user in context/localStorage
      toast.success("Login successful!");
      navigate("/dashboard");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 px-6 py-20">
      <motion.div
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600 dark:text-white">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none dark:bg-gray-800 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
        </p>
      </motion.div>
    </section>
  );
}
