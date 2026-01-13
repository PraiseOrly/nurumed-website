import { AnimatePresence, motion } from "framer-motion";
import { HeartPulse, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCTAFooterInView, setIsCTAFooterInView] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect when CTAFooter is in view to maintain header format
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCTAFooterInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const ctaFooterElement = document.getElementById("cta-footer");
    if (ctaFooterElement) {
      observer.observe(ctaFooterElement);
    }

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Conditions", href: "#conditions" },
    { name: "Resources", href: "#resources" },
  ];

  const productsDropdown = [
    { name: "Patients", href: "/patients" },
    { name: "Doctors", href: "#doctors" },
    { name: "Insurers", href: "#insurers" },
    { name: "Pharmacies", href: "#pharmacies" },
  ];

  return (
    <nav
      style={{
        fontFamily: '__LocalPoppinsFont_1100c3, __LocalPoppinsFont_Fallback_1100c3, Poppins, sans-serif',
      }}
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ${
        isScrolled && !isCTAFooterInView
          ? "top-4 w-[95%] max-w-7xl rounded-3xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/10"
          : "top-0 w-full backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          isScrolled ? "px-4 md:px-6 lg:px-10" : "px-4 md:px-6 lg:px-8"
        }`}
      >
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-colors shadow-lg shadow-[#FFC94A]/20 ${
              isScrolled
                ? "bg-[#FFC94A] text-[#1E2A38] group-hover:bg-[#FFD670]"
                : "bg-[#FFC94A] text-[#1E2A38] group-hover:bg-[#FFD670]"
            }`}>
              <HeartPulse size={24} strokeWidth={2.5} />
            </div>
            <span className={`text-2xl font-bold tracking-tight font-heading transition-colors ${
              isScrolled && !isCTAFooterInView ? "text-[#1E2A38]" : "text-white"
            }`}>
              Nuru<span className="text-[#FFC94A]">Med</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors text-sm lg:text-base relative group ${
                  isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-gray-300 hover:text-[#14B8A6]"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button
                className={`font-medium transition-colors text-sm lg:text-base relative group ${
                  isScrolled && !isCTAFooterInView || isProductsDropdownOpen ? "text-[#1E2A38] hover:text-[#007B83]" : "text-gray-300 hover:text-[#14B8A6]"
                }`}
              >
                Products
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 ${
                  isProductsDropdownOpen ? "w-full" : "group-hover:w-full"
                }`}></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProductsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-0 divide-x divide-gray-200">
                      {productsDropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#007B83] hover:bg-gray-50 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant={isScrolled && !isCTAFooterInView ? "primary" : "ghost"}
              size="sm"
              className={isScrolled && !isCTAFooterInView ? "text-white" : ""}
            >
              Partner with Us
            </Button>
            <Button
              variant={isScrolled && !isCTAFooterInView ? "outline" : "ghost"}
              size="sm"
              className={isScrolled && !isCTAFooterInView ? "border-[#1E2A38] text-[#1E2A38] hover:bg-[#1E2A38] hover:text-white" : ""}
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-white hover:text-[#14B8A6]"
            }`}
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
            className="md:hidden bg-[#1E2A38]/90 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium py-2 transition-colors ${
                    isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-white hover:text-[#14B8A6]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Products Dropdown in Mobile */}
              <div className="py-2">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className={`text-lg font-medium flex items-center gap-2 transition-colors ${
                    isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-white hover:text-[#14B8A6]"
                  }`}
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isProductsDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Dropdown Content */}
                <AnimatePresence>
                  {isProductsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-2 grid grid-cols-2 gap-2">
                        {productsDropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center py-3 px-4 text-base font-medium text-gray-900 hover:text-[#007B83] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
                  className={`w-full justify-center ${
                    isScrolled && !isCTAFooterInView ? "border-[#1E2A38] text-[#1E2A38]" : ""
                  }`}
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

