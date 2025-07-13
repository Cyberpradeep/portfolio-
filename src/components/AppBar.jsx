import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
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

const AppBar = ({ toggleTheme, isDarkMode }) => {
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
        background: isDarkMode
          ? 'rgba(20, 20, 20, 0.85)'
          : 'rgba(245, 245, 245, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: isDarkMode
          ? '1.5px solid rgba(255,255,255,0.08)'
          : '1.5px solid rgba(0,0,0,0.08)',
        boxShadow: isDarkMode
          ? '0 4px 32px 0 rgba(255,255,255,0.04), 0 0 20px rgba(255,255,255,0.08)'
          : '0 4px 32px 0 rgba(0,0,0,0.08)',
        zIndex: 1200,
        minHeight: 80,
        px: { xs: 1, sm: 3 },
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 80, px: { xs: 0, sm: 2 } }}>
        {/* Logo/Name */}
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
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.7rem' },
            pl: 1,
          }}
        >
          Pradeep Selladurai
        </Typography>

        {/* Right side controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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