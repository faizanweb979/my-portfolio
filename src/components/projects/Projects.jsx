import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

gsap.registerPlugin(ScrollTrigger);

/**
 * PROJECTS SECTION COMPONENT
 * Purpose: Showcase portfolio projects with animated cards
 * Animation: Staggered scroll entrance, hover interactions
 * Features: Project filtering, detailed view navigation
 */
const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const cards = grid.querySelectorAll('.project-card');

    // Staggered entrance animation for project cards
    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotateX: -15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 lg:px-12 bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-4 md:mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in full-stack development, 
            UI/UX design, and modern web technologies. Each project represents a unique 
            challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              className="project-card"
            />
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 md:px-8 md:py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 rounded-xl text-slate-200 text-sm md:text-base font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;