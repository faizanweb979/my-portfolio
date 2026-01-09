import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import BackButton from "../BackButton";
import CtaButton from "../CtaButton";

const ProjectDetail = ({ slug, onClose }) => {
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary-bg text-primary-text flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4" style={{ fontFamily: 'font2, sans-serif' }}>Project Not Found</h1>
          <BackButton onClick={onClose}>
            Back to Projects
          </BackButton>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-screen h-screen bg-primary-bg text-primary-text overflow-auto">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Back Button - Fixed Position */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-8 left-8 z-50"
      >
        <BackButton onClick={onClose}>
          Back to Projects
        </BackButton>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16 min-h-screen">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 bg-gradient-to-r from-primary-text via-primary-accent to-primary-text bg-clip-text text-transparent"
              style={{ fontFamily: 'font4, sans-serif' }}
            >
              {project.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-muted max-w-5xl mx-auto leading-relaxed mb-12"
              style={{ fontFamily: 'font1, sans-serif' }}
            >
              {project.shortDescription}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-8 py-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-glass-bg2 backdrop-blur-sm border border-glass-border text-primary-text rounded-full font-medium hover:scale-105 transition-transform"
                  style={{ fontFamily: 'font3, sans-serif' }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="relative mb-20 group"
          >
            <div className="absolute inset-0 bg-primary-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <img
              src={project.heroImage}
              alt={project.title}
              className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] object-cover rounded-3xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 bg-gradient-to-r from-primary-accent to-primary-text bg-clip-text text-transparent" style={{ fontFamily: 'font2, sans-serif' }}>
                Project Overview
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary-muted leading-relaxed" style={{ fontFamily: 'font3, sans-serif' }}>
                {project.overview}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 bg-gradient-to-r from-primary-accent to-primary-text bg-clip-text text-transparent" style={{ fontFamily: 'font2, sans-serif' }}>
                Key Features
              </h2>
              <div className="space-y-6">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="flex items-center gap-6 p-6 bg-glass-bg backdrop-blur-sm rounded-xl border border-glass-border hover:border-primary-accent transition-colors"
                  >
                    <div className="w-4 h-4 bg-primary-accent rounded-full flex-shrink-0" />
                    <span className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary-muted" style={{ fontFamily: 'font1, sans-serif' }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Screenshots Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-primary-accent to-primary-text bg-clip-text text-transparent" style={{ fontFamily: 'font2, sans-serif' }}>
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[project.thumbnail, project.heroImage].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6 + index * 0.2 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="relative p-12 bg-glass-bg backdrop-blur-sm rounded-3xl border border-glass-border overflow-hidden">
              <div className="absolute inset-0 bg-primary-accent/10 animate-pulse" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 bg-gradient-to-r from-primary-text to-primary-muted bg-clip-text text-transparent" style={{ fontFamily: 'font2, sans-serif' }}>
                  Explore This Project
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary-muted mb-12 max-w-4xl mx-auto" style={{ fontFamily: 'font1, sans-serif' }}>
                  Ready to see this project in action? Check out the live demo or explore the source code.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  {project.liveUrl && (
                    <CtaButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon="🚀"
                    >
                      Live Demo
                    </CtaButton>
                  )}
                  {project.githubUrl && (
                    <CtaButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon="💻"
                    >
                      Source Code
                    </CtaButton>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;