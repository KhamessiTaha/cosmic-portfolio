import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const CosmicLayout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🌍' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/skills', label: 'Skills', icon: '🛠️' },
    { path: '/github', label: 'GitHub', icon: '💻' }
  ];

  return (
    <div className="min-h-screen bg-starry-gradient text-white">
      {/* Starry Background Effect */}
      <div className="star-background">
        {[...Array(200)].map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md z-50">
        <div className="container mx-auto flex justify-center space-x-8 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full 
                transition-all duration-300 
                ${location.pathname === item.path 
                  ? 'bg-blue-600/70 text-white' 
                  : 'hover:bg-blue-500/30 text-gray-300'}
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20 min-h-screen container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default CosmicLayout;