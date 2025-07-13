import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Chip,
  Button,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Launch,
} from '@mui/icons-material';

const Projects = ({ data }) => {
  const theme = useTheme();

  const projects = data.projects || [];

  // Separate projects into MERN and ML categories
  const mernProjects = projects.filter(project => 
    project.technologies?.some(tech => 
      ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'Bootstrap', 'JWT'].includes(tech)
    )
  );

  const mlProjects = projects.filter(project => 
    project.technologies?.some(tech => 
      ['Python', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'NLTK', 'Streamlit'].includes(tech)
    )
  );

  const ProjectCard = ({ project, index, isFeatured = false }) => (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: theme.palette.mode === 'dark'
          ? 'rgba(26, 26, 26, 0.9)'
          : 'rgba(255, 255, 255, 0.9)',
        border: theme.palette.mode === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: isFeatured 
          ? (theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.2)'
              : '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.2)')
          : (theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(255, 255, 255, 0.05), 0 0 20px rgba(255, 255, 255, 0.1)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)'),
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 16px 48px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.2)'
            : '0 16px 48px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.25)',
          border: theme.palette.mode === 'dark'
            ? '1px solid rgba(255, 255, 255, 0.2)'
            : '1px solid rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 1,
          }}
        >
          <Chip
            label="Featured"
            size="small"
            sx={{
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, 0.2)'
                : 'rgba(0, 0, 0, 0.2)',
              color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
              border: theme.palette.mode === 'dark'
                ? '1px solid rgba(255, 255, 255, 0.3)'
                : '1px solid rgba(0, 0, 0, 0.3)',
              fontWeight: 600,
              fontSize: '0.75rem',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 0 15px rgba(255, 255, 255, 0.3)'
                : '0 0 15px rgba(0, 0, 0, 0.3)',
            }}
          />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Project Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
            textShadow: theme.palette.mode === 'dark'
              ? '0 0 10px rgba(255, 255, 255, 0.2)'
              : '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          {project.title}
        </Typography>

        {/* Project Description */}
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040',
            lineHeight: 1.6,
            flexGrow: 1,
          }}
        >
          {project.description}
        </Typography>

        {/* Technologies */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {project.technologies?.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
                  color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                  border: theme.palette.mode === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(0, 0, 0, 0.2)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 0 10px rgba(255, 255, 255, 0.3)'
                      : '0 0 10px rgba(0, 0, 0, 0.3)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0 }}>
        <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
          {project.githubUrl && (
            <Button
              variant="outlined"
              size="small"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHub />}
              sx={{
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                '&:hover': {
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="contained"
              size="small"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Launch />}
              sx={{
                background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                '&:hover': {
                  background: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Live Demo
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 3,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)' 
          : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
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
            Projects
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.mode === 'dark' ? '#cccccc' : '#404040',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: theme.palette.mode === 'dark'
                ? '0 0 10px rgba(255, 255, 255, 0.1)'
                : '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            A showcase of my recent work in web development and machine learning
          </Typography>
        </Box>

        {/* MERN Stack Projects */}
        {mernProjects.length > 0 && (
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                textShadow: theme.palette.mode === 'dark'
                  ? '0 0 20px rgba(255, 255, 255, 0.2)'
                  : '0 0 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              MERN Stack Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {mernProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={project.id || index}>
                  <ProjectCard project={project} index={index} isFeatured={index === 0} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* Machine Learning Projects */}
        {mlProjects.length > 0 && (
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                textAlign: 'center',
                color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
                textShadow: theme.palette.mode === 'dark'
                  ? '0 0 20px rgba(255, 255, 255, 0.2)'
                  : '0 0 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              Machine Learning Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {mlProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={project.id || index}>
                  <ProjectCard project={project} index={index} isFeatured={index === 0} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Projects; 