import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, Stack, Chip } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

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
        <Box sx={{ position: 'relative', px: { xs: 0, md: 4 } }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: { xs: 24, md: '50%' },
              width: 2,
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
              transform: { md: 'translateX(-50%)' },
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Stack spacing={4}>
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'flex-start', md: isLeft ? 'flex-end' : 'flex-start' },
                    position: 'relative',
                    pt: 1,
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 0, md: '50%' },
                      transform: { xs: 'none', md: 'translateX(-50%)' },
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                    }}
                  >
                    <WorkOutlineIcon />
                  </Box>
                  <Card
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      ml: { xs: 0, md: isLeft ? 0 : 6 },
                      mr: { xs: 0, md: isLeft ? 6 : 0 },
                      mt: { xs: 0, md: 2 },
                      borderRadius: 4,
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(26, 26, 26, 0.95)'
                        : 'rgba(255, 255, 255, 0.98)',
                      border: theme.palette.mode === 'dark'
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(0, 0, 0, 0.08)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                        <Chip
                          label={exp.period}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: 0.6,
                          }}
                        />
                        <Typography variant="subtitle2" color="text.secondary">
                          {exp.company}
                        </Typography>
                      </Stack>
                      <Typography variant="h5" fontWeight={700} sx={{ mb: 1, color: theme.palette.text.primary }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {exp.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience; 