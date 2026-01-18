import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * PROJECT CARD COMPONENT
 * Purpose: Individual project showcase with hover interactions
 * Animation: Glassmorphism overlay, cursor tracking, smooth transitions
 * Features: Tech stack display, external links, detail navigation
 */
const ProjectCard = ({ project, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const navigate = useNavigate();

  // Track mouse position for cursor-aware interactions
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  // Navigate to project detail page
  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  // Handle external link clicks (prevent card navigation)
  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative group cursor-pointer overflow-hidden rounded-2xl
        bg-gradient-to-br from-slate-800/90 to-slate-900/90
        border border-slate-700/50 backdrop-blur-sm
        hover:border-slate-600/50 transition-all duration-500
        ${className}
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Image placeholder - replace with actual project images */}
        <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
          <div className="text-center text-slate-400">
            <div className="w-16 h-16 bg-slate-500 rounded-lg mx-auto mb-2" />
            <p className="text-sm">Project Image</p>
          </div>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold"
          >
            Featured
          </motion.div>
        )}

        {/* Category Tag */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-slate-300 text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span 
              key={tech}
              className="px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs bg-slate-700/50 text-slate-300 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs text-slate-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <motion.button
                onClick={(e) => handleLinkClick(e, project.liveUrl)}
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live Demo</span>
              </motion.button>
            )}
            
            {project.githubUrl && (
              <motion.button
                onClick={(e) => handleLinkClick(e, project.githubUrl)}
                className="flex items-center space-x-1 text-slate-400 hover:text-slate-300 text-xs md:text-sm font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Code</span>
              </motion.button>
            )}
          </div>

          {/* View Details Arrow */}
          <motion.div
            className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Glassmorphism Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 backdrop-blur-[1px] pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
            }}
          />
        )}
      </AnimatePresence>

      {/* 3D Depth Effect */}
      <div className="absolute inset-0 rounded-2xl shadow-inner opacity-20 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;