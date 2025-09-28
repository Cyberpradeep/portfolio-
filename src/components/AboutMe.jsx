import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Paper,
  Fade,
  Slide,
  Grow,
} from '@mui/material';
import {
  School as SchoolIcon,
  Person as PersonIcon,
  Interests as InterestsIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data';

const AboutMe = () => {
  const theme = useTheme();
  const { isDark } = useCustomTheme();
  const { about } = portfolioData;

  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark
            ? 'radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(184, 134, 11, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(218, 165, 32, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Profile Image Section */}
          <Grid item xs={12} md={5}>
            <Fade in={true} timeout={1000}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <Avatar
                  src="/1054.jpg"
                  alt="Profile"
                  sx={{
                    width: 300,
                    height: 300,
                    border: `4px solid ${theme.palette.primary.main}`,
                    boxShadow: isDark
                      ? '0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)'
                      : '0 0 30px rgba(184, 134, 11, 0.2), 0 0 60px rgba(184, 134, 11, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: isDark
                        ? '0 0 40px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.2)'
                        : '0 0 40px rgba(184, 134, 11, 0.3), 0 0 80px rgba(184, 134, 11, 0.2)',
                    },
                  }}
                />
                {/* Floating elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: 15,
                    height: 15,
                    borderRadius: '50%',
                    background: theme.palette.secondary.main,
                    animation: 'float 4s ease-in-out infinite reverse',
                  }}
                />
              </Box>
            </Fade>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={7}>
            <Slide direction="up" in={true} timeout={800}>
              <Box>
                {/* Main Introduction */}
                <Fade in={true} timeout={1200}>
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: isDark ? '0 0 10px rgba(255, 215, 0, 0.3)' : 'none',
                      mb: 3,
                    }}
                  >
                    About Me
                  </Typography>
                </Fade>

                <Grow in={true} timeout={1400}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: theme.palette.text.secondary,
                      mb: 4,
                    }}
                  >
                    {about.intro}
                  </Typography>
                </Grow>

                <Box
                  sx={{
                    display: 'grid',
                    gap: { xs: 3, md: 4 },
                    gridTemplateColumns: {
                      xs: '1fr',
                      md: 'repeat(2, minmax(0, 1fr))',
                    },
                    alignItems: 'stretch',
                  }}
                >
                  <Grow in={true} timeout={1600}>
                    <Card
                      sx={{
                        height: '100%',
                        background: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: isDark
                            ? '0 10px 30px rgba(255, 215, 0, 0.2)'
                            : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <SchoolIcon
                            sx={{
                              color: theme.palette.primary.main,
                              fontSize: 28,
                            }}
                          />
                          <Typography variant="h5" fontWeight={600}>
                            Education
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {about.education.map((edu, index) => (
                            <Box
                              key={index}
                              sx={{
                                p: 2,
                                borderRadius: 2,
                                background: isDark
                                  ? 'rgba(255, 215, 0, 0.05)'
                                  : 'rgba(184, 134, 11, 0.05)',
                                border: `1px solid ${isDark ? 'rgba(255, 215, 0, 0.1)' : 'rgba(184, 134, 11, 0.1)'}`,
                              }}
                            >
                              <Typography variant="h6" fontWeight={600} color="primary">
                                {edu.degree}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {edu.school} • {edu.year}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                GPA: {edu.gpa}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grow>

                  <Grow in={true} timeout={1800}>
                    <Card
                      sx={{
                        height: '100%',
                        background: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: isDark
                            ? '0 10px 30px rgba(255, 215, 0, 0.2)'
                            : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <InterestsIcon
                            sx={{
                              color: theme.palette.primary.main,
                              fontSize: 28,
                            }}
                          />
                          <Typography variant="h5" fontWeight={600}>
                            Interests & Passions
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {about.interests.map((interest, index) => (
                            <Chip
                              key={index}
                              label={interest}
                              variant="filled"
                              sx={{
                                fontWeight: 500,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  transform: 'scale(1.05)',
                                  boxShadow: isDark
                                    ? '0 0 15px rgba(255, 215, 0, 0.3)'
                                    : '0 0 10px rgba(184, 134, 11, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grow>
                </Box>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe; 