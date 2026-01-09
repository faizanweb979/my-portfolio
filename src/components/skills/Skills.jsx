import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SkillCard from './SkillCard';

gsap.registerPlugin(ScrollTrigger);

/**
 * SKILLS SECTION COMPONENT
 * Purpose: Two-column layout with skills list and dynamic card
 * Animation: Scroll-based content updates, smooth transitions
 * Features: Sticky card that updates based on scroll position
 */
const Skills = () => {
  const sectionRef = useRef(null);
  const skillsListRef = useRef(null);
  const cardRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(0);

  // Skills data with descriptions and tech details
  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and libraries.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      description: "Building scalable server-side applications and RESTful APIs with robust architecture.",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native performance.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"],
      icon: "📱",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DevOps & Cloud",
      description: "Implementing CI/CD pipelines and managing cloud infrastructure for scalable deployments.",
      technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      icon: "☁️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "UI/UX Design",
      description: "Designing user-centered interfaces with focus on usability and accessibility.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      icon: "🎯",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const skillsList = skillsListRef.current;
    const skillItems = skillsList.querySelectorAll('.skill-item');

    // Create ScrollTrigger for each skill item
    // This updates the active skill based on scroll position
    skillItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSkill(index),
        onEnterBack: () => setActiveSkill(index),
      });
    });

    // Animate skills list items on scroll
    gsap.fromTo(skillItems,
      {
        opacity: 0,
        x: -50,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsList,
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
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 lg:px-12 bg-primary"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-20"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Skills List */}
          <div ref={skillsListRef} className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className={`
                  skill-item p-6 rounded-2xl border transition-all duration-500 cursor-pointer
                  ${activeSkill === index 
                    ? 'bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                    : 'bg-slate-900/50 border-slate-700/50 hover:border-slate-600/50'
                  }
                `}
                onClick={() => setActiveSkill(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                    activeSkill === index ? 'text-blue-400' : 'text-slate-200'
                  }`}>
                    {skill.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {skill.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm text-slate-500">
                      +{skill.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Sticky Dynamic Card */}
          <div className="lg:sticky lg:top-20">
            <div ref={cardRef}>
              <SkillCard skill={skills[activeSkill]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;