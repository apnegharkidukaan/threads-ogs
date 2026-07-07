'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';
import OutfitCard from '@/components/OutfitCard';
import { motion } from 'framer-motion';

const womenOutfits = [
  { id: 1, name: 'Bridal Lehenga', category: 'Bridal Lehengas', price: '₹5,000', image: 'https://images.unsplash.com/photo-1609451957827-1aba1db76d3f?w=500&h=600&fit=crop' },
  { id: 2, name: 'Reception Lehenga', category: 'Reception Lehengas', price: '₹4,000', image: 'https://images.unsplash.com/photo-1589066194519-d7e4ba123c63?w=500&h=600&fit=crop' },
  { id: 3, name: 'Designer Saree', category: 'Designer Sarees', price: '₹2,500', image: 'https://images.unsplash.com/photo-1615556307239-c969c45b2a7f?w=500&h=600&fit=crop' },
  { id: 4, name: 'Cocktail Gown', category: 'Cocktail Gowns', price: '₹3,500', image: 'https://images.unsplash.com/photo-1595623664479-41a956769da8?w=500&h=600&fit=crop' },
  { id: 5, name: 'Mehendi Outfit', category: 'Mehendi Collection', price: '₹2,000', image: 'https://images.unsplash.com/photo-1610415949262-b15ad7bb7ae5?w=500&h=600&fit=crop' },
  { id: 6, name: 'Haldi Dress', category: 'Haldi Collection', price: '₹1,800', image: 'https://images.unsplash.com/photo-1614010267537-b85ca6f0c4b7?w=500&h=600&fit=crop' },
];

export default function WomenCollection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Bridal Lehengas', 'Reception Lehengas', 'Cocktail Gowns', 'Designer Sarees', 'Haldi Collection', 'Mehendi Collection'];

  const filteredOutfits = womenOutfits.filter(outfit => {
    const matchesCategory = selectedCategory === 'All' || outfit.category === selectedCategory;
    const matchesSearch = outfit.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-16">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-playfair mb-4">Women's Collection</h1>
        <p className="text-lg text-gray-400">Curated luxury outfits for every occasion</p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
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

          {/* Category Filter */}
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

        {/* Outfits Grid */}
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
