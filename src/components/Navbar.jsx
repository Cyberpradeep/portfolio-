import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Link } from 'react-scroll';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Resume', to: 'resume' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const theme = useTheme();
  const { toggleTheme, isDark } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  // Mobile drawer content
  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
          Portfolio
        </Typography>
        <IconButton onClick={handleDrawerToggle} color="primary">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleNavClick}
            sx={{
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                transform: 'translateX(10px)',
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide direction="down" in={true} timeout={800}>
        <AppBar
          position="fixed"
          sx={{
            top: 16,
            left: { xs: 16, md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            width: { xs: 'calc(100% - 32px)', md: 'min(1100px, calc(100% - 64px))' },
            borderRadius: 999,
            background: scrolled
              ? 'rgba(15, 15, 15, 0.92)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,30,30,0.85))',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: scrolled
              ? '0 12px 45px rgba(0,0,0,0.45)'
              : '0 8px 25px rgba(0,0,0,0.25)',
            transition: 'all 0.3s ease',
            zIndex: theme.zIndex.drawer + 2,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
            {/* Logo/Brand */}
            <Fade in={true} timeout={1000}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: isDark ? '0 0 10px rgba(255, 215, 0, 0.3)' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Portfolio
              </Typography>
            </Fade>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navItems.map((item, idx) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      textTransform: 'none',
                      px: 2.5,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -6,
                        left: '50%',
                        width: 0,
                        height: '3px',
                        borderRadius: 999,
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover::after': {
                        width: '70%',
                      },
                      '&:hover': {
                        color: theme.palette.primary.main,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box component="span" sx={{ mr: 1, fontSize: '0.85rem', opacity: 0.6 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </Box>
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Theme Toggle & Mobile Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <IconButton
                onClick={toggleTheme}
                color="primary"
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(180deg) scale(1.1)',
                    boxShadow: isDark
                      ? '0 0 20px rgba(255, 215, 0, 0.4)'
                      : '0 0 15px rgba(184, 134, 11, 0.3)',
                  },
                }}
              >
                {isDark ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              {isMobile && (
                <IconButton
                  color="primary"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            background: theme.palette.background.paper,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar; 