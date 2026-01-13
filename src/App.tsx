import About from './components/About';
import { CTAFooter } from './components/CTAFooter';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { Partners } from './components/Partners';

export function App() {
  return <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#14B8A6] selection:text-white">
      <Header />
      <main>
        <About />
        <Features />
        <HowItWorks />
        <Partners />
        <CTAFooter id="cta-footer" />
      </main>
    </div>;
}
