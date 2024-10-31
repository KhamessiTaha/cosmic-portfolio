import React from 'react';
import CosmicLayout from '../components/CosmicLayout';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <CosmicLayout>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Cosmic Explorer
          </h1>
          <p className="text-xl text-gray-300">
            Passionate about unraveling the mysteries of the universe through code and curiosity.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
            >
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="border border-blue-400 hover:bg-blue-500/20 px-6 py-3 rounded-full transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-md aspect-square bg-gradient-to-br from-blue-900 to-purple-900 rounded-full shadow-2xl animate-pulse"></div>
        </motion.div>
      </div>
    </CosmicLayout>
  );
};

export default Home;