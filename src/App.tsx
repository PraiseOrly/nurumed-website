import { CTASection } from './components/CTASection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Hero from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Impact } from './components/Impact';
import { Partners } from './components/Partners';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
export function App() {
  return <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#14B8A6] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Impact />
        <CTASection />
      </main>
      <Footer />
    </div>;
}