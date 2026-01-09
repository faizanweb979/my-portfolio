import React from 'react';
import { motion } from 'framer-motion';

/**
 * CTA BUTTON COMPONENT
 * Purpose: Reusable call-to-action button with 3D press animation
 * Animation: Hover lift, glow effect, smooth scale
 * Usage: Primary actions throughout the portfolio
 */
const CtaButton = ({ 
  text, 
  onClick, 
  variant = 'primary',
  className = '',
  disabled = false 
}) => {
  
  // Button variants for different use cases
  const variants = {
    primary: {
      bg: 'bg-gradient-to-r from-blue-600 to-blue-700',
      hover: 'hover:from-blue-500 hover:to-blue-600',
      text: 'text-white',
      border: 'border-blue-500/30',
      glow: 'shadow-blue-500/25'
    },
    secondary: {
      bg: 'bg-slate-800',
      hover: 'hover:bg-slate-700',
      text: 'text-slate-200',
      border: 'border-slate-600/50',
      glow: 'shadow-slate-500/25'
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-8 py-4 rounded-xl font-semibold text-lg
        ${currentVariant.bg} ${currentVariant.hover} ${currentVariant.text}
        border ${currentVariant.border}
        shadow-lg ${currentVariant.glow}
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      // 3D press animation on tap
      whileTap={{ 
        scale: 0.95,
        y: 2,
        transition: { duration: 0.1 }
      }}
      // Hover lift effect
      whileHover={{ 
        scale: 1.05,
        y: -2,
        boxShadow: `0 20px 40px ${currentVariant.glow.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 'rgba(100, 116, 139, 0.3)'}`,
        transition: { duration: 0.2 }
      }}
      // Initial animation when component mounts
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Button glow effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/5 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button text */}
      <span className="relative z-10">{text}</span>
      
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 rounded-xl shadow-inner opacity-20" />
    </motion.button>
  );
};

export default CtaButton;