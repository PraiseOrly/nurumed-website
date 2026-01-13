import { AnimatePresence, motion } from "framer-motion";
import { HeartPulse, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Conditions", href: "#conditions" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav
      style={{
        fontFamily: '__LocalPoppinsFont_1100c3, __LocalPoppinsFont_Fallback_1100c3, Poppins, sans-serif',
      }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ${
        isScrolled
          ? "top-4 w-[95%] max-w-7xl rounded-3xl bg-gradient-to-br from-[#0a1a1d] via-[#0d2628] to-[#0a1a1d] backdrop-blur-xl shadow-lg"
          : "top-0 w-full bg-gradient-to-br from-[#0a1a1d] via-[#0d2628] to-[#0a1a1d] backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          isScrolled ? "px-4 md:px-6 lg:px-10" : "px-4 md:px-6 lg:px-8"
        }`}
      >
        <div className="flex justify-between items-center h-12 md:h-14">
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
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#14B8A6] font-medium transition-colors text-sm lg:text-base relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm">
              Partner with Us
            </Button>
            <Button
              variant="ghost"
              size="sm"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#14B8A6] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gradient-to-br from-[#0a1a1d] via-[#0d2628] to-[#0a1a1d] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white py-2 hover:text-[#14B8A6] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-3">
                <Button
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Partner with Us
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
