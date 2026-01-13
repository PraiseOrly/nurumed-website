import About from './components/About';
import { CTASection } from './components/CTASection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { Partners } from './components/Partners';

export function App() {
  return <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#14B8A6] selection:text-white">
      <Header />
      <main>
        <About />
        <Partners />
        <Features />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>;
}
