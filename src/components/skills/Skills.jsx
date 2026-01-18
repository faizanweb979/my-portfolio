import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * SKILLS SECTION COMPONENT - SKIPPER UI INSPIRED
 * Purpose: Premium hover-expand vertical panels on desktop, accordion on mobile
 * Animation: Smooth cinematic transitions with GPU acceleration
 * Features: Vertical text rotation, fluid expansion, luxury feel
 */
const Skills = () => {
  const sectionRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [expandedSkill, setExpandedSkill] = useState(null);

  // Skills data
  const skills = [
    {
      title: "HTML",
      description: "Semantic markup and modern HTML5 features for building accessible, SEO-friendly web structures.",
      technologies: ["HTML5", "Semantic Tags", "Forms", "Canvas", "Web APIs"],
      icon: "ri-html5-fill",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "CSS",
      description: "Advanced styling techniques including animations, transitions, and modern layout systems.",
      technologies: ["CSS3", "Flexbox", "Grid", "Animations", "Media Queries"],
      icon: "ri-css3-fill",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with consistent design systems.",
      technologies: ["Utilities", "Components", "Responsive", "Dark Mode", "Customization"],
      icon: "ri-tailwind-css-fill",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Bootstrap",
      description: "Popular CSS framework for building responsive, mobile-first websites with pre-built components.",
      technologies: ["Grid System", "Components", "Utilities", "JavaScript", "Responsive"],
      icon: "ri-bootstrap-fill",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "JavaScript",
      description: "Modern ES6+ JavaScript for creating dynamic, interactive web applications and experiences.",
      technologies: ["ES6+", "DOM", "Async/Await", "APIs", "Event Handling"],
      icon: "ri-javascript-fill",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "React",
      description: "Component-based library for building fast, scalable user interfaces with reusable components.",
      technologies: ["Hooks", "Components", "State", "Props", "JSX"],
      icon: "ri-reactjs-fill",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "GSAP",
      description: "Professional-grade animation library for creating smooth, high-performance web animations.",
      technologies: ["Timeline", "ScrollTrigger", "Tweens", "Easing", "Plugins"],
      icon: "ri-flashlight-fill",
      color: "from-green-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Entrance animation for desktop panels
    if (!isMobile && sectionRef.current) {
      const panels = sectionRef.current.querySelectorAll('.skill-panel');
      
      gsap.fromTo(panels,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Handle skill interaction
  const handleSkillClick = (index) => {
    if (isMobile) {
      setExpandedSkill(expandedSkill === index ? null : index);
    }
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-12 md:mb-20"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        {/* Desktop: Vertical Expanding Panels */}
        {!isMobile ? (
          <div className="flex gap-3 h-[600px] w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="skill-panel relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  flex: hoveredSkill === index ? '3' : '1',
                  transition: 'flex 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  willChange: 'flex'
                }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Background with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />
                
                {/* Border glow effect */}
                <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-700 ${
                  hoveredSkill === index 
                    ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' 
                    : 'border-slate-700/30'
                }`} />

                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-center items-center p-6 bg-slate-900/80 backdrop-blur-sm">
                  
                  {/* Collapsed State: Vertical Text */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                    style={{
                      opacity: hoveredSkill === index ? 0 : 1,
                      pointerEvents: hoveredSkill === index ? 'none' : 'auto'
                    }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <i className={`${skill.icon} text-4xl`}></i>
                      <h3 
                        className="text-xl font-bold text-slate-100 whitespace-nowrap"
                        style={{
                          writingMode: 'vertical-rl',
                          textOrientation: 'mixed'
                        }}
                      >
                        {skill.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expanded State: Full Content */}
                  <div 
                    className="absolute inset-0 p-8 flex flex-col justify-center transition-opacity duration-500 overflow-y-auto"
                    style={{
                      opacity: hoveredSkill === index ? 1 : 0,
                      pointerEvents: hoveredSkill === index ? 'auto' : 'none'
                    }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <i className={`${skill.icon} text-5xl`}></i>
                      <h3 className="text-3xl font-bold text-slate-100">
                        {skill.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {skill.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-slate-200 font-semibold mb-4 text-lg">
                        Technologies & Tools
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {skill.technologies.map((tech) => (
                          <div
                            key={tech}
                            className={`tech-item p-3 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10 border border-slate-600/30 backdrop-blur-sm hover:border-slate-500/50 transition-all duration-300`}
                          >
                            <span className="text-slate-200 font-medium text-sm">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-300 text-sm font-medium">Proficiency</span>
                        <span className="text-blue-400 text-sm font-semibold">Expert</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: hoveredSkill === index ? "90%" : 0 }}
                          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Mobile: Accordion Layout */
          <div className="w-full max-w-sm mx-auto space-y-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className={`rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedSkill === index 
                    ? 'bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-900/50 border-slate-700/50'
                }`}
                onClick={() => handleSkillClick(index)}
                whileTap={{ scale: 0.98 }}
              >
                {/* Header */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <i className={`${skill.icon} text-xl`}></i>
                      <h3 className={`font-semibold transition-colors duration-300 text-base ${
                        expandedSkill === index ? 'text-blue-400' : 'text-slate-200'
                      }`}>
                        {skill.title}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedSkill === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-400"
                    >
                      ▼
                    </motion.div>
                  </div>
                  
                  {expandedSkill !== index && (
                    <>
                      <p className="text-slate-400 leading-relaxed mt-2 mb-3 text-sm">
                        {skill.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {skill.technologies.slice(0, 2).map((tech) => (
                          <span 
                            key={tech}
                            className="bg-slate-700/50 text-slate-300 rounded-full px-2 py-0.5 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        <span className="text-slate-500 px-2 py-0.5 text-xs">
                          +{skill.technologies.length - 2} more
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSkill === index ? "auto" : 0,
                    opacity: expandedSkill === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 border-t border-slate-700/30">
                    <div className="pt-4">
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {skill.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-slate-200 font-medium mb-3 text-sm">
                          Technologies & Tools
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {skill.technologies.map((tech) => (
                            <div
                              key={tech}
                              className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 border border-slate-600/30`}
                            >
                              <span className="text-slate-200 font-medium text-xs">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-300 text-xs font-medium">Proficiency</span>
                          <span className="text-blue-400 text-xs font-semibold">Expert</span>
                        </div>
                        <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: expandedSkill === index ? "90%" : 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;