'use client';

import { motion } from 'framer-motion';
import { Star, Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-playfair mb-4">About Threads & Togs</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Lucknow's Trusted Designer Rental Boutique</p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 space-y-16">
        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-4xl font-playfair mb-6 text-luxury-gold">Our Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Threads & Togs (TNT) was founded with a simple belief: luxury fashion should be accessible to everyone. We understand that premium designer outfits come with premium price tags, but that shouldn't stop you from looking and feeling absolutely stunning at your special events.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Based in Lucknow, our boutique has become the go-to destination for designer outfit rentals. From bridal lehengas to sophisticated sherwanis, from cocktail gowns to traditional sarees, we've curated an extensive collection of luxury fashion pieces for every occasion.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Star, label: '4.9★ Rating', value: '500+ Reviews' },
            { icon: Users, label: 'Happy Clients', value: '2000+' },
            { icon: Award, label: 'Collections', value: '1000+' },
            { icon: Heart, label: 'Occasions', value: 'All Types' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-6 rounded-lg text-center"
              >
                <Icon className="mx-auto mb-3 text-luxury-gold" size={32} />
                <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                <p className="text-2xl font-playfair text-luxury-gold">{stat.value}</p>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-4xl font-playfair mb-8 text-luxury-gold">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair mb-3 text-luxury-gold">Quality</h3>
              <p className="text-gray-300">Every piece in our collection is carefully selected and maintained to the highest standards.</p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-3 text-luxury-gold">Accessibility</h3>
              <p className="text-gray-300">We believe luxury fashion should be affordable and accessible to everyone.</p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-3 text-luxury-gold">Service</h3>
              <p className="text-gray-300">Your satisfaction is our priority. We provide exceptional service for every client.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
