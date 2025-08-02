// src/components/ProductCard.jsx
import { motion } from "framer-motion";
import { BadgePlus } from "lucide-react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 flex flex-col transition-all hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={product.image}
        alt={product.title || product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
        {product.title || product.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {product.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {product.tags?.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-indigo-100 dark:bg-blue-700 text-indigo-700 dark:text-white px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-md font-semibold text-indigo-600 dark:text-indigo-400">
          ${product.price}
        </span>
        <button
          onClick={() => addToCart && addToCart(product)}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded text-sm"
        >
          <BadgePlus size={16} className="mr-1" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
