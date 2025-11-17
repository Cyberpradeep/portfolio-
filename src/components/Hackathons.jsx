import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip, useTheme, Stack } from '@mui/material';
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
                  borderRadius: 4,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(18,18,18,0.95)'
                    : '#ffffff',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255,255,255,0.08)'
                    : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 18px 40px rgba(0,0,0,0.25)',
                }}
              >
                <Box
                  sx={{
                    height: 6,
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))'
                      : 'linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.05))',
                  }}
                />
                <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                      }}
                    >
                      <EmojiEventsIcon />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>
                        {hack.title}
                      </Typography>
                      <Chip
                        label={hack.date}
                        size="small"
                        sx={{
                          mt: 0.5,
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(0,0,0,0.08)',
                          color: theme.palette.text.secondary,
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                  </Stack>
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
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(0,0,0,0.06)',
                          color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                          borderRadius: '999px',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
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