import React from 'react';
import CosmicLayout from '../components/CosmicLayout';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Cosmic Ray Tracker",
    description: "Machine learning project analyzing cosmic ray particle interactions",
    technologies: ["Python", "TensorFlow", "NumPy"],
    link: "#"
  },
  {
    title: "Exoplanet Discovery Dashboard",
    description: "Interactive visualization of exoplanet data from NASA archives",
    technologies: ["React", "D3.js", "Node.js"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <CosmicLayout>
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Cosmic Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-blue-900/50 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-900/50 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </CosmicLayout>
  );
};

export default Projects;