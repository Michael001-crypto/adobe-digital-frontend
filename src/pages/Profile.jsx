import { motion } from "framer-motion";
import { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: " Michael Obunezi",
    email: "mp1608662@gmail.com",
    role: "Creator",
    joined: "March 12, 2025",
    avatar: "Profile.jpg",
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* User Info */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-indigo-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{user.name}</h2>
            <p className="text-gray-500 dark:text-gray-300">{user.email}</p>
            <p className="text-sm mt-2 text-indigo-600 dark:text-indigo-400">{user.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Joined on {user.joined}</p>
          </div>
        </div>

        {/* Account Settings */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Account Settings</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Change Password */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Change Password</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-md"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>

        {/* Notification Preferences */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Notifications</h3>
          <form className="space-y-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <label className="text-sm text-gray-600 dark:text-gray-300">Email me about new downloads</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm text-gray-600 dark:text-gray-300">Weekly newsletter</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm text-gray-600 dark:text-gray-300">Platform updates and alerts</label>
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md"
            >
              Save Preferences
            </button>
          </form>
        </div>

        {/* Delete Account */}
        <div>
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Danger Zone</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Deleting your account is irreversible. All uploads, downloads, and saved data will be removed.
          </p>
          <button
            onClick={() => window.confirm("Are you sure you want to delete your account? This action cannot be undone.")}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md"
          >
            Delete My Account
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
