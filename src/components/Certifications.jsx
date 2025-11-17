import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, Avatar, Chip, Stack } from '@mui/material';
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
        <Grid container spacing={4}>
          {data.certifications.map((cert, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: theme => theme.palette.mode === 'dark' ? 'rgba(20,20,20,0.9)' : 'rgba(255,255,255,0.95)',
                  borderRadius: 4,
                  border: theme => theme.palette.mode === 'dark'
                    ? '1px solid rgba(255,255,255,0.1)'
                    : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: theme => theme.palette.mode === 'dark'
                    ? '0 12px 32px rgba(0,0,0,0.45)'
                    : '0 12px 32px rgba(0,0,0,0.12)',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: theme => theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0))'
                      : 'linear-gradient(135deg, rgba(0,0,0,0.04), rgba(0,0,0,0))',
                    pointerEvents: 'none',
                  }}
                />
                <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                  <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Avatar
                      alt={cert.issuer}
                      sx={{
                        bgcolor: theme => theme.palette.mode === 'dark' ? '#1e1e1e' : '#e0e0e0',
                        color: theme => theme.palette.mode === 'dark' ? '#fff' : '#232323',
                        fontWeight: 700,
                        width: 56,
                        height: 56,
                        border: theme => `2px solid ${theme.palette.primary.main}`,
                      }}
                    >
                      {cert.issuer?.[0] || '?'}
                    </Avatar>
                    <Box>
                      <Typography variant="overline" sx={{ letterSpacing: 1.5, color: theme => theme.palette.text.secondary }}>
                        {cert.date}
                      </Typography>
                      <Typography variant="h5" fontWeight={700} sx={{ color: theme => theme.palette.mode === 'dark' ? '#fff' : '#232323' }}>
                        {cert.title}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: theme => theme.palette.mode === 'dark' ? '#bbb' : '#555' }}>
                        {cert.issuer}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body1" sx={{ color: theme => theme.palette.mode === 'dark' ? '#d0d0d0' : '#444', mb: 2 }}>
                    {cert.description}
                  </Typography>
                  {cert.skills?.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                      {cert.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            borderRadius: '999px',
                            border: theme => theme.palette.mode === 'dark'
                              ? '1px solid rgba(255,255,255,0.2)'
                              : '1px solid rgba(0,0,0,0.1)',
                            background: theme => theme.palette.mode === 'dark'
                              ? 'rgba(255,255,255,0.08)'
                              : 'rgba(0,0,0,0.05)',
                            color: theme => theme.palette.mode === 'dark' ? '#fff' : '#232323',
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                    <Button
                      variant="contained"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        flexGrow: 1,
                        background: 'linear-gradient(135deg, #404040 0%, #666666 100%)',
                        color: '#fff',
                        fontWeight: 600,
                        borderRadius: 3,
                        boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #666666 0%, #808080 100%)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      View Credential
                    </Button>
                    <Button
                      variant="text"
                      href="#projects"
                      sx={{
                        fontWeight: 600,
                        color: theme => theme.palette.primary.main,
                      }}
                    >
                      Related Work
                    </Button>
                  </Stack>
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