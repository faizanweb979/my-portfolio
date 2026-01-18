import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CtaButton from '../common/CtaButton';

/**
 * ABOUT SECTION COMPONENT - SCROLL-ANIMATED PATH
 * Purpose: Clean scroll-driven content with animated SVG path
 * Animation: Framer Motion scroll progress with path drawing
 * Features: Smooth scroll reveals, flowing SVG path, minimal design
 */
const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Handle resume download
  const handleResumeDownload = () => {
    const resumeUrl = '/resume/my old cv.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative flex min-h-[200vh] w-full flex-col items-center overflow-hidden bg-primary px-6 lg:px-12"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      {/* Header Section */}
      <div className="relative mt-32 mb-20 flex w-full max-w-6xl flex-col items-center justify-center text-center">
        <motion.h1 
          className="relative z-10 text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-slate-100 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="text-blue-400">Me</span>
        </motion.h1>
        
        <motion.p 
          className="relative z-10 max-w-2xl text-xl md:text-2xl font-medium text-slate-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Scroll down to explore my journey
        </motion.p>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl space-y-32 pb-32">
        
        {/* Animated SVG Path - Following Scroll to Button */}
        <AnimatedPath 
          className="absolute left-1/2 -translate-x-1/2 top-[-200px] z-0 pointer-events-none"
          scrollYProgress={scrollYProgress}
        />
        
        {/* Who I Am */}
        <motion.div
          className="relative"
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.25], [0, 1]),
            y: useTransform(scrollYProgress, [0.1, 0.25], [50, 0])
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <i className="ri-user-line text-3xl text-blue-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Who I Am</h2>
          </div>
          
          <div className="space-y-6 text-slate-300 leading-relaxed text-lg md:text-xl max-w-4xl">
            <p>
              I'm a passionate <span className="text-blue-400 font-semibold">Frontend Developer</span> with 
              a love for creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p>
              My journey in development started with curiosity and has evolved into a deep 
              appreciation for the craft of building software that makes a difference. I specialize 
              in <span className="text-blue-400 font-semibold">React, Next.js</span>, and modern web frameworks.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="relative"
          style={{
            opacity: useTransform(scrollYProgress, [0.3, 0.45], [0, 1]),
            y: useTransform(scrollYProgress, [0.3, 0.45], [50, 0])
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <i className="ri-lightbulb-line text-3xl text-cyan-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">What I Do</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Frontend Development */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-2xl text-cyan-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Frontend Development</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg">
                Building modern, interactive user interfaces using React.js, and cutting-edge web technologies.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm text-cyan-400 font-medium">
                  React
                </span>
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400 font-medium">
                  Gsap
                </span>
                <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-400 font-medium">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Responsive Design */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <i className="ri-smartphone-line text-2xl text-purple-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Responsive Design</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg">
                Creating pixel-perfect, mobile-first websites that deliver seamless experiences across all devices.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-sm text-purple-400 font-medium">
                  Tailwind
                </span>
                <span className="px-3 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-lg text-sm text-pink-400 font-medium">
                  CSS3
                </span>
                <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-sm text-indigo-400 font-medium">
                  Flexbox
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="relative"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.65], [0, 1]),
            y: useTransform(scrollYProgress, [0.5, 0.65], [50, 0])
          }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <i className="ri-graduation-cap-line text-3xl text-blue-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Education</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-blue-500/30 max-w-3xl">
            <motion.div 
              className="absolute -left-2.5 top-0 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0.7)',
                  '0 0 0 15px rgba(59, 130, 246, 0)',
                  '0 0 0 0 rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-100 leading-tight">
                Bachelor of Science in Information Technology
              </h3>
              <p className="text-blue-400 font-semibold text-2xl">Punjab University, Lahore</p>
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-5 py-2.5 rounded-xl">
                <i className="ri-calendar-line text-blue-400 text-xl"></i>
                <span className="text-slate-300 font-medium text-lg">2021 - 2025</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg mt-6">
                Specialized in modern frontend development with a strong focus on building 
                responsive, user-friendly, and visually engaging web interfaces using React 
                and contemporary web technologies.

              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative text-center pt-16 flex justify-center"
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.85], [0, 1]),
            y: useTransform(scrollYProgress, [0.7, 0.85], [50, 0])
          }}
        >
          {/* SVG End Point Marker - positioned at button's left center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[180px] -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-20" 
               style={{ opacity: 0 }} 
          />
          
          <CtaButton 
            text="Download Resume"
            onClick={handleResumeDownload}
            variant="secondary"
          />
        </motion.div>

      </div>
    </section>
  );
};

// Animated SVG Path Component - Smooth Drawing Effect
const AnimatedPath = ({ className, scrollYProgress }) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  return (
    <svg
      width="1200"
      height="2200"
      viewBox="0 0 1200 2200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', maxWidth: '1200px', height: 'auto' }}
    >
      <motion.path
        d="M 1000 0 
           C 1000 200, 200 300, 200 500
           C 200 700, 1000 800, 1000 1000
           C 1000 1200, 200 1300, 200 1500
           C 200 1700, 1000 1800, 1000 2000
           C 1000 2100, 700 2150, 420 2200"
        stroke="#3b82f6"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        style={{
          pathLength: pathLength,
          opacity: 0.6,
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
        }}
      />
    </svg>
  );
};

export default About;
