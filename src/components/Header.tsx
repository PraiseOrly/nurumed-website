import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartPulse } from 'lucide-react';
import { Button } from './ui/Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Problem',
    href: '#problem'
  }, {
    name: 'Solution',
    href: '#solution'
  }, {
    name: 'Features',
    href: '#features'
  }, {
    name: 'How It Works',
    href: '#how-it-works'
  }, {
    name: 'Impact',
    href: '#impact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1E2A38]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#1E2A38]/80 backdrop-blur-sm py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-[#FFC94A] p-2 rounded-xl text-[#1E2A38] group-hover:bg-[#FFD670] transition-colors shadow-lg shadow-[#FFC94A]/20">
              <HeartPulse size={24} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight font-heading">
              Nuru<span className="text-[#FFC94A]">Med</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-300 hover:text-[#FFC94A] font-medium transition-colors text-sm lg:text-base relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC94A] transition-all duration-300 group-hover:w-full"></span>
              </a>)}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-[#1E2A38] hover:bg-white">
              Partner with Us
            </Button>
            <Button variant="primary" size="sm">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-white hover:text-[#FFC94A] transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-[#1E2A38] border-t border-gray-800 overflow-hidden">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-lg font-medium text-white py-3 border-b border-gray-800 hover:text-[#FFC94A] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full justify-center border-white text-white hover:bg-white hover:text-[#1E2A38]" onClick={() => setIsMobileMenuOpen(false)}>
                  Partner with Us
                </Button>
                <Button variant="primary" className="w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}