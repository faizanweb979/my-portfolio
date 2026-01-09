import { useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

/**
 * HERO SECTION COMPONENT
 * Purpose: Main hero section with unified background architecture
 * Structure: HeroBackground (unified layer) + HeroContent (floating above)
 * Architecture: Clean separation of background and content concerns
 * 
 * Why this structure:
 * - HeroBackground handles all visual background elements as ONE layer
 * - HeroContent floats above with proper z-index layering
 * - Avoids split left/right sections that feel disconnected
 * - Maintains image visibility across all devices
 * - Reusable background component for consistency
 */
const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-primary"
    >
      {/* Unified Background Layer - handles gradient + image blending */}
      <HeroBackground />

      {/* Content Layer - floats above background */}
      <HeroContent />
    </section>
  );
};

export default Hero;