import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import GitHub from './pages/GitHubb';
import CosmicBackground from './components/CosmicBackground';
import ContactModal from './components/ContactModal';
import ConstellationNavigation from './components/ConstellationNavigation';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Cosmic Background */}
        <CosmicBackground />
        
        {/* Constellation Navigation */}
        <ConstellationNavigation />

        {/* Contact Modal */}
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />

        <Routes>
          <Route 
            path="/" 
            element={<Home openContact={() => setIsContactOpen(true)} />} 
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/github" element={<GitHub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;