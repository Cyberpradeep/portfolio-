import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Divider, Drawer, useTheme, useMediaQuery, Tooltip, Stack, Avatar, Typography } from '@mui/material';
import { Home, Info, Work, School, Build, Description, ContactMail, Menu, GitHub, LinkedIn, Code } from '@mui/icons-material';
import { portfolioData } from '../data';
import { scroller } from 'react-scroll';

const navLinks = [
  // { label: 'Home', to: 'home', icon: <Home /> },
  { label: 'About', to: 'about', icon: <Info /> },
  { label: 'Projects', to: 'projects', icon: <Build /> },
  { label: 'Skills', to: 'skills', icon: <School /> },
  { label: 'Experience', to: 'experience', icon: <Work /> },
  { label: 'Resume', to: 'resume', icon: <Description /> },
  { label: 'Contact', to: 'contact', icon: <ContactMail /> },
];

const socialLinks = [
  { icon: <GitHub />, url: portfolioData.social.github, label: 'GitHub' },
  { icon: <LinkedIn />, url: portfolioData.social.linkedin, label: 'LinkedIn' },
  { icon: <Code />, url: portfolioData.social.leetcode, label: 'LeetCode' },
];

const SidebarContent = ({ isMobile, setOpen }) => {
  const theme = useTheme();
  const { name } = portfolioData;
  return (
    <Box
      sx={{
        height: '100vh',
        minHeight: '100vh',
        width: 160,
        minWidth: 160,
        maxWidth: 160,
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.background.paper,
        borderRight: `2px solid ${theme.palette.primary.main}`,
        boxShadow: '0 0 30px 0 rgba(255, 215, 0, 0.15)',
        alignItems: 'center',
        position: 'relative',
        p: 0,
        m: 0,
        zIndex: 1300,
      }}
    >
      {/* Profile Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, mb: 3, width: '100%' }}>
        <Avatar
          src="/profile.jpg"
          alt="Profile"
          sx={{
            width: 64,
            height: 64,
            border: `3px solid ${theme.palette.primary.main}`,
            boxShadow: '0 0 16px 4px rgba(255, 215, 0, 0.18)',
            mb: 1,
          }}
        />
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            color: theme.palette.primary.main,
            textShadow: '0 0 8px rgba(255, 215, 0, 0.18)',
            letterSpacing: 1,
            textAlign: 'center',
            fontSize: { xs: '1.1rem', md: '1.2rem' },
            width: '100%',
          }}
        >
          {name}
        </Typography>
      </Box>
      {/* Nav Section */}
      <Box sx={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <List sx={{ width: '100%' }}>
          {navLinks.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1, width: '100%' }}>
              <ListItemButton
                component="button"
                onClick={() => {
                  scroller.scrollTo(item.to, {
                    smooth: true,
                    offset: -70,
                    duration: 500,
                  });
                  if (isMobile) setOpen(false);
                }}
                sx={{
                  borderRadius: 2,
                  justifyContent: 'flex-start',
                  color: theme.palette.text.primary,
                  px: 2,
                  width: '100%',
                  '&:hover, &.Mui-selected': {
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}22, transparent)`,
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <Tooltip title={item.label} placement="right">
                  <ListItemIcon sx={{ minWidth: 0, color: 'inherit', mr: 2 }}>{item.icon}</ListItemIcon>
                </Tooltip>
                {!isMobile && (
                  <ListItemText primary={item.label} sx={{ ml: 1 }} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Socials at the very bottom */}
      <Box sx={{ width: '100%', mt: 'auto', mb: 0, pb: 2 }}>
        <Divider sx={{ mb: 1, background: theme.palette.primary.main, opacity: 0.3 }} />
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ px: 2 }}>
          {socialLinks.map((item) => (
            <Tooltip title={item.label} key={item.label} placement="top">
              <IconButton
                component="a"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.main,
                  background: 'rgba(255, 215, 0, 0.08)',
                  boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
                  m: 0.5,
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: '#000',
                  },
                }}
                aria-label={item.label}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: 'fixed',
              top: 16,
              left: 16,
              zIndex: 1300,
              color: theme.palette.primary.main,
              background: 'rgba(255, 215, 0, 0.08)',
              boxShadow: '0 0 10px 2px rgba(255, 215, 0, 0.15)',
            }}
            aria-label="Open sidebar"
          >
            <Menu />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': {
                width: 260,
                height: '100vh',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: theme.palette.background.paper,
                borderRight: `2px solid ${theme.palette.primary.main}`,
                boxShadow: '0 0 30px 0 rgba(255, 215, 0, 0.15)',
                p: 0,
                m: 0,
                zIndex: 1300,
              },
            }}
          >
            <SidebarContent isMobile={true} setOpen={setOpen} />
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            minHeight: '100vh',
            width: 160,
            minWidth: 160,
            maxWidth: 160,
            zIndex: 1300,
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.background.paper,
            borderRight: `2px solid ${theme.palette.primary.main}`,
            boxShadow: '0 0 30px 0 rgba(255, 215, 0, 0.15)',
            alignItems: 'center',
            pt: 0,
            pb: 0,
            m: 0,
          }}
        >
          <SidebarContent isMobile={false} setOpen={setOpen} />
        </Box>
      )}
    </>
  );
};

export default Sidebar; 