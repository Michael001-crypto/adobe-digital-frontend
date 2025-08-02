import { ShoppingCart, Star } from "lucide-react";

const MarketplaceProductCard = ({ title, price, image, rating }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-indigo-600 font-bold">${price}</span>
          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        </div>
        <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MarketplaceProductCard;
