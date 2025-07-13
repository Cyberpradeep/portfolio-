import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import AppBar from './components/AppBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Hackathons from './components/Hackathons';
import Education from './components/Education';
import Certifications from './components/Certifications';
import data from './data';

function AppContent() {
  const { mode, toggleTheme } = useTheme();

  return (
    <>
      <CssBaseline />
      
      {/* App Structure */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Navigation */}
        <AppBar toggleTheme={toggleTheme} isDarkMode={mode === 'dark'} />

        {/* Main Content */}
        <Box component="main">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About data={data} />

          {/* Education Section */}
          <Education data={data} />

          {/* Projects Section */}
          <Projects data={data} />

          {/* Skills Section */}
          <Skills data={data} />

          {/* Experience Section */}
          <Experience data={data} />

          {/* Certifications Section */}
          <Certifications data={data} />

          {/* Hackathon Section */}
          <Hackathons data={data} />

          {/* Contact Section */}
          <Contact data={data} />
        </Box>
      </Box>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
