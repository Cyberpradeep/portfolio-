import React from 'react';
import { Box, Container, Typography, Button, Fade, Stack } from '@mui/material';
import { Description as DescriptionIcon, Download as DownloadIcon, Launch as LaunchIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data';

const Resume = () => {
  const theme = useTheme();
  const { isDark } = useCustomTheme();
  const { resume } = portfolioData;

  return (
    <Box
      id="resume"
      sx={{
        minHeight: '40vh',
        py: 10,
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
            ? 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.08) 0%, transparent 60%)'
            : 'radial-gradient(circle at 50% 50%, rgba(184, 134, 11, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm">
        <Fade in={true} timeout={1000}>
          <Box
            sx={{
              p: 5,
              borderRadius: 4,
              background: theme.palette.background.paper,
              border: `1.5px solid ${theme.palette.primary.main}`,
              boxShadow: isDark
                ? '0 0 30px 8px rgba(255, 215, 0, 0.10)'
                : '0 0 15px 4px rgba(184, 134, 11, 0.08)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* Floating color effect */}
            <Box
              sx={{
                position: 'absolute',
                top: -18,
                right: -18,
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 80%)`,
                filter: 'blur(2px)',
                zIndex: 1,
                boxShadow: isDark
                  ? '0 0 30px 10px rgba(255, 215, 0, 0.12)'
                  : '0 0 20px 6px rgba(184, 134, 11, 0.08)',
              }}
            />
            <DescriptionIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isDark ? '0 0 8px rgba(255, 215, 0, 0.18)' : 'none',
              }}
            >
              Resume
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Download or view my latest resume. Last updated: <b>{resume.lastUpdated}</b>
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
              <Button
                variant="contained"
                color="primary"
                href={resume.downloadUrl}
                download
                startIcon={<DownloadIcon />}
                sx={{
                  fontWeight: 600,
                  boxShadow: isDark ? '0 0 20px 4px rgba(255, 215, 0, 0.18)' : undefined,
                }}
              >
                Download Resume
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href={resume.viewUrl}
                target="_blank"
                startIcon={<LaunchIcon />}
                sx={{
                  fontWeight: 600,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: '#000',
                  },
                }}
              >
                View Online
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Resume; 