'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-playfair mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-400">We'd love to hear from you</p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="text-luxury-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-playfair mb-2 text-luxury-gold">Visit Us</h3>
                  <p className="text-gray-300">Threads & Togs (TNT)<br />1/494, Behind Open Air Restaurant<br />Near Shaheed Chandrashekhar Azad Chowk<br />Viram Khand, Gomti Nagar<br />Lucknow, Uttar Pradesh 226010</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Phone className="text-luxury-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-playfair mb-2 text-luxury-gold">Call Us</h3>
                  <p className="text-gray-300">+91 92366 86998</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Clock className="text-luxury-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-playfair mb-2 text-luxury-gold">Opening Hours</h3>
                  <p className="text-gray-300">Monday - Sunday<br />10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            <div>
              <label className="block text-sm font-poppins mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-luxury-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-poppins mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-luxury-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-poppins mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-luxury-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold text-white"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-poppins mb-2">Message</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-luxury-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold text-white resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-luxury-gold text-luxury-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Google Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-playfair mb-6 text-luxury-gold">Find Us on Map</h2>
          <div className="w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9380443826446!2d80.99869!3d26.84862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThreads%20%26%20Togs!5e0!3m2!1sen!2sin!4v1234567890"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
