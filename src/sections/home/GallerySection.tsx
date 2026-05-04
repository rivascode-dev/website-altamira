'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const images = [
  '/assets/images/gallery/altamira-ductos-horizontales-1.jpg',
  '/assets/images/gallery/altamira-ductos-sala-basura-1.jpeg',
  '/assets/images/gallery/altamira-ductos-verticales-1.jpg',
  '/assets/images/gallery/altamita-ductos-alcantarillado-1.jpeg',
];

export default function GallerySection() {
  const theme = useTheme();

  return (
    <SectionWrapper
      id='gallery'
      sx={{
        bgcolor:
          theme.palette.mode === 'dark' ? 'background.paper' : '#ffffffff',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant='overline' color='secondary'>
            GALERÍA
          </Typography>
          <Typography variant='h3' component='h2' color='primary'>
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
                {/* <Box
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
                </Box> */}
              </Box>
            </Grid>
          ))}
          <Box sx={{ mx: 'auto' }}>
            <Button
              component={Link}
              href={'/galeria'}
              variant='outlined'
              size='large'
              color='secondary'
              endIcon={<ArrowRight />}
              sx={{
                mt: 4,
                borderColor: 'secondary.main',
                bgcolor: 'secondary.main',
                color: 'white',
                border: '1px solid',
                '&:active': { transform: 'scale(0.95)' },
                '&:hover': {
                  bgcolor: 'white',
                  color: 'secondary.main',
                  border: '1px solid',
                },
              }}
            >
              Ver Galería Completa
            </Button>
          </Box>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
