import React from 'react';
import { Box, Typography, Card, CardContent, Grid, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = ({ data }) => {
  const theme = useTheme();
  const education = data.education || [];

  return (
    <Box
      id="education"
      sx={{
        py: 8,
        px: 3,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        minHeight: '40vh',
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
            Education
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {education.map((edu, idx) => (
            <Grid item xs={12} md={8} key={idx}>
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
                  boxShadow: '0 8px 32px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 16px 48px rgba(255,255,255,0.1), 0 0 30px rgba(255,255,255,0.15)',
                    border: theme.palette.mode === 'dark'
                      ? '1px solid rgba(255,255,255,0.2)'
                      : '1px solid rgba(0,0,0,0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SchoolIcon sx={{ fontSize: 48, color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a', mb: 1 }}>{edu.degree}</Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 1 }}>{edu.college}</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 2 }}>{edu.year}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%', alignItems: 'center', mt: 1 }}>
                    {edu.highlights.map((h, i) => (
                      <Typography key={i} variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', textAlign: 'center', pl: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', m: 0 }}>
                        <span style={{ marginRight: 8, fontWeight: 'bold', fontSize: '1.1em', display: 'inline-block' }}>•</span> {h}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Education; 