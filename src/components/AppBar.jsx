import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Email,
  GitHub,
  LinkedIn,
  Code,
  Phone,
} from '@mui/icons-material';

const navLinks = [
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
];

const AppBar = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const showNavNumbers = useMediaQuery(theme.breakpoints.up('lg'));

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: <GitHub />, href: 'https://github.com/Cyberpradeep', label: 'GitHub' },
    { icon: <LinkedIn />, href: 'https://www.linkedin.com/in/pradeepselladurai', label: 'LinkedIn' },
    { icon: <Code />, href: 'https://leetcode.com/u/pradeepcy/', label: 'LeetCode' },
  ];

  return (
    <MuiAppBar
      position="fixed"
      elevation={0}
      sx={{
        top: { xs: 12, md: 20 },
        left: { xs: 12, md: '50%' },
        transform: { xs: 'none', md: 'translateX(-50%)' },
        width: { xs: 'calc(100% - 24px)', md: 'min(1100px, calc(100% - 64px))' },
        borderRadius: 999,
        background: isDarkMode
          ? 'linear-gradient(135deg, rgba(15,15,15,0.92), rgba(45,45,45,0.85))'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,240,0.85))',
        backdropFilter: 'blur(24px)',
        border: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
        boxShadow: isDarkMode
          ? '0 20px 60px rgba(0,0,0,0.65)'
          : '0 20px 45px rgba(0,0,0,0.15)',
        px: { xs: 1.5, md: 3 },
        zIndex: 1500,
      }}
    >
      <Toolbar sx={{ minHeight: 72, px: 0, display: 'flex', alignItems: 'center' }}>
        {/* Logo/Name */}
        <Box sx={{ flexShrink: 0, minWidth: 160 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 800,
              letterSpacing: 1.5,
              background: isDarkMode
                ? 'linear-gradient(135deg, #fff 0%, #bbb 100%)'
                : 'linear-gradient(135deg, #232323 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: isDarkMode
                ? '0 0 24px rgba(255,255,255,0.10)'
                : '0 0 24px rgba(0,0,0,0.10)',
              fontSize: { xs: '1.05rem', sm: '1.35rem', md: '1.55rem' },
              pl: 1,
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('home')}
          >
            Pradeep Selladurai
          </Typography>
        </Box>

        {/* Center navigation */}
        {!isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 0.8,
              minWidth: 0,
              flexWrap: 'wrap',
            }}
          >
            {navLinks.map((link, idx) => (
              <Button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  color: isDarkMode ? '#e9e9e9' : '#1a1a1a',
                  px: 2,
                  position: 'relative',
                  opacity: 0.85,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    opacity: 1,
                    color: isDarkMode ? '#fff' : '#000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -6,
                    left: '50%',
                    width: 0,
                    height: 3,
                    borderRadius: 999,
                    background: isDarkMode
                      ? 'linear-gradient(90deg, #f6d365, #fda085)'
                      : 'linear-gradient(90deg, #232323, #555)',
                    transition: 'width 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '70%',
                  },
                }}
              >
                {showNavNumbers && (
                  <Box
                    component="span"
                    sx={{
                      fontSize: '0.75rem',
                      opacity: 0.6,
                      mr: 1,
                    }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </Box>
                )}
                {link.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right side controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, flexShrink: 0 }}>
          {/* Social Links */}
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              sx={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                color: isDarkMode ? '#e0e0e0' : '#232323',
                border: isDarkMode ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.10)',
                boxShadow: isDarkMode ? '0 2px 8px 0 #2228' : '0 2px 8px 0 #bbb4',
                mx: 0.5,
                transition: 'all 0.2s',
                '&:hover': {
                  background: isDarkMode ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.12)',
                  color: isDarkMode ? '#232323' : '#fff',
                  transform: 'translateY(-2px) scale(1.08)',
                  boxShadow: isDarkMode ? '0 4px 16px rgba(255,255,255,0.10)' : '0 4px 16px rgba(0,0,0,0.10)',
                },
              }}
            >
              {link.icon}
            </IconButton>
          ))}

          {/* Contact Button */}
          <IconButton
            href="mailto:pradeepnaveen930@gmail.com"
            title="Email"
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
              color: isDarkMode ? '#e0e0e0' : '#232323',
              border: isDarkMode ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.10)',
              boxShadow: isDarkMode ? '0 2px 8px 0 #2228' : '0 2px 8px 0 #bbb4',
              mx: 0.5,
              transition: 'all 0.2s',
              '&:hover': {
                background: isDarkMode ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.12)',
                color: isDarkMode ? '#232323' : '#fff',
                transform: 'translateY(-2px) scale(1.08)',
                boxShadow: isDarkMode ? '0 4px 16px rgba(255,255,255,0.10)' : '0 4px 16px rgba(0,0,0,0.10)',
              },
            }}
          >
            <Email />
          </IconButton>
          <IconButton
            href="tel:+917708468270"
            title="Phone"
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: isDarkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
              color: isDarkMode ? '#e0e0e0' : '#232323',
              border: isDarkMode ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(0,0,0,0.10)',
              boxShadow: isDarkMode ? '0 2px 8px 0 #2228' : '0 2px 8px 0 #bbb4',
              mx: 0.5,
              transition: 'all 0.2s',
              '&:hover': {
                background: isDarkMode ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.12)',
                color: isDarkMode ? '#232323' : '#fff',
                transform: 'translateY(-2px) scale(1.08)',
                boxShadow: isDarkMode ? '0 4px 16px rgba(255,255,255,0.10)' : '0 4px 16px rgba(0,0,0,0.10)',
              },
            }}
          >
            <Phone />
          </IconButton>

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: isDarkMode ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)',
              color: isDarkMode ? '#fff' : '#232323',
              border: isDarkMode ? '1.5px solid rgba(255,255,255,0.15)' : '1.5px solid rgba(0,0,0,0.13)',
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                background: isDarkMode ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.13)',
                color: isDarkMode ? '#232323' : '#fff',
                transform: 'translateY(-2px) scale(1.10)',
                boxShadow: isDarkMode ? '0 4px 16px rgba(255,255,255,0.10)' : '0 4px 16px rgba(0,0,0,0.10)',
              },
            }}
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;