import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Threads & Togs - Premium Designer Outfit Rental',
  description: 'Lucknow\'s premium designer outfit rental boutique for weddings, receptions, and special events.',
  keywords: ['dress rental', 'lehenga rental', 'sherwani rental', 'luxury fashion', 'wedding rental', 'Lucknow'],
  openGraph: {
    title: 'Threads & Togs - Premium Designer Outfit Rental',
    description: 'Rent premium designer outfits in Lucknow',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-luxury-black text-white font-poppins">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
