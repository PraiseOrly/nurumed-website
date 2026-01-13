import { AnimatePresence, motion } from "framer-motion";
import { Activity, BookOpen, Brain, Briefcase, Cloud, Heart, HeartPulse, HelpCircle, Megaphone, Menu, Newspaper, Pill, Stethoscope, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";

interface ResourceItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCTAFooterInView, setIsCTAFooterInView] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isConditionsDropdownOpen, setIsConditionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

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
    { name: "About", href: "/#hero" },
    { name: "Conditions", href: "#conditions" },
    { name: "Resources", href: "#resources" },
  ];

  const productsDropdown = [
    { name: "Patients", href: "/patients", icon: User },
    { name: "Doctors", href: "/doctors", icon: Stethoscope },
    { name: "Insurers", href: "/insurers", icon: Briefcase },
    { name: "Pharmacies", href: "/pharmacies", icon: Pill },
  ];

  const conditionsDropdown = [
    { name: "Cardiovascular Health", href: "/conditions#cardiovascular-health", icon: Heart },
    { name: "Metabolic Disorders", href: "/conditions#metabolic-disorders", icon: Activity },
    { name: "Respiratory Conditions", href: "/conditions#respiratory-conditions", icon: Cloud },
    { name: "Mental & Neurological Health", href: "/conditions#mental-neurological-health", icon: Brain },
  ];

  const resourcesDropdown = [
    { name: "Patients", href: "/resources/patients", icon: User },
    { name: "Doctors", href: "/resources/doctors", icon: Stethoscope },
    { name: "Partners", href: "/resources/partners", icon: Briefcase },
    { name: "Blogs", href: "/resources/blogs", icon: BookOpen },
    { name: "News", href: "/resources/news", icon: Newspaper },
    { name: "Press", href: "/resources/press", icon: Megaphone },
    { name: "Help Center & FAQs", href: "/resources/help", icon: HelpCircle },
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
            {/* About Link */}
            <a
              href="/#hero"
              className={`font-medium transition-colors text-sm lg:text-base relative group ${
                isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-gray-300 hover:text-[#14B8A6]"
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full"></span>
            </a>

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
                          <item.icon size={16} className="mr-2" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conditions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsConditionsDropdownOpen(true)}
              onMouseLeave={() => setIsConditionsDropdownOpen(false)}
            >
              <button
                className={`font-medium transition-colors text-sm lg:text-base relative group ${
                  isScrolled && !isCTAFooterInView || isConditionsDropdownOpen ? "text-[#1E2A38] hover:text-[#007B83]" : "text-gray-300 hover:text-[#14B8A6]"
                }`}
              >
                Conditions
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 ${
                  isConditionsDropdownOpen ? "w-full" : "group-hover:w-full"
                }`}></span>
              </button>

              {/* Conditions Dropdown Menu */}
              <AnimatePresence>
                {isConditionsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-0 divide-x divide-gray-200">
                      {conditionsDropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#007B83] hover:bg-gray-50 transition-colors"
                        >
                          <item.icon size={16} className="mr-2" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <button
                className={`font-medium transition-colors text-sm lg:text-base relative group ${
                  isScrolled && !isCTAFooterInView || isResourcesDropdownOpen ? "text-[#1E2A38] hover:text-[#007B83]" : "text-gray-300 hover:text-[#14B8A6]"
                }`}
              >
                Resources
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 ${
                  isResourcesDropdownOpen ? "w-full" : "group-hover:w-full"
                }`}></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isResourcesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg border border-gray-100 rounded-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-0 divide-x divide-gray-200">
                      {resourcesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center px-4 py-3 text-sm font-medium text-gray-900 hover:text-[#007B83] hover:bg-gray-50 transition-colors"
                        >
                          <item.icon size={16} className="mr-2" />
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
              {/* About Link */}
              <a
                href="/#hero"
                className={`text-lg font-medium py-2 transition-colors ${
                  isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-white hover:text-[#14B8A6]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>

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
                            <item.icon size={16} className="mr-2" />
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Conditions Dropdown in Mobile */}
              <div className="py-2">
                <button
                  onClick={() => setIsConditionsDropdownOpen(!isConditionsDropdownOpen)}
                  className={`text-lg font-medium flex items-center gap-2 transition-colors ${
                    isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-white hover:text-[#14B8A6]"
                  }`}
                >
                  Conditions
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isConditionsDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Conditions Dropdown Content */}
                <AnimatePresence>
                  {isConditionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-2 flex flex-col gap-1">
                        {conditionsDropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center py-3 px-4 text-base font-medium text-gray-900 hover:text-[#007B83] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown in Mobile */}
              <div className="py-2">
                <button
                  onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                  className={`text-lg font-medium flex items-center gap-2 transition-colors ${
                    isScrolled && !isCTAFooterInView ? "text-[#1E2A38] hover:text-[#007B83]" : "text-white hover:text-[#14B8A6]"
                  }`}
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isResourcesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Resources Dropdown Content */}
                <AnimatePresence>
                  {isResourcesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-2 grid grid-cols-2 gap-2">
                        {resourcesDropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center py-3 px-4 text-base font-medium text-gray-900 hover:text-[#007B83] hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <item.icon size={16} className="mr-2" />
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

