import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConstellationNavigation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [constellation, setConstellation] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate a random constellation pattern
    const generateConstellation = () => {
      const stars = [];
      for (let i = 0; i < 20; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3
        });
      }
      setConstellation(stars);
    };

    generateConstellation();
  }, []);

  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      color: 'text-blue-400',
      description: 'Your cosmic journey begins'
    },
    { 
      path: '/projects', 
      label: 'Projects', 
      color: 'text-purple-400',
      description: 'Exploring digital galaxies'
    },
    { 
      path: '/skills', 
      label: 'Skills', 
      color: 'text-green-400',
      description: 'Navigational tools of the cosmos'
    },
    { 
      path: '/github', 
      label: 'GitHub', 
      color: 'text-red-400',
      description: 'Open-source universe'
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Constellation Stars */}
      {constellation.map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: star.opacity,
            scale: [1, 1.5, 1],
            transition: { 
              duration: Math.random() * 2 + 1, 
              repeat: Infinity, 
              delay: Math.random()
            }
          }}
          style={{
            position: 'absolute',
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            borderRadius: '50%',
            backgroundColor: 'white'
          }}
        />
      ))}

      {/* Navigation Connections */}
      {navigationItems.map((item, index) => {
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - window.innerWidth * (index + 1) / (navigationItems.length + 1), 2) +
          Math.pow(mousePosition.y - window.innerHeight * 0.8, 2)
        );

        return (
          <Link 
            key={item.path}
            to={item.path}
            className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(index + 1) * (100 / (navigationItems.length + 1))}%`,
              top: '80%'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`
                relative group flex flex-col items-center 
                ${distance < 200 ? 'scale-125' : ''}
              `}
            >
              <div 
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center 
                  ${item.color} bg-white/10 backdrop-blur-sm border border-white/20
                  group-hover:scale-125 transition-transform
                `}
              >
                <span className="text-2xl">
                  {['🏠', '🚀', '🛠️', '💻'][index]}
                </span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: distance < 200 ? 1 : 0, 
                  y: distance < 200 ? 0 : 10 
                }}
                className={`
                  absolute top-full mt-2 text-center 
                  bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2
                  ${item.color} text-sm
                `}
              >
                {item.description}
              </motion.div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default ConstellationNavigation;