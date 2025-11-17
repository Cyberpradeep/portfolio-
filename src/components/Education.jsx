import React from 'react';
import { Box, Typography, Card, CardContent, Grid, useTheme, Stack, Chip } from '@mui/material';
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
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 5,
                  background: theme.palette.mode === 'dark'
                    ? 'radial-gradient(circle at top, rgba(255,255,255,0.06), rgba(15,15,15,0.95))'
                    : 'radial-gradient(circle at top, rgba(0,0,0,0.08), #ffffff)',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255,255,255,0.08)'
                    : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" justifyContent="space-between">
                    <Box sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
                    }}>
                      <SchoolIcon sx={{ fontSize: 36, color: '#000' }} />
                    </Box>
                    <Box textAlign={{ xs: 'center', md: 'left' }} flex={1}>
                      <Typography variant="overline" sx={{ letterSpacing: 2, color: theme.palette.text.secondary }}>
                        Undergrad Program
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.mode === 'dark' ? '#fff' : '#111', mb: 1 }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        {edu.college}
                      </Typography>
                    </Box>
                    <Chip
                      label={edu.year}
                      sx={{
                        borderRadius: 999,
                        fontWeight: 600,
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.12)'
                          : 'rgba(0,0,0,0.08)',
                      }}
                    />
                  </Stack>
                  <Box sx={{ mt: 4, pl: { xs: 1, md: 3 }, borderLeft: theme.palette.mode === 'dark' ? '2px solid rgba(255,255,255,0.1)' : '2px solid rgba(0,0,0,0.1)' }}>
                    {edu.highlights.map((h, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        sx={{
                          color: theme.palette.mode === 'dark' ? '#dcdcdc' : '#333',
                          mb: 1.5,
                          position: 'relative',
                        }}
                      >
                        {h}
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