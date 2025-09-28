import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const isJsdom = typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent || '');

    if (!vantaEffect && !isJsdom && vantaRef.current) {
      try {
        setVantaEffect(
          NET({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x404040,
            backgroundColor: 0x000000,
            points: 15.0,
            maxDistance: 25.0,
            spacing: 20.0,
          })
        );
      } catch (error) {
        console.warn('Failed to initialize Vanta background:', error);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Box
      ref={vantaRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Card
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            background: 'rgba(20, 20, 20, 0.12)', // much more transparent
            backdropFilter: 'blur(32px)',
            border: '1.5px solid rgba(255, 255, 255, 0.06)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 40px rgba(255, 255, 255, 0.04)',
            p: { xs: 1.5, md: 3 },
            maxWidth: 520,
            mx: 'auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <CardContent sx={{ textAlign: 'center', color: 'white', p: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <img
                src="/1054.jpg"
                alt="Pradeep Selladurai"
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
                  background: '#222',
                }}
              />
            </Box>
            <Typography
              variant="h1"
              component={motion.h1}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.6rem', md: '2.5rem' }, // reduced
                mb: 1.5,
                background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 32px rgba(255, 255, 255, 0.35), 0 0 60px rgba(255, 255, 255, 0.18)',
                filter: 'drop-shadow(0 0 18px rgba(255, 255, 255, 0.22))',
                letterSpacing: 0.5,
              }}
            >
              Hi, I'm Pradeep Selladurai
            </Typography>
            
            <Typography
              variant="h2"
              component={motion.h2}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.1rem', md: '1.6rem' }, // reduced
                mb: 2,
                color: '#ffffff',
                textShadow: '0 0 18px rgba(255, 255, 255, 0.22), 0 0 40px rgba(255, 255, 255, 0.10)',
                letterSpacing: 0.2,
              }}
            >
              Computer Science & Cybersecurity Undergrad
            </Typography>
            
            <Typography
              variant="body1"
              component={motion.p}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              sx={{
                fontSize: { xs: '0.95rem', md: '1.08rem' }, // reduced
                mb: 3,
                maxWidth: '420px',
                mx: 'auto',
                color: '#f3f3f3',
                lineHeight: 1.6,
                textShadow: '0 0 10px rgba(255, 255, 255, 0.13)',
                fontWeight: 400,
              }}
            >
              Computer Science & Cybersecurity undergrad (graduating 2027) with hands-on experience in Java and full-stack development. Finalist in MSME Ideathon 5.0 with strong foundations in software design, testing, and deployment. Skilled in Google Workspace, Firebase, and ML tools; passionate about building scalable solutions and contributing to collaborative teams.
            </Typography>
            
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a href="/Pradeep%20Selladurai%20--%20Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    background: 'linear-gradient(135deg, #404040 0%, #666666 100%)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #666666 0%, #808080 100%)',
                      boxShadow: '0 12px 40px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  View Resume
                </Button>
              </a>
              <a href="/Pradeep%20Selladurai%20--%20Resume.pdf" download style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 12px 40px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </a>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Hero; 
