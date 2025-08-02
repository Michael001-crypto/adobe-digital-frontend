// src/pages/Marketplace.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ShoppingCart, Heart, Filter, X, ExternalLink } from "lucide-react";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";
import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

const templates = [
  {
    id: 1,
    name: "Creative Portfolio Template",
    description: "Clean and responsive portfolio built with Tailwind and React.",
    price: "$12",
    tag: "Portfolio",
    image: "https://source.unsplash.com/400x250/?website,design",
  },
  {
    id: 2,
    name: "Startup Landing Page",
    description: "Perfect for launching your next SaaS or startup idea.",
    price: "$15",
    tag: "Landing Page",
    image: "https://source.unsplash.com/400x250/?startup,landing",
  },
  {
    id: 3,
    name: "Minimal UI Kit",
    description: "Modular UI components and layouts for Figma or Adobe XD.",
    price: "$8",
    tag: "UI Kit",
    image: "https://source.unsplash.com/400x250/?ui,kit",
  },
  {
    id: 4,
    name: "E-Commerce Template",
    description: "Fully functional e-commerce frontend with product filtering.",
    price: "$20",
    tag: "E-Commerce",
    image: "https://source.unsplash.com/400x250/?ecommerce,shop",
  },
  {
    id: 5,
    name: "Social Media Kit",
    price: "Free",
    tags: ["Social", "Instagram", "Canva"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://www.canva.com/templates/social-media-kits/",
    description: "Complete social media branding kit with templates."
  },
  {
    id: 6,
    name: "UX Wireframe Kit",
    price: "$24",
    tags: ["UI/UX", "Figma", "Prototyping"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://creativemarket.com/wireland/5538464-Wireframe-Kit",
    description: "Professional wireframing toolkit for UI/UX designers."
  },
  {
    id: 7,
    name: "Brand Guidelines Template",
    price: "$19",
    tags: ["Branding", "PDF", "Editable"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://creativemarket.com/brandpacks/2223141-Brand-Guidelines-Template",
    description: "Comprehensive brand guideline template for businesses."
  },
  {
    id: 8,
    name: "E-commerce Product Mockups",
    description: "Editable mockups for your store.",
    image: "https://images.unsplash.com/photo-1604147497512-5e5510c1b4ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["PSD", "mockup"],
    price: "$18",
    link: "https://www.mockupworld.co/free/online-shop-template-mockup/"
  },
  {
    id: 9,
    name: "Detachable Free UI Kit",
    price: "Free",
    tags: ["UI Kit", "Figma", "Responsive"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://www.figma.com/community/file/947637813159456439",
    description: "Modular UI kit with detachable components."
  },
  {
    id: 10,
    name: "Moon Design System",
    price: "Free",
    tags: ["Design System", "Components", "Figma"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "https://www.figma.com/community/file/853110195780089419",
    description: "Elegant design system with moon-inspired elements."
  }
];

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [favorites, setFavorites] = useState([]);
  const { cart, dispatch } = useCart();

  // Enhanced templates with additional properties
  const enhancedTemplates = templates.map(template => ({
    ...template,
    tags: template.tags || [template.tag],
    link: template.link || "#",
    description: template.description || "Premium template ready to use",
    favorite: favorites.includes(template.id)
  }));

  const filteredTemplates = enhancedTemplates.filter((template) => {
    const matchesTag = activeTag ? template.tags.includes(activeTag) : true;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  // Sorting functionality
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch(sortOption) {
      case "price-low":
        return a.price === "Free" ? -1 : b.price === "Free" ? 1 : parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      case "price-high":
        return a.price === "Free" ? -1 : b.price === "Free" ? 1 : parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return a.id - b.id;
    }
  });

  const allTags = [...new Set(enhancedTemplates.flatMap((template) => template.tags))];

  const handleAddToCart = (template) => {
    const price = template.price === "Free" ? 0 : parseFloat(template.price.replace("$", ""));
    dispatch({ type: "ADD_TO_CART", payload: { ...template, price } });
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id];
      
      // Update favorite status in templates
      enhancedTemplates.forEach(template => {
        if (template.id === id) {
          template.favorite = !template.favorite;
        }
      });
      
      return newFavorites;
    });
  };

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFilterOpen && !event.target.closest('.relative')) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Template <span className="text-indigo-500">Marketplace</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Discover premium templates to kickstart your next project.
        </p>
        
        {/* Enhanced Header Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
              >
                <Filter size={18} />
                <span>Filter</span>
              </button>
              
              {isFilterOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-10 p-4"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold">Filters</h4>
                    <button onClick={() => setIsFilterOpen(false)}>
                      <X size={16} />
                    </button>
                  </div>
                  <TagFilter tags={allTags} activeTag={activeTag} onChange={setActiveTag} />
                </motion.div>
              )}
            </div>
            
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6 text-gray-600 dark:text-gray-300">
          Showing {sortedTemplates.length} template{sortedTemplates.length !== 1 ? 's' : ''}
          {activeTag && ` in ${activeTag}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
        
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTemplates.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button 
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:shadow-md transition"
                >
                  <Heart 
                    size={18} 
                    className={item.favorite ? "fill-red-500 text-red-500" : "text-gray-400"} 
                  />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-indigo-600 font-bold">{item.price}</span>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <ExternalLink size={14} />
                    View Details
                  </a>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {sortedTemplates.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No templates found matching your criteria.
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveTag("");
              }}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}
        
        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow transition text-lg font-medium"
          >
            <BadgeCheck size={18} /> Request a Custom Template
          </a>
        </motion.div>
        
        {/* Cart Component appears only when there are items */}
        {cart.items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <Cart />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}