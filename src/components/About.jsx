import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Code,
  Storage,
  Psychology,
  Build,
} from '@mui/icons-material';

const About = ({ data }) => {
  const theme = useTheme();

  const expertiseAreas = [
    {
      icon: <Code />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Material-UI, and modern web technologies',
      skills: data.skills?.frontend || ['React', 'TypeScript', 'Material-UI', 'JavaScript'],
    },
    {
      icon: <Storage />,
      title: 'Backend Development',
      description: 'Node.js, Express, MongoDB, and RESTful API design',
      skills: data.skills?.backend || ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    },
    {
      icon: <Psychology />,
      title: 'Machine Learning',
      description: 'Python, TensorFlow, scikit-learn, and data analysis',
      skills: data.skills?.ml || ['Python', 'TensorFlow', 'scikit-learn', 'Pandas'],
    },
    {
      icon: <Build />,
      title: 'Tools & DevOps',
      description: 'Git, Docker, AWS, and CI/CD pipelines',
      skills: data.skills?.tools || ['Git', 'Docker', 'AWS', 'CI/CD'],
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        px: 3,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' 
          : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: 'lg', mx: 'auto', width: '100%' }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)'
                : 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: theme.palette.mode === 'dark'
                ? '0 0 30px rgba(255, 255, 255, 0.3)'
                : '0 0 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: theme.palette.mode === 'dark'
                ? '0 0 10px rgba(255, 255, 255, 0.1)'
                : '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {data.about?.intro || "I'm a passionate full-stack developer and machine learning enthusiast with a strong foundation in modern web technologies. I love building scalable applications and exploring the fascinating world of AI/ML."}
          </Typography>
        </Box>

        {/* Expertise Areas Grid - 2x2 Layout */}
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 'md', mx: 'auto' }}>
          {expertiseAreas.map((area, index) => (
            <Grid item xs={12} md={6} key={area.title}>
              <Card
                sx={{
                  height: '100%',
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(26, 26, 26, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(255, 255, 255, 0.05), 0 0 20px rgba(255, 255, 255, 0.1)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 16px 48px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.15)'
                      : '0 16px 48px rgba(0, 0, 0, 0.15)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Icon */}
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      mb: 2,
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #404040 0%, #666666 100%)'
                        : 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)',
                      color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff',
                      fontSize: '1.5rem',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 4px 20px rgba(255, 255, 255, 0.2)'
                        : '0 4px 20px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {area.icon}
                  </Avatar>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                      textShadow: theme.palette.mode === 'dark'
                        ? '0 0 10px rgba(255, 255, 255, 0.2)'
                        : '0 0 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {area.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040',
                      lineHeight: 1.6,
                      flex: 1,
                    }}
                  >
                    {area.description}
                  </Typography>

                  {/* Skills */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                    {area.skills.slice(0, 3).map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)',
                          color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                          border: theme.palette.mode === 'dark'
                            ? '1px solid rgba(255, 255, 255, 0.2)'
                            : '1px solid rgba(0, 0, 0, 0.2)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark'
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(0, 0, 0, 0.2)',
                            boxShadow: theme.palette.mode === 'dark'
                              ? '0 0 10px rgba(255, 255, 255, 0.3)'
                              : '0 0 10px rgba(0, 0, 0, 0.3)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        {data.about?.additional && (
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                textShadow: theme.palette.mode === 'dark'
                  ? '0 0 10px rgba(255, 255, 255, 0.1)'
                  : '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              {data.about.additional}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default About; 