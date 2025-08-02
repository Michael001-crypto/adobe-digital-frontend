import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem("subscribedToNewsletter");
    if (!hasSubscribed) {
      setTimeout(() => setIsVisible(true), 3000); // Show after 3s
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("subscribedToNewsletter", "true");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // You can integrate with backend/Formspree here
    alert("Thanks for subscribing!");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-md w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">Join Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get the latest updates, resources, and freebies delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
            <button
              onClick={handleClose}
              className="mt-4 text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              No thanks, maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
