import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Certifications = ({ data }) => {
  if (!data.certifications || data.certifications.length === 0) return null;

  return (
    <Box sx={{ py: 8, px: 3, background: theme => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, #000 0%, #232323 100%)' : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)', minHeight: '60vh' }}>
      <Box sx={{ maxWidth: 'md', mx: 'auto', width: '100%' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: theme => theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #fff 0%, #bbb 100%)'
                : 'linear-gradient(135deg, #232323 0%, #444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: theme => theme.palette.mode === 'dark'
                ? '0 0 30px rgba(255,255,255,0.15)'
                : '0 0 30px rgba(0,0,0,0.15)',
            }}
          >
            Certifications
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {data.certifications.map((cert, idx) => (
            <Grid item xs={12} md={8} key={idx}>
              <Card sx={{
                background: theme => theme.palette.mode === 'dark' ? 'rgba(26,26,26,0.95)' : 'rgba(255,255,255,0.95)',
                border: theme => theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                boxShadow: theme => theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(255,255,255,0.04), 0 0 20px rgba(255,255,255,0.08)'
                  : '0 8px 32px rgba(0,0,0,0.08)',
                borderRadius: 4,
                p: 0,
              }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={700} sx={{ color: theme => theme.palette.mode === 'dark' ? '#fff' : '#232323', mb: 1 }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: theme => theme.palette.mode === 'dark' ? '#bbb' : '#444', mb: 1 }}>
                    {cert.issuer} &bull; {cert.date}
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme => theme.palette.mode === 'dark' ? '#ccc' : '#555', mb: 2 }}>
                    {cert.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #404040 0%, #666666 100%)',
                      color: 'white',
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      boxShadow: '0 4px 16px rgba(255,255,255,0.08)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #666666 0%, #808080 100%)',
                        color: '#fff',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Certifications; 