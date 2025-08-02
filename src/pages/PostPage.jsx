// src/pages/PostPage.jsx
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import blogPosts from "../blog/blogData"; // adjust if your data is elsewhere
import ReactMarkdown from "react-markdown";

const PostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-600 dark:text-gray-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600">Post not found</h1>
          <p className="text-gray-500">Sorry, we couldn't find that blog post.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          By <span className="font-semibold">{post.author}</span> |{" "}
          {new Date(post.date).toDateString()} |{" "}
          <span className="italic">{post.category}</span>
        </div>
        <hr className="border-gray-300 dark:border-gray-700 mb-6" />
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </motion.div>
    </section>
  );
};

export default PostPage;
