import React from 'react';

// Import all section components
import Hero from '../components/home/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import VisualProof from '../components/visual-proof/VisualProof';
import Contact from '../components/contact/Contact';

/**
 * HOME PAGE COMPONENT
 * Purpose: Main landing page with all portfolio sections
 * Structure: Sequential sections with smooth scroll navigation
 * Features: Full portfolio showcase in single-page layout
 */
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section - Main landing with 3D text and CTA */}
      <Hero />
      
      {/* About Section - Personal introduction and resume download */}
      <About />
      
      {/* Skills Section - Two-column layout with dynamic card */}
      <Skills />
      
      {/* Projects Section - Portfolio showcase with animated cards */}
      <Projects />
      
      {/* Visual Proof Section - Workflow videos and skill demonstration */}
      <VisualProof />
      
      {/* Contact Section - Contact form and information */}
      <Contact />
    </div>
  );
};

export default HomePage;