'use client';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import SectionWrapper from '@/components/SectionWrapper';

const images = [
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2574&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2670&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2574&auto=format&fit=crop',
];

export default function GallerySection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='gallery'
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#f2f4f5',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='overline' color='secondary'>
            GALERÍA
          </Typography>
          <Typography variant='h3' color='primary'>
            Trabajos reales en terreno
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  aspectRatio: '1/1',
                  borderRadius: 3,
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                  '&:hover .image': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Box
                  className='image'
                  component='img'
                  src={src}
                  alt={`Trabajo técnico ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <Box
                  className='overlay'
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0, 62, 84, 0.7)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant='h6'
                    color='white'
                    sx={{ fontWeight: 700 }}
                  >
                    Terreno Altamira
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
