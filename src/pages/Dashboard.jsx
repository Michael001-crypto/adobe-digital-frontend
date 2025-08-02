// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  FaUserCog,
  FaCloudUploadAlt,
  FaBook,
  FaShoppingCart,
  FaDownload,
  FaCloudDownloadAlt,
  FaUserGraduate,
  FaUserCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const { user, isAdmin, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/login");
    }
  }, [user, isAdmin, loading, navigate]);

  const [stats] = useState([
    { label: "Templates Purchased", value: 12 },
    { label: "Courses Enrolled", value: 4 },
    { label: "Favorites Saved", value: 9 },
    { label: "Community Posts", value: 17 },
  ]);

  const [recentItems] = useState([
    {
      id: 1,
      title: "Modern Portfolio Template",
      type: "Template",
      date: "July 15, 2025",
    },
    {
      id: 2,
      title: "Design Principles 101",
      type: "Course",
      date: "July 13, 2025",
    },
    {
      id: 3,
      title: "Mockup Tools Guide",
      type: "Blog Post",
      date: "July 10, 2025",
    },
  ]);

  const customStats = [
    {
      title: "Downloads",
      value: 45,
      icon: <FaCloudDownloadAlt className="text-indigo-500 text-2xl" />,
    },
    {
      title: "Uploads",
      value: 12,
      icon: <FaCloudUploadAlt className="text-green-500 text-2xl" />,
    },
    {
      title: "Courses Enrolled",
      value: 6,
      icon: <FaUserGraduate className="text-yellow-500 text-2xl" />,
    },
  ];

  if (loading || !user || !isAdmin) {
    return <div className="text-center py-10">Checking admin access...</div>;
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 text-center sm:text-left">
          <FaUserCircle className="text-5xl text-gray-600 dark:text-white" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Welcome Back, {user?.email || "Admin"}!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Here’s your activity snapshot
            </p>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <DashboardCard icon={<FaBook className="text-3xl text-indigo-500" />} title="My Courses" link="/courses" />
          <DashboardCard icon={<FaShoppingCart className="text-3xl text-green-500" />} title="My Marketplace Items" link="/marketplace" />
          <DashboardCard icon={<FaDownload className="text-3xl text-blue-500" />} title="My Downloads" link="/downloads" />
          <DashboardCard icon={<FaCloudUploadAlt className="text-3xl text-yellow-500" />} title="Upload New Template" link="/upload" />
          <DashboardCard icon={<FaUserCog className="text-3xl text-red-500" />} title="Profile & Settings" link="/profile" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Custom Stats with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {customStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow border border-gray-200 dark:border-gray-700 flex flex-col items-start"
            >
              {stat.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">{stat.title}</h3>
              <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Recent Activity
          </h3>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentItems.map((item) => (
              <li key={item.id} className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-100">{item.title}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.type} • {item.date}</p>
                </div>
                <Link to="/dashboard" className="text-sm bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded-md transition self-start sm:self-auto">
                  View
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

const DashboardCard = ({ icon, title, link }) => (
  <motion.div
    className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition text-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className="mb-4">{icon}</div>
    <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">{title}</h2>
    <Link to={link} className="text-indigo-600 dark:text-indigo-400 hover:underline mt-2">
      Go
    </Link>
  </motion.div>
);

export default Dashboard;
