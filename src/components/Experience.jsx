import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';

const Experience = ({ data }) => {
  const theme = useTheme();
  const experiences = data.experience || [];

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        px: 3,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
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
            Work Experience
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, idx) => (
            <Grid item xs={12} md={6} key={idx} display="flex" justifyContent="center">
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(26, 26, 26, 0.9)'
                    : 'rgba(255, 255, 255, 0.9)',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.05), 0 0 20px rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>{exp.title}</Typography>
                  <Typography variant="subtitle1" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 1 }}>{exp.company}</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 2 }}>{exp.period}</Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' }}>{exp.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience; 