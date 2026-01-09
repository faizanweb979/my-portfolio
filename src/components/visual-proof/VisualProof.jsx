import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * VISUAL PROOF SECTION COMPONENT
 * Purpose: Show real proof of skills through workflow videos
 * Why: Provides tangible evidence of coding abilities without UI overload
 * Animation: 3D card containers, scroll reveals, subtle hover depth
 * Content: 1-2 optimized, muted, looped videos of coding/animation workflow
 */
const VisualProof = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  // Video content showcasing development workflow
  const proofItems = [
    {
      id: 1,
      title: "React Development Workflow",
      description: "Watch me build a responsive component from scratch using React, TypeScript, and Tailwind CSS with real-time hot reload.",
      videoSrc: "/videos/react-workflow.mp4", // Replace with actual video
      duration: "2:30",
      skills: ["React", "TypeScript", "Tailwind CSS", "VS Code"]
    },
    {
      id: 2,
      title: "GSAP Animation Implementation",
      description: "See how I create smooth, performant animations using GSAP ScrollTrigger for enhanced user experience.",
      videoSrc: "/videos/gsap-animation.mp4", // Replace with actual video
      duration: "1:45",
      skills: ["GSAP", "ScrollTrigger", "CSS3", "Performance"]
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll('.proof-card');

    // Animate cards on scroll with 3D effect
    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 80,
        rotateX: -20,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
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
      id="visual-proof" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 lg:px-12 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
            Visual <span className="text-blue-400">Proof</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Watch me code in real-time and see 
            the development process behind creating modern, animated web experiences.
          </p>
        </motion.div>

        {/* Proof Cards Grid */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8">
          {proofItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="proof-card group relative"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* 3D Card Container */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
                
                {/* Video Container */}
                <div className="relative aspect-video bg-slate-700 overflow-hidden">
                  {/* Video Placeholder - Replace with actual videos */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
                    <div className="text-center text-slate-400">
                      <motion.div
                        className="w-20 h-20 bg-slate-500 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg className="w-8 h-8 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </motion.div>
                      <p className="text-sm font-medium">Workflow Video</p>
                      <p className="text-xs text-slate-500">{item.duration}</p>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-medium">
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Skills Showcased */}
                  <div>
                    <h4 className="text-slate-300 font-semibold mb-3 text-sm uppercase tracking-wide">
                      Skills Demonstrated
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />

                {/* 3D Depth Shadow */}
                <div className="absolute inset-0 rounded-3xl shadow-inner opacity-20 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why This Section Exists - Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30">
            <h3 className="text-xl font-semibold text-slate-200 mb-3">
              Why Visual Proof Matters
            </h3>
            <p className="text-slate-400 leading-relaxed">
              These videos provide recruiters and clients with tangible evidence of my 
              development process, problem-solving approach, and technical proficiency. 
              Rather than overwhelming the portfolio with excessive content, these carefully 
              selected workflows demonstrate real skills in action.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualProof;