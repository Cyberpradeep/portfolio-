import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Brush,
  Storage,
  Psychology,
  Build,
} from '@mui/icons-material';

const Skills = ({ data }) => {
  const theme = useTheme();

  // Define skill categories and icons
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Brush />,
      skills: data.skills?.web?.filter(skill => [
        'React.js', 'Material UI', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'
      ].includes(skill) || skill.toLowerCase().includes('react') || skill.toLowerCase().includes('material')) || [],
    },
    {
      title: 'Backend Development',
      icon: <Storage />,
      skills: data.skills?.web?.filter(skill => [
        'Node.js', 'Express.js', 'MongoDB', 'MySQL Server', 'RESTful APIs', 'JWT', 'Role-Based Authorization'
      ].includes(skill) || skill.toLowerCase().includes('node') || skill.toLowerCase().includes('express') || skill.toLowerCase().includes('mongo')) || [],
    },
    {
      title: 'Machine Learning',
      icon: <Psychology />,
      skills: data.skills?.ml || [],
    },
    {
      title: 'Programming Languages',
      icon: <Build />,
      skills: data.skills?.languages || [],
    },
    {
      title: 'Tools & Platforms',
      icon: <Build />,
      skills: data.skills?.tools || [],
    },
    {
      title: 'Deployment',
      icon: <Build />,
      skills: data.skills?.deployment || [],
    },
  ];

  return (
    <Box sx={{ py: 8, px: 3, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #000 0%, #232323 100%)' : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto', width: '100%' }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #fff 0%, #bbb 100%)'
                : 'linear-gradient(135deg, #232323 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: theme.palette.mode === 'dark'
                ? '0 0 30px rgba(255,255,255,0.15)'
                : '0 0 30px rgba(0,0,0,0.15)',
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: '600px', mx: 'auto' }}
          >
            A comprehensive overview of my technical skills and tools across various domains.
          </Typography>
        </Box>
        {/* Skills Categories as Cards with Chips */}
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            maxWidth: 'md',
            mx: 'auto',
          }}
        >
          {skillCategories.map((category, index) => (
            <Box key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: theme.palette.mode === 'dark' ? 'rgba(26,26,26,0.95)' : 'rgba(255,255,255,0.95)',
                  border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(255,255,255,0.04), 0 0 20px rgba(255,255,255,0.08)'
                    : '0 8px 32px rgba(0,0,0,0.08)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  p: 0,
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'flex-start' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#232323',
                        mr: 2,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h6" fontWeight="600" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#232323' }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill}
                        sx={{
                          background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                          color: theme.palette.mode === 'dark' ? '#fff' : '#232323',
                          fontWeight: 500,
                          fontSize: '1rem',
                          px: 2,
                          py: 0.5,
                          border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.12)',
                          boxShadow: theme.palette.mode === 'dark' ? '0 0 8px 0 #2228' : '0 0 8px 0 #bbb4',
                          letterSpacing: 0.5,
                          transition: 'all 0.2s',
                          '&:hover': {
                            background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.08)',
                            color: theme.palette.mode === 'dark' ? '#232323' : '#fff',
                            transform: 'scale(1.07)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        {/* Skills Summary */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Card sx={{ p: 4, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(60,60,60,0.08) 100%)' : 'linear-gradient(135deg, rgba(200,200,200,0.05) 0%, rgba(255,255,255,0.05) 100%)' }}>
            <Typography variant="h5" fontWeight="600" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#232323', mb: 2 }}>
              Continuous Learning
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.7 }}>
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies to deliver better solutions.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills; 