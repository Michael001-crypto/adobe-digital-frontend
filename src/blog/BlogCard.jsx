// src/blog/BlogCard.jsx
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{post.date} • {post.category}</p>
        <p className="text-gray-700 dark:text-gray-400 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
