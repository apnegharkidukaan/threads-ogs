'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does rental work?',
    answer: 'Simply visit our store or contact us to browse our collection. Select your outfit, try it on for perfect fit, and we\'ll handle professional fitting and alterations if needed. You can rent for the duration of your event and return it afterwards.'
  },
  {
    question: 'How many days is the rental period?',
    answer: 'Rental periods typically range from 3-7 days depending on the outfit and occasion. We offer flexible rental options to suit your needs. Please contact us for specific rental duration details for your event.'
  },
  {
    question: 'Do you alter dresses?',
    answer: 'Yes! We provide professional fitting and alterations to ensure your outfit fits perfectly. Our expert tailors will make any necessary adjustments to ensure you look your best for your special event.'
  },
  {
    question: 'Are outfits professionally dry cleaned?',
    answer: 'Absolutely. All our outfits are professionally dry cleaned and maintained to the highest standards. We ensure every piece is in pristine condition when you rent it.'
  },
  {
    question: 'What documents are required for rental?',
    answer: 'We require a valid ID (Aadhar, Passport, or Driver\'s License) and proof of address. We may also require a security deposit depending on the outfit value.'
  },
  {
    question: 'Can I book in advance?',
    answer: 'Yes! We encourage advance bookings, especially for wedding seasons and festivals. Booking in advance ensures your preferred outfits are reserved for your event date.'
  },
  {
    question: 'Do you offer delivery?',
    answer: 'We currently operate from our Lucknow location. For delivery options to other areas, please contact us to discuss your requirements.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible cancellation with a full refund if cancelled 7 days before the rental date. For cancellations within 7 days, please contact us to discuss your options.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-luxury-black pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-playfair mb-4">FAQ</h1>
        <p className="text-lg text-gray-400">Frequently Asked Questions</p>
      </motion.div>

      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-80 transition-all duration-300"
              >
                <h3 className="text-lg font-playfair text-left text-luxury-gold">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-luxury-gold transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-luxury-gold border-opacity-30"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
