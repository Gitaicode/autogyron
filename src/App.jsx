import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ProjectInfo from './components/ProjectInfo';
import ArtSection from './components/ArtSection';
import FacadeSection from './components/FacadeSection';
import ConstructionSection from './components/ConstructionSection';
import TeamSection from './components/TeamSection';
import LightingSection from './components/LightingSection';

function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectInfo />
      <FacadeSection />
      <TeamSection />
      <ConstructionSection />
      <ArtSection />
      <LightingSection />
    </main>
  );
}

export default App; 