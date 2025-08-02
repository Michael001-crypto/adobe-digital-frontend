import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border dark:bg-gray-700 dark:text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border dark:bg-gray-700 dark:text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md border dark:bg-gray-700 dark:text-white"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
