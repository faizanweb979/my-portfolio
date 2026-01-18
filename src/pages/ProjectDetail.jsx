import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CtaButton from '../components/common/CtaButton';
import { projects } from '../data/projects';

/**
 * PROJECT DETAIL PAGE COMPONENT
 * Purpose: Detailed view of individual projects
 * Animation: Smooth page transitions, content reveals
 * Features: Project showcase, tech stack, links, navigation
 */
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Find project from centralized data
    const loadProject = () => {
      const projectData = projects.find(p => p.id === parseInt(id));
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    };

    setTimeout(loadProject, 500); // Simulate API call delay
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
          <CtaButton 
            text="Back to Portfolio"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="px-6 lg:px-12 py-6"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Portfolio</span>
        </button>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{project.duration}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{project.role}</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-100 mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.liveUrl && (
            <CtaButton
              text="View Live Site"
              onClick={() => window.open(project.liveUrl, '_blank')}
            />
          )}
          {project.githubUrl && (
            <CtaButton
              text="View Code"
              onClick={() => window.open(project.githubUrl, '_blank')}
              variant="secondary"
            />
          )}
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50">
            <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="w-24 h-24 bg-slate-500 rounded-2xl mx-auto mb-4" />
                <p>Project Screenshot</p>
                <p className="text-sm text-slate-500">Replace with actual image</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-100 mb-6">Project Overview</h2>
              <div className="prose prose-slate prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-slate-100 mb-6">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 cursor-pointer group relative"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
                        <div className="text-center text-slate-400 z-10">
                          <div className="w-12 h-12 bg-slate-600 rounded-lg mx-auto mb-2" />
                          <p className="text-xs">Screenshot {index + 1}</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="bg-slate-900/80 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-100 mb-8">Challenges & Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-4">Challenges</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Solutions</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-slate-400 text-sm">Duration</span>
                  <p className="text-slate-200 font-medium">{project.duration}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Role</span>
                  <p className="text-slate-200 font-medium">{project.role}</p>
                </div>
                <div>
                  <span className="text-slate-400 text-sm">Category</span>
                  <p className="text-slate-200 font-medium">{project.category}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <CtaButton
            text="View All Projects"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        </motion.div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200 bg-slate-800/50 backdrop-blur-sm rounded-full p-3 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-6xl w-full max-h-[90vh] bg-slate-800 rounded-2xl overflow-hidden border border-slate-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <div className="w-32 h-32 bg-slate-600 rounded-2xl mx-auto mb-4" />
                  <p className="text-lg">Full Size Image</p>
                  <p className="text-sm text-slate-500">Replace with actual image</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;