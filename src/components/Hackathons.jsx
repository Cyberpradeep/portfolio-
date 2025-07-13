import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, useTheme } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Hackathons = ({ data }) => {
  const theme = useTheme();
  const hackathons = data.hackathons || [];

  return (
    <Box
      id="hackathons"
      sx={{
        py: 8,
        px: 3,
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        minHeight: '60vh',
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
            Hackathon Participation
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {hackathons.map((hack, idx) => (
            <Grid item xs={12} md={6} key={idx}>
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
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmojiEventsIcon sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mr: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>{hack.title}</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 1 }}>
                    {hack.date}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 2, flex: 1 }}>
                    {hack.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {hack.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.1)',
                          color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                          border: theme.palette.mode === 'dark'
                            ? '1px solid rgba(255,255,255,0.2)'
                            : '1px solid rgba(0,0,0,0.2)',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a', fontWeight: 600 }}>
                    {hack.achievement}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Hackathons; 