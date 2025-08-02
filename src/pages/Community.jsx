// src/pages/Community.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCommentDots } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";

const members = [
  {
    name: "Alex Johnson",
    role: "Digital Artist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Explores futuristic and abstract digital forms.",
  },
  {
    name: "Maya Lin",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Designs intuitive interfaces with artistic flair.",
  },
  {
    name: "Carlos Vega",
    role: "3D Illustrator",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    bio: "Brings imagination to life through 3D visuals.",
  },
  {
    name: "Rina Takahashi",
    role: "Concept Artist",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    bio: "Crafts beautiful narratives through visuals.",
  },
];

const initialPosts = [
  {
    id: 1,
    title: "How do I price my design templates?",
    author: "Jane Doe",
    category: "Questions",
    content: "I've just listed my first templates. Any tips on pricing them competitively?",
    date: "July 21, 2025",
  },
  {
    id: 2,
    title: "Looking for a collab on a UI kit bundle",
    author: "John Pixel",
    category: "Collabs",
    content: "Anyone interested in co-creating a premium UI kit for Figma?",
    date: "July 19, 2025",
  },
];

const Community = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    category: "Questions",
    content: "",
  });

  const handlePost = () => {
    if (!newPost.title || !newPost.author || !newPost.content) return;

    const postToAdd = {
      ...newPost,
      id: posts.length + 1,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
    setPosts([postToAdd, ...posts]);
    setNewPost({ title: "", author: "", category: "Questions", content: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-20">
      {/* === Creative Member Showcase === */}
      <motion.div
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-600 mb-6">
          Creative Community
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Meet the vibrant creators and innovators who are shaping the future of digital art and design.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* === Thread Posting + Posts List === */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10"
        >
          🎯 Start or Join a Discussion
        </motion.h2>

        {/* Post Form */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MdPostAdd className="text-blue-500" />
            Start a New Thread
          </h3>
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full px-4 py-2 mb-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          />
          <input
            type="text"
            placeholder="Your name"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            className="w-full px-4 py-2 mb-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          />
          <select
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
            className="w-full px-4 py-2 mb-3 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          >
            <option>Questions</option>
            <option>Feedback</option>
            <option>Collabs</option>
            <option>Off Topic</option>
          </select>
          <textarea
            placeholder="What's on your mind?"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            rows="4"
            className="w-full px-4 py-2 mb-4 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          />
          <button
            onClick={handlePost}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Post Thread
          </button>
        </motion.div>

        {/* Posts List */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-200 rounded-full">
                  {post.category}
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800 dark:text-gray-100">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">by {post.author}</p>
              <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-blue-500 dark:text-blue-300 cursor-pointer">
                <FaCommentDots /> Comment
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
