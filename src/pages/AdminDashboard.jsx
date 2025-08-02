import { useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Analytics Boxes */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border dark:border-gray-700">
            <h2 className="text-xl font-semibold text-indigo-600">Total Users</h2>
            <p className="text-4xl font-bold mt-2 text-gray-800 dark:text-white">💼 1,245</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border dark:border-gray-700">
            <h2 className="text-xl font-semibold text-green-600">Messages</h2>
            <p className="text-4xl font-bold mt-2 text-gray-800 dark:text-white">📩 86</p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border dark:border-gray-700">
            <h2 className="text-xl font-semibold text-purple-600">Downloads</h2>
            <p className="text-4xl font-bold mt-2 text-gray-800 dark:text-white">📁 412</p>
          </div>
        </div>

        {/* Sections Below */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Recent User Activities
          </h3>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4 border dark:border-gray-700">
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li>👤 Jane signed up - 2 hours ago</li>
              <li>🧑‍💼 Admin replied to a message - 3 hours ago</li>
              <li>📥 John downloaded “Free UI Kit” - 5 hours ago</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AdminDashboard;
