import { motion } from "framer-motion";

const Terms = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Welcome to Adobe Digital! These terms and conditions outline the rules and regulations for the use of our website.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Adobe Digital if you do not accept all of the terms stated on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. License</h2>
        <p className="mb-4">
          Unless otherwise stated, Adobe Digital and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. User Restrictions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You must not republish material from this site.</li>
          <li>You must not sell or rent content without permission.</li>
          <li>You must not reproduce or exploit material for commercial purposes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Modifications</h2>
        <p className="mb-4">
          We may revise these terms at any time without notice. By using this site, you agree to be bound by the current version of these Terms & Conditions.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: July 2025
        </p>
      </motion.div>
    </section>
  );
};

export default Terms;
