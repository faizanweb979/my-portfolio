import { motion, AnimatePresence } from "framer-motion";

const HoverPreviewModal = ({ project, isVisible, position, onNavigate }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            duration: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="fixed z-50 bg-glass-bg2 backdrop-blur-xl rounded-3xl shadow-2xl border border-glass-border p-12 w-[530px] cursor-pointer"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -100%)'
          }}
          onClick={() => {
            console.log('Modal clicked, project slug:', project.slug); // Debug log
            onNavigate(project.slug);
          }}
        >
          {/* Project Title */}
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary-text mb-6" style={{ fontFamily: 'font2, sans-serif' }}>
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary-text mb-8 leading-relaxed" style={{ fontFamily: 'font1, sans-serif' }}>
            {project.shortDescription}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-3 text-xs md:text-sm lg:text-base xl:text-lg bg-glass-bg border border-glass-border text-primary-text rounded-full font-medium"
                style={{ fontFamily: 'font3, sans-serif' }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-between">
            <span className="text-sm md:text-base lg:text-lg xl:text-xl text-primary-text" style={{ fontFamily: 'font1, sans-serif' }}>
              Click to view details
            </span>
            <div className="flex items-center text-primary-accent text-sm md:text-base lg:text-lg xl:text-xl font-semibold" style={{ fontFamily: 'font3, sans-serif' }}>
              View Case Study
              <svg
                className="w-7 h-7 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverPreviewModal;