// src/pages/Gallery.jsx
import { motion } from "framer-motion";

const artworks = [
  {
    id: 1,
    title: "Neon Samurai",
    artist: "Kai Vision",
    image: "https://source.unsplash.com/400x500/?digital-art,samurai",
  },
  {
    id: 2,
    title: "Futuristic City",
    artist: "Luna Dream",
    image: "https://source.unsplash.com/400x500/?cyberpunk,city",
  },
  {
    id: 3,
    title: "Cosmic Bloom",
    artist: "Nova AI",
    image: "https://source.unsplash.com/400x500/?cosmic,flowers",
  },
  {
    id: 4,
    title: "AI Portrait",
    artist: "Synthetica",
    image: "https://source.unsplash.com/400x500/?ai,portrait",
  },
  {
    id: 5,
    title: "Mystic Jungle",
    artist: "Aurora Jade",
    image: "https://source.unsplash.com/400x500/?jungle,fantasy",
  },
  {
    id: 6,
    title: "Digital Flames",
    artist: "Pixel Forge",
    image: "https://source.unsplash.com/400x500/?flames,digital",
  },
];

export default function Gallery() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Digital <span className="text-pink-500">Art Gallery</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore captivating digital artworks from global creators.
        </p>

        {/* Art Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <motion.div
              key={art.id}
              className="overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {art.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  by {art.artist}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
