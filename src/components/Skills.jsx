import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
  Stack,
} from '@mui/material';
import {
  Brush,
  Storage,
  Psychology,
  Build,
  Cloud,
  ElectricBolt,
} from '@mui/icons-material';

const Skills = ({ data }) => {
  const theme = useTheme();
  const learningFocus = ['System Design', 'Prompt Engineering', 'DevOps', 'Distributed ML', 'UI Motion'];

  // Define skill categories and icons
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Brush />,
      skills: data.skills?.frontend || [],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    },
    {
      title: 'Backend & Databases',
      icon: <Storage />,
      skills: data.skills?.backend || [],
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    },
    {
      title: 'Machine Learning',
      icon: <Psychology />,
      skills: data.skills?.ml || [],
      gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    },
    {
      title: 'Programming Languages',
      icon: <Build />,
      skills: data.skills?.languages || [],
      gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    },
    {
      title: 'Tools & Platforms',
      icon: <ElectricBolt />,
      skills: data.skills?.tools || [],
      gradient: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
    },
    {
      title: 'Deployment & Cloud',
      icon: <Cloud />,
      skills: data.skills?.deployment || [],
      gradient: 'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            maxWidth: 'lg',
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
                  background: theme.palette.mode === 'dark' ? 'rgba(20,20,20,0.95)' : '#ffffff',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                  p: 0,
                }}
              >
                <Box
                  sx={{
                    height: 6,
                    background: category.gradient,
                  }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'flex-start' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: category.gradient,
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
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          px: 2,
                          py: 0.5,
                          borderRadius: 999,
                          border: 'none',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                          letterSpacing: 0.5,
                          transition: 'all 0.2s',
                          '&:hover': {
                            background: theme.palette.primary.main,
                            color: '#fff',
                            transform: 'translateY(-2px)',
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
        <Box sx={{ mt: 8 }}>
          <Card
            sx={{
              p: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))'
                : 'linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.01))',
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255,255,255,0.15)'
                : '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
              <Box flex={1} textAlign="left">
                <Typography variant="overline" sx={{ letterSpacing: 2, color: theme.palette.text.secondary }}>
                  Continuous Learning
                </Typography>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                  Always experimenting & improving
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Weekly build logs, reading sprints, and mini-labs help me stay sharp across system design,
                  ML research, and developer experience. I love translating that curiosity into better
                  experiences for users and collaborators.
                </Typography>
              </Box>
              <Box
                flex={1}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  justifyContent: { xs: 'flex-start', md: 'flex-end' },
                }}
              >
                {learningFocus.map((topic) => (
                  <Chip
                    key={topic}
                    label={topic}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 999,
                      fontWeight: 600,
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.12)'
                        : 'rgba(0,0,0,0.08)',
                    }}
                  />
                ))}
              </Box>
            </Stack>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Skills; 