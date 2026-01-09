/**
 * ANIMATION UTILITIES
 * Purpose: Centralized animation configurations and helpers
 * Usage: Import and use consistent animations across components
 */

// Framer Motion variants for common animations
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
};

// GSAP animation helpers
export const gsapFadeInUp = (element, delay = 0) => {
  return {
    from: {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay,
      ease: "power3.out"
    }
  };
};

export const gsapStaggerUp = (elements, stagger = 0.1) => {
  return {
    from: {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger,
      ease: "power2.out"
    }
  };
};

// Easing functions for consistent motion
export const easings = {
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};

// Animation durations for consistency
export const durations = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8
};

// Hover animation variants
export const hoverLift = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3 }
  }
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
};