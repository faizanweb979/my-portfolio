import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

/**
 * SKILL CARD COMPONENT
 * Purpose: Dynamic card that updates based on selected skill
 * Animation: Smooth transitions, depth effects, 3D transforms
 * Features: Technology showcase, visual hierarchy
 */
const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animate card content when skill changes with improved timing
    const content = contentRef.current;
    
    // First fade out existing content
    gsap.to(content.children, {
      opacity: 0,
      y: -10,
      scale: 0.98,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        // Then animate in new content
        gsap.fromTo(content.children,
          {
            opacity: 0,
            y: 20,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out"
          }
        );
      }
    });
  }, [skill]);

  return (
    <motion.div
      ref={cardRef}
      layout
      className="relative p-5 md:p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5`} />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
        />
      </div>

      <div ref={contentRef} className="relative z-10">
        {/* Skill Icon and Title */}
        <motion.div 
          className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6"
          layout
        >
          <motion.span 
            className="text-3xl md:text-5xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {skill.icon}
          </motion.span>
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-100"
            layout
          >
            {skill.title}
          </motion.h3>
        </motion.div>

        {/* Description */}
        <motion.p 
          className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
          layout
        >
          {skill.description}
        </motion.p>

        {/* Technologies Grid */}
        <motion.div layout>
          <h4 className="text-slate-200 font-semibold mb-3 md:mb-4 text-base md:text-lg">
            Technologies & Tools
          </h4>
          
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <AnimatePresence mode="wait">
              {skill.technologies.map((tech, index) => (
                <motion.div
                  key={`${skill.title}-${tech}`}
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="group"
                >
                  <div className={`
                    p-2 md:p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10
                    border border-slate-600/30 backdrop-blur-sm
                    hover:border-slate-500/50 transition-all duration-300
                    group-hover:scale-105 group-hover:shadow-lg
                  `}>
                    <span className="text-slate-200 font-medium text-xs md:text-sm">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Skill Level Indicator */}
        <motion.div 
          className="mt-6 md:mt-8 p-3 md:p-4 bg-slate-800/50 rounded-xl border border-slate-700/30"
          layout
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-300 text-xs md:text-sm font-medium">Proficiency</span>
            <span className="text-blue-400 text-xs md:text-sm font-semibold">Expert</span>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </motion.div>
      </div>

      {/* 3D Depth Effect */}
      <div className="absolute inset-0 rounded-3xl shadow-inner opacity-20 pointer-events-none" />
    </motion.div>
  );
};

export default SkillCard;