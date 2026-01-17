import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bettamansion-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Our Fish", href: "#fish" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (name: string, href: string) => {
    setActiveLink(name);
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logo}
              alt="Beta Mansion"
              className="h-12 w-auto object-contain"
            />
            <span className="font-serif text-xl font-semibold text-foreground hidden sm:block">
              Beta Mansion
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleLinkClick(link.name, link.href)}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors ${
                  activeLink === link.name
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="hidden lg:block btn-luxury text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Collection
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 glass rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 p-4 lg:hidden"
          >
            <div className="glass rounded-2xl p-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLinkClick(link.name, link.href)}
                  className={`block w-full text-left py-3 px-4 rounded-xl font-sans font-medium transition-colors ${
                    activeLink === link.name
                      ? "bg-primary/20 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full btn-luxury text-center mt-4"
              >
                Explore Collection
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
