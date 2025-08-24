import { Navigation } from '@/components/ui/navigation';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Safety } from '@/components/sections/Safety';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/ui/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Safety />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
