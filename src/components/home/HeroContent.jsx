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
          className="mb-20 lg:mb-24" // Increased spacing around text
          intensity={8} // Clear, visible tilt effect
          perspective={1000}
          duration={0.6}
        >
          <motion.div
            initial={{ opacity: 0, y: 80, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold text-slate-100 leading-tight">
              {/* Text layers with subtle translateZ for 3D depth illusion */}
              <span
                className="block text-slate-100"
                style={{ transform: 'translateZ(20px)' }}
              >
                Creative
              </span>
              <span
                className="block text-blue-400 my-2"
                style={{ transform: 'translateZ(40px)' }}
              >
                Developer
              </span>
              <span
                className="block text-slate-100"
                style={{ transform: 'translateZ(20px)' }}
              >
                Portfolio
              </span>
            </h1>
          </motion.div>
        </TiltContainer>

        {/* Bottom Action Area - CTA + Social Icons */}
        <div className="space-y-8">
          
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