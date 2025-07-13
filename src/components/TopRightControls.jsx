import React from 'react';
import { Box, IconButton, Tooltip, Stack, useTheme } from '@mui/material';
import { Brightness4, Brightness7, ContactMail, GitHub, LinkedIn, Code } from '@mui/icons-material';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';
import { portfolioData } from '../data';
import { Link as ScrollLink } from 'react-scroll';
import { scroller } from 'react-scroll';

const TopRightControls = () => {
  const theme = useTheme();
  const { toggleTheme, isDark } = useCustomTheme();
  const social = portfolioData.social;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 20,
        right: 30,
        zIndex: 1301,
        display: 'flex',
        flexDirection: 'row',
        gap: 1.5,
        background: 'rgba(0,0,0,0.2)',
        borderRadius: 4,
        boxShadow: '0 0 20px 2px rgba(255, 215, 0, 0.15)',
        p: 1,
      }}
    >
      <Tooltip title={isDark ? 'Light Mode' : 'Dark Mode'}>
        <IconButton
          onClick={toggleTheme}
          color="primary"
          sx={{
            background: 'rgba(255, 215, 0, 0.08)',
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#000',
            },
          }}
          aria-label="Toggle theme"
        >
          {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
      <Tooltip title="Contact">
        <IconButton
          component="button"
          onClick={() => scroller.scrollTo('contact', { smooth: true, offset: -70, duration: 500 })}
          color="primary"
          sx={{
            background: 'rgba(255, 215, 0, 0.08)',
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#000',
            },
          }}
          aria-label="Contact"
        >
          <ContactMail />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          sx={{
            background: 'rgba(255, 215, 0, 0.08)',
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#000',
            },
          }}
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub">
        <IconButton
          component="a"
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          sx={{
            background: 'rgba(255, 215, 0, 0.08)',
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#000',
            },
          }}
          aria-label="GitHub"
        >
          <GitHub />
        </IconButton>
      </Tooltip>
      <Tooltip title="LeetCode">
        <IconButton
          component="a"
          href={social.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          sx={{
            background: 'rgba(255, 215, 0, 0.08)',
            boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
            '&:hover': {
              background: theme.palette.primary.main,
              color: '#000',
            },
          }}
          aria-label="LeetCode"
        >
          <Code />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default TopRightControls; 