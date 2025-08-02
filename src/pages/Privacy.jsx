import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
          Privacy Policy
        </h1>
        <p className="mb-4">
          At Adobe Digital, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, billing information, and usage data when you interact with our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>To provide and maintain our services</li>
          <li>To personalize your user experience</li>
          <li>To send updates, newsletters, and marketing emails</li>
          <li>To detect and prevent fraud or abuse</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies</h2>
        <p className="mb-4">
          We use cookies to improve website functionality and user experience. You can choose to disable cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
        <p className="mb-4">
          We may share your data with trusted third parties to assist in operating our website, conducting business, or providing services. These parties are obligated to keep your information confidential.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information at any time by contacting us.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: July 2025
        </p>
      </motion.div>
    </section>
  );
};

export default Privacy;
