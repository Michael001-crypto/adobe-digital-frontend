import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Newsletter from "../components/NewsletterPopup";
import DownloadButton from "../components/DownloadButton";
import Logo from "../components/Logo";
import { Helmet } from 'react-helmet-async'; // ✅ SEO support added

const TemplateSection = () => (
  <div className="mt-10">
    <h2 className="text-xl font-semibold">Download your free resource</h2>
    <DownloadButton filename="template-1.zip" />
  </div>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Adobe Digital | Home</title>
        <meta name="description" content="Explore premium design resources, digital templates, online courses, and more on Adobe Digital." />
        <meta name="keywords" content="Adobe Digital, design resources, templates, digital marketplace, online courses" />
        <meta property="og:title" content="Adobe Digital" />
        <meta property="og:description" content="All-in-one platform for creative assets, templates, and learning." />
        <meta property="og:image" content="https://your-domain.com/cover-image.jpg" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          {/* ✅ Logo inserted here */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Logo />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Welcome to Adobe Digital
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover resources, templates, courses, and a thriving community
            built for designers and creators worldwide.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/design-resources"
              aria-label="Browse design resources"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
            >
              Browse Resources
            </Link>
            <Link
              to="/signup"
              aria-label="Join Adobe Digital"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-xl hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
            >
              Join Now
            </Link>
          </motion.div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                title: "🎨 Design Resources",
                text: "Access a curated library of high-quality UI kits, fonts, illustrations, and more."
              },
              {
                title: "🛍️ Template Marketplace",
                text: "Buy and sell modern templates for websites, pitch decks, and digital products."
              },
              {
                title: "💬 Creative Community",
                text: "Share ideas, get feedback, and grow with creators like you around the world."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-indigo-600 dark:bg-indigo-700 text-white py-16 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Start Creating with Adobe Digital Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8 text-lg"
          >
            Sign up to access exclusive design tools, premium content, and a
            creative marketplace made for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              to="/signup"
              className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition"
            >
              Create Account
            </Link>
          </motion.div>
        </section>

        <Newsletter />
      </main>
    </>
  );
};

export default Home;
