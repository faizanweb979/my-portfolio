import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CtaButton from '../common/CtaButton';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * ABOUT SECTION COMPONENT
 * Purpose: Personal introduction with scroll-based text reveal
 * Animation: GSAP ScrollTrigger for smooth text animations
 * Features: Clean typography, resume download CTA
 */
const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const title = titleRef.current;

    // Title reveal animation on scroll
    gsap.fromTo(title, 
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Text reveal animation - staggered paragraphs
    const paragraphs = text.querySelectorAll('p');
    gsap.fromTo(paragraphs,
      {
        opacity: 0,
        y: 30,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Handle resume download
  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume/your-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Your_Name_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20 bg-primary"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2 
          ref={titleRef}
          className="text-5xl lg:text-6xl font-bold text-slate-100 mb-12"
        >
          About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* About Text Content */}
        <div ref={textRef} className="space-y-6 text-lg lg:text-xl text-slate-300 leading-relaxed mb-12">
          <p>
            I'm a passionate full-stack developer with a love for creating 
            beautiful, functional, and user-centered digital experiences. 
            With expertise in modern web technologies, I bring ideas to life 
            through clean code and thoughtful design.
          </p>
          
          <p>
            My journey in development started with curiosity and has evolved 
            into a deep appreciation for the craft of building software that 
            makes a difference. I specialize in React, Node.js, and modern 
            web frameworks, always staying current with industry trends.
          </p>
          
          <p>
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open-source projects, or sharing knowledge with 
            the developer community. I believe in continuous learning and 
            the power of collaboration to solve complex problems.
          </p>
          
          <p>
            I'm currently seeking new opportunities to work with innovative 
            teams and contribute to projects that challenge me to grow as 
            a developer and make a positive impact.
          </p>
        </div>

        {/* Resume Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CtaButton 
            text="Download Resume"
            onClick={handleResumeDownload}
            variant="secondary"
          />
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;