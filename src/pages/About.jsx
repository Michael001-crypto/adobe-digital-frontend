// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          About <span className="text-indigo-500">Adobe Digital</span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          Adobe Digital is a creative hub for modern designers, developers, and innovators. 
          From premium templates to collaborative tools and educational content, we fuel digital transformation 
          through creativity, simplicity, and community.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🎯 Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To empower digital creators with resources, community, and opportunities that elevate their craft and ideas.
            </p>
          </div>

          <div className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🌍 Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be the global epicenter for creativity, digital excellence, and innovation — shaping the future of design.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">💡 Core Values</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 dark:text-gray-300 text-base">
            <li className="bg-indigo-100 dark:bg-gray-700 px-4 py-2 rounded-full">Creativity</li>
            <li className="bg-indigo-100 dark:bg-gray-700 px-4 py-2 rounded-full">Innovation</li>
            <li className="bg-indigo-100 dark:bg-gray-700 px-4 py-2 rounded-full">Community</li>
            <li className="bg-indigo-100 dark:bg-gray-700 px-4 py-2 rounded-full">Simplicity</li>
            <li className="bg-indigo-100 dark:bg-gray-700 px-4 py-2 rounded-full">Inspiration</li>
          </ul>
        </div>

        {/* Meet the Team */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">👥 Meet the Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: " Michael Obunezi", role: "Founder & Creative Director" },
              { name: "Sophia Lee", role: "Lead Designer" },
              { name: "David Emmaneul", role: "Full-Stack Developer" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-indigo-200 dark:bg-gray-700 rounded-full" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h4>
                <p className="text-indigo-500 dark:text-indigo-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow transition"
          >
            Let’s Work Together →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
