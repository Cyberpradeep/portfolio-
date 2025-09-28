import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  Send,
  GitHub,
  LinkedIn,
  Code,
} from '@mui/icons-material';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrblzelk'; // User's real Formspree endpoint

const Contact = ({ data }) => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'pradeepnaveen930@gmail.com',
      href: 'mailto:pradeepnaveen930@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 7708468270',
      href: 'tel:+917708468270',
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/pradeepselladurai',
      href: 'https://www.linkedin.com/in/pradeepselladurai',
    },
    {
      icon: <GitHub />,
      title: 'GitHub',
      value: 'github.com/Cyberpradeep',
      href: 'https://github.com/Cyberpradeep',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub />, title: 'GitHub', href: 'https://github.com/Cyberpradeep', color: '#333',
    },
    {
      icon: <LinkedIn />, title: 'LinkedIn', href: 'https://www.linkedin.com/in/pradeepselladurai', color: '#0077B5',
    },
    {
      icon: <Code />, title: 'LeetCode', href: 'https://leetcode.com/u/pradeepcy/', color: '#FFA116',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Message sent! Thank you, I will get back to you soon.',
          severity: 'success',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSnackbar({
          open: true,
          message: result?.error || 'Something went wrong. Please try again later.',
          severity: 'error',
        });
      }
    } catch (err) {
      setSnackbar({
        open: true,
        message: 'Network error. Please try again later.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact"
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
            Contact Me
          </Typography>
        </Box>
        {/* Top: Full-width Message Form */}
        <Box sx={{ mb: 4 }}>
          <Card sx={{ width: '100%', background: theme.palette.mode === 'dark' ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)', border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)', boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1)' : '0 8px 32px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>Send Me a Message</Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gap: { xs: 2, sm: 3 },
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, minmax(0, 1fr))',
                      lg: 'repeat(4, minmax(0, 1fr))',
                    },
                  }}
                >
                  <TextField fullWidth label="Your Name" name="name" value={formData.name} onChange={handleInputChange} required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', '&:hover fieldset': { borderColor: theme.palette.mode === 'dark' ? '#666666' : '#404040' }, '&.Mui-focused fieldset': { borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' } }, '& .MuiInputLabel-root': { color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' } }} />
                  <TextField fullWidth label="Your Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', '&:hover fieldset': { borderColor: theme.palette.mode === 'dark' ? '#666666' : '#404040' }, '&.Mui-focused fieldset': { borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' } }, '& .MuiInputLabel-root': { color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' } }} />
                  <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleInputChange} required variant="outlined" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', '&:hover fieldset': { borderColor: theme.palette.mode === 'dark' ? '#666666' : '#404040' }, '&.Mui-focused fieldset': { borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' } }, '& .MuiInputLabel-root': { color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' } }} />
                  <TextField fullWidth label="Message" name="message" value={formData.message} onChange={handleInputChange} required multiline rows={4} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', '&:hover fieldset': { borderColor: theme.palette.mode === 'dark' ? '#666666' : '#404040' }, '&.Mui-focused fieldset': { borderColor: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' } }, '& .MuiInputLabel-root': { color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' }, gridColumn: { sm: 'span 2', lg: '1 / -1' } }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button type="submit" variant="contained" size="large" startIcon={<Send />} sx={{ px: 4, py: 1.5, fontSize: '1rem', fontWeight: 600, background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #404040 0%, #666666 100%)' : 'linear-gradient(135deg, #1a1a1a 0%, #404040 100%)', color: theme.palette.mode === 'dark' ? '#ffffff' : '#ffffff', '&:hover': { background: theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #666666 0%, #808080 100%)' : 'linear-gradient(135deg, #404040 0%, #666666 100%)', boxShadow: theme.palette.mode === 'dark' ? '0 0 20px rgba(255,255,255,0.3)' : '0 0 20px rgba(0,0,0,0.3)' }, transition: 'all 0.3s ease-in-out' }} disabled={loading}>Send Message</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* Bottom: 3-column row (Contact Info, Availability, Social Links) */}
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 3, md: 4 },
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, minmax(0, 1fr))',
            },
            maxWidth: 'md',
            mx: 'auto',
          }}
        >
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: theme.palette.mode === 'dark' ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)', border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)', boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1)' : '0 8px 32px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', p: 0 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>Contact Information</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {contactInfo.map((info, idx) => (
                    <Box key={idx} component="a" href={info.href} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', p: 1, borderRadius: 2, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', '&:hover': { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', boxShadow: theme.palette.mode === 'dark' ? '0 0 10px rgba(255,255,255,0.2)' : '0 0 10px rgba(0,0,0,0.2)' } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a', mr: 2 }}>{info.icon}</Box>
                      <Box>
                        <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', fontWeight: 500 }}>{info.title}</Typography>
                        <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a', fontWeight: 500 }}>{info.value}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: theme.palette.mode === 'dark' ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)', border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)', boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1)' : '0 8px 32px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', p: 0 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>Availability</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040', mb: 1 }}>I'm currently available for:</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' }}>• Full-time opportunities</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' }}>• Freelance projects</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' }}>• Open source contributions</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040' }}>• Technical discussions</Typography>
                </Box>
              </CardContent>
            </Card>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: theme.palette.mode === 'dark' ? 'rgba(26,26,26,0.9)' : 'rgba(255,255,255,0.9)', border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)', boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(255,255,255,0.05), 0 0 20px rgba(255,255,255,0.1)' : '0 8px 32px rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)', p: 0 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a' }}>Social Links</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {socialLinks.map((social, idx) => (
                    <IconButton key={idx} href={social.href} target="_blank" rel="noopener noreferrer" sx={{ width: 48, height: 48, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a', border: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.2)', '&:hover': { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', boxShadow: theme.palette.mode === 'dark' ? '0 0 10px rgba(255,255,255,0.2)' : '0 0 10px rgba(0,0,0,0.2)' } }}>{social.icon}</IconButton>
                  ))}
                </Box>
              </CardContent>
            </Card>
        </Box>
        {/* Snackbar for feedback */}
        <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Contact; 