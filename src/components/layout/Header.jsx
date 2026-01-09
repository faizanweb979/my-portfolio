import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * HEADER COMPONENT
 * Purpose: Top navigation with hamburger menu
 * Animation: Apple/Vercel inspired smooth interactions
 * Features: Staggered menu links, smooth hover states
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links with smooth scroll to sections
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Visual Proof', href: '#visual-proof' },
    { name: 'Contact', href: '#contact' }
  ];

  // Smooth scroll function for navigation
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      {/* Hamburger Menu Button */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative w-10 h-10 bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-700/50 flex flex-col justify-center items-center space-y-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated hamburger lines */}
        <motion.span
          className="w-5 h-0.5 bg-slate-200 rounded-full"
          animate={{
            rotate: isMenuOpen ? 45 : 0,
            y: isMenuOpen ? 4 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className="w-5 h-0.5 bg-slate-200 rounded-full"
          animate={{
            opacity: isMenuOpen ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="w-5 h-0.5 bg-slate-200 rounded-full"
          animate={{
            rotate: isMenuOpen ? -45 : 0,
            y: isMenuOpen ? -4 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-16 right-0 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 min-w-[200px]"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    x: 8,
                    color: "#60a5fa"
                  }}
                  className="text-slate-300 hover:text-blue-400 text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;