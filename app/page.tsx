import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import Occasions from '@/components/home/Occasions';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Categories />
      <FeaturedCollection />
      <WhyChooseUs />
      <HowItWorks />
      <Occasions />
      <Testimonials />
      <CTA />
    </main>
  );
}
