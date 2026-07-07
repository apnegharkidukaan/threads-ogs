'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'Lehengas', image: 'https://images.unsplash.com/photo-1609451957827-1aba1db76d3f?w=500&h=500&fit=crop' },
  { id: 2, category: 'Sherwanis', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop' },
  { id: 3, category: 'Gowns', image: 'https://images.unsplash.com/photo-1595623664479-41a956769da8?w=500&h=500&fit=crop' },
  { id: 4, category: 'Sarees', image: 'https://images.unsplash.com/photo-1615556307239-c969c45b2a7f?w=500&h=500&fit=crop' },
  { id: 5, category: 'Suits', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop' },
  { id: 6, category: 'Indo-Western', image: 'https://images.unsplash.com/photo-1591543556830-3e67a9abf65b?w=500&h=500&fit=crop' },
  { id: 7, category: 'Lehengas', image: 'https://images.unsplash.com/photo-1610415949262-b15ad7bb7ae5?w=500&h=500&fit=crop' },
  { id: 8, category: 'Gowns', image: 'https://images.unsplash.com/photo-1614010267537-b85ca6f0c4b7?w=500&h=500&fit=crop' },
];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Lehengas', 'Sherwanis', 'Suits', 'Gowns', 'Sarees', 'Indo-Western'];

  const filteredItems = selectedFilter === 'All' ? galleryItems : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-playfair mb-4">Gallery</h1>
        <p className="text-lg text-gray-400">Explore our luxury collection</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-luxury-gold text-luxury-black font-semibold'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item.image)}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-playfair text-lg">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative max-w-4xl w-full"
          >
            <img src={selectedImage} alt="Full view" className="w-full rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-luxury-gold transition-colors"
            >
              <X size={32} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
