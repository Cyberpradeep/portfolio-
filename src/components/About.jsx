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
  Stack,
  Divider,
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

  const spotlight = [
    'Building production-ready MERN apps with cohesive design systems.',
    'Iterating on ML prototypes that support campus and MSME use cases.',
    'Championing secure-by-default flows, from auth to deployment.',
  ];

  const quickStats = [
    { label: 'Years shipping projects', value: '1.5 yrs' },
    { label: 'Hackathon recognitions', value: `${data.hackathons?.length || 0}` },
    { label: 'Internships & programs', value: '2' },
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

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mb: 6, maxWidth: 'lg', mx: 'auto' }}
        >
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                height: '100%',
                p: 3,
                background: theme.palette.mode === 'dark'
                  ? 'rgba(20,20,20,0.92)'
                  : 'rgba(255,255,255,0.95)',
                border: theme.palette.mode === 'dark'
                  ? '1px solid rgba(255,255,255,0.08)'
                  : '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 25px 45px rgba(0,0,0,0.25)',
              }}
            >
              <Typography variant="overline" sx={{ letterSpacing: 2, color: theme.palette.text.secondary }}>
                Spotlight
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                Turning ideas into reliable products
              </Typography>
              <Stack spacing={1.5}>
                {spotlight.map((point) => (
                  <Box key={point} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        mt: 0.9,
                      }}
                    />
                    <Typography variant="body1" color="text.secondary">
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,215,0,0.03))'
                  : 'linear-gradient(135deg, rgba(184,134,11,0.12), rgba(184,134,11,0.03))',
                border: theme.palette.mode === 'dark'
                  ? '1px solid rgba(255,215,0,0.3)'
                  : '1px solid rgba(184,134,11,0.3)',
              }}
            >
              <Typography variant="overline" sx={{ letterSpacing: 2, color: theme.palette.text.secondary }}>
                Quick snapshot
              </Typography>
              <Stack spacing={2}>
                {quickStats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography variant="h4" fontWeight={700}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Divider sx={{ my: 2, opacity: 0.3 }} />
              <Typography variant="body2" color="text.secondary">
                Currently collaborating with student clubs and early-stage teams to ship useful tools faster.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* (Removed skills grid per request) */}

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