import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import { CTAFooter } from './components/CTAFooter';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import { Partners } from './components/Partners';
import Patients from './components/Patients';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#14B8A6] selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Features />
                <HowItWorks />
                <Partners />
                <CTAFooter id="cta-footer" />
              </>
            } />
            <Route path="/patients" element={<Patients />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

