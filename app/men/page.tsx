'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import OutfitCard from '@/components/OutfitCard';
import { motion } from 'framer-motion';

const menOutfits = [
  { id: 1, name: 'Wedding Sherwani', category: 'Sherwanis', price: '₹6,000', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop' },
  { id: 2, name: 'Tuxedo', category: 'Tuxedos', price: '₹4,500', image: 'https://images.unsplash.com/photo-1615037893263-84b6a0d51b4e?w=500&h=600&fit=crop' },
  { id: 3, name: 'Three Piece Suit', category: 'Three Piece Suits', price: '₹3,500', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop' },
  { id: 4, name: 'Blazer', category: 'Blazers', price: '₹2,500', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd5e4d8?w=500&h=600&fit=crop' },
  { id: 5, name: 'Jodhpuri Suit', category: 'Jodhpuri Suits', price: '₹4,000', image: 'https://images.unsplash.com/photo-1534622066992-51fdde1078a3?w=500&h=600&fit=crop' },
  { id: 6, name: 'Kurta Set', category: 'Kurta Sets', price: '₹2,000', image: 'https://images.unsplash.com/photo-1591543556830-3e67a9abf65b?w=500&h=600&fit=crop' },
];

export default function MenCollection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Sherwanis', 'Tuxedos', 'Blazers', 'Three Piece Suits', 'Jodhpuri Suits', 'Kurta Sets'];

  const filteredOutfits = menOutfits.filter(outfit => {
    const matchesCategory = selectedCategory === 'All' || outfit.category === selectedCategory;
    const matchesSearch = outfit.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-playfair mb-4">Men's Collection</h1>
        <p className="text-lg text-gray-400">Premium outfits for the modern gentleman</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <Search className="absolute left-4 top-4 text-luxury-gold" size={20} />
            <input
              type="text"
              placeholder="Search outfits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-luxury-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold text-white"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-luxury-gold text-luxury-black font-semibold'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOutfits.map((outfit, index) => (
            <motion.div
              key={outfit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <OutfitCard outfit={outfit} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
