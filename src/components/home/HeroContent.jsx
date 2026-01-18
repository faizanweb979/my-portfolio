import { motion } from 'framer-motion';
import CtaButton from '../common/CtaButton';
import SocialIcons from '../common/SocialIcons';
import TiltContainer from '../common/TiltContainer';

/**
 * HERO CONTENT COMPONENT
 * Purpose: Content layer that floats above unified background
 * Structure: Text, CTA, and social icons with proper spacing hierarchy
 * Layout: Optimized vertical spacing and responsive typography
 */
const HeroContent = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 lg:px-12 py-16">
      
      {/* Content Container - Improved spacing hierarchy */}
      <div className="max-w-3xl">
        
        {/* 3D Text Container - Single parent handles all tilt effects */}
        <TiltContainer
          className="mb-8 md:mb-12 lg:mb-16" // Adjusted spacing for description
          intensity={8} // Subtle tilt effect
          perspective={1000}
          duration={0.5}
        >
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Greeting */}
            <p className="text-lg md:text-xl lg:text-2xl text-slate-400 mb-2 md:mb-4">
              Hi, I'm
            </p>
            
            <h1 className="text-lg md:text-5xl lg:text-6xl xl:text-6xl font-bold text-slate-100 leading-tight mb-4 md:mb-6">
              {/* Text layers with subtle translateZ for 3D depth illusion */}
              <span
                className="block text-slate-100"
                style={{ transform: 'translateZ(20px)' }}
              >
                Faizan Niaz
              </span>
              <span
                className="block text-blue-400 my-1 md:my-2  "
                style={{ transform: 'translateZ(40px)' }}
              >
                A Creative React Developer
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl xl:text-xl text-slate-300 leading-relaxed lg:max-w-xl xl:max-w-xl md:max-w-md max-w-sm">
              I build modern, responsive, and high-performance web applications
              using React, focusing on clean UI, smooth UX, and scalable code.
            </p>
          </motion.div>
        </TiltContainer>

        {/* Bottom Action Area - CTA + Social Icons */}
        <div className="space-y-6 md:space-y-8">
          
          {/* CTA Button - Positioned lower for better hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <CtaButton
              text="Let's Work Together"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </motion.div>

          {/* Social Icons - Aligned with CTA for visual consistency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-start"
          >
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;