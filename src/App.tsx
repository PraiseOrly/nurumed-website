import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import { CTAFooter } from './components/CTAFooter';
import { Conditions } from './components/Conditions';
import Doctors from './components/Doctors';
import { Features } from './components/Features';
import { Header } from './components/Header';
import { HowItWorks } from './components/HowItWorks';
import Insurer from './components/Insurer';
import { Partners } from './components/Partners';
import Patients from './components/Patients';
import Pharmacy from './components/Pharmacy';

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
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/pharmacies" element={<Pharmacy />} />
            <Route path="/insurers" element={<Insurer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

