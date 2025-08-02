
// src/pages/DigitalArtGallery.jsx
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Dreamscape Illustration",
    image: "https://source.unsplash.com/featured/?digital-art,abstract",
    artist: "Nova Studio",
  },
  {
    title: "Futuristic City",
    image: "https://source.unsplash.com/featured/?digital-art,city",
    artist: "SkyFrame",
  },
  {
    title: "Neon Portrait",
    image: "https://source.unsplash.com/featured/?digital-art,neon",
    artist: "GlowLab",
  },
];

const DigitalArtGallery = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">Digital Art Gallery</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          A curated collection of stunning digital artworks and illustrations by emerging creatives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
            >
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-4 text-left">
                <h2 className="text-lg font-semibold text-pink-500">{item.title}</h2>
                <p className="text-sm text-gray-600">by {item.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalArtGallery;
