import React from 'react';
import CosmicLayout from '../components/CosmicLayout';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "TypeScript", level: 75 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "Three.js", level: 70 }
    ]
  }
];

const Skills = () => {
  return (
    <CosmicLayout>
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Technical Constellation
        </h2>
        
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.2, duration: 0.5 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-blue-900/50"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">
              {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-blue-900/50 rounded-full h-2.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.3 }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </CosmicLayout>
  );
};

export default Skills;