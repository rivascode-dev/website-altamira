'use client';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Stack,
  Grid,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { Play } from 'lucide-react';

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'videos', label: 'Videos' },
  { id: 'verticales', label: 'Verticales' },
  { id: 'horizontales', label: 'Horizontales' },
  { id: 'alcantarillados', label: 'Alcantarillados' },
  { id: 'ductos', label: 'Ductos y Salas' },
];

const galleryItems = [
  // Videos (Simulados con imágenes y tag de video)
  {
    id: 1,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video1.mp4',
    title: 'Limpieza de Ducto Vertical',
    isVideo: true,
  },
  {
    id: 2,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video2.mp4',
    title: 'Inspección con Cámara',
    isVideo: true,
  },
  {
    id: 3,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video3.mp4',
    title: 'Mantenimiento de Extractores',
    isVideo: true,
  },
  {
    id: 4,
    category: 'videos',
    src: '/assets/videos/gallery/altamira-ductos-video4.mp4',
    title: 'Desobstrucción de Alcantarillado',
    isVideo: true,
  },

  // Verticales
  {
    id: 5,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-1.jpg',
    title: 'Ducto Vertical',
  },
  {
    id: 6,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-2.jpg',
    title: 'Limpieza de Ductos Verticales',
  },
  {
    id: 7,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-3.jpg',
    title: 'Sellado de Juntas',
  },
  {
    id: 8,
    category: 'verticales',
    src: '/assets/images/gallery/altamira-ductos-verticales-4.jpg',
    title: 'Limpieza de Ductos Verticales',
  },

  // Horizontales
  {
    id: 9,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-1.jpg',
    title: 'Ducto Horizontal de Basura',
  },
  {
    id: 10,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-2.jpg',
    title: 'Limpieza Colectores',
  },
  {
    id: 11,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-3.jpg',
    title: 'Mantenimiento Red Húmeda',
  },
  {
    id: 12,
    category: 'horizontales',
    src: '/assets/images/gallery/altamira-ductos-horizontales-4.jpg',
    title: 'Desengrase de Ductos',
  },

  // Alcantarillado
  {
    id: 13,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-1.jpeg',
    title: 'Limpieza de Cámaras',
  },
  {
    id: 14,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-2.jpeg',
    title: 'Desobstrucción de Cañerías',
  },
  {
    id: 15,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-3.jpeg',
    title: 'Mantenimiento de Sumideros',
  },
  {
    id: 16,
    category: 'alcantarillados',
    src: '/assets/images/gallery/altamita-ductos-alcantarillado-4.jpg',
    title: 'Lavado de Alcantarillas',
  },

  // Ductos y Salas de Basura
  {
    id: 17,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-1.jpeg',
    title: 'Limpieza de Ductos y Sala de Basura',
  },
  {
    id: 18,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-2.jpeg',
    title: 'Limpieza de Ductos y Contenedores',
  },
  {
    id: 19,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-3.jpeg',
    title: 'Limpieza de Ductos',
  },
  {
    id: 20,
    category: 'ductos',
    src: '/assets/images/gallery/altamira-ductos-sala-basura-4.jpg',
    title: 'Protocolo de Limpieza',
  },
];

export default function GalleryContent() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <SectionWrapper id='gallery-content'>
      <Container maxWidth='lg'>
        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            variant='scrollable'
            scrollButtons='auto'
            sx={{
              '& .MuiTabs-indicator': {
                height: 4,
                borderRadius: '4px 4px 0 0',
                bgcolor: 'secondary.main',
              },
              '& .MuiTab-root': {
                fontSize: '1rem',
                fontWeight: 600,
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat.id} label={cat.label} value={cat.id} />
            ))}
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: '1/1',
                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 2,
                  '&:hover .overlay': { opacity: 1 },
                  '&:hover img, &:hover video': { transform: 'scale(1.1)' },
                }}
              >
                {item.isVideo ? (
                  <Box
                    component='video'
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                ) : (
                  <Box
                    component='img'
                    src={item.src}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                )}

                {item.isVideo && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(211, 47, 47, 0.9)',
                      color: 'white',
                      p: 1,
                      borderRadius: 2,
                      display: 'flex',
                      zIndex: 2,
                    }}
                  >
                    <Play size={16} fill='white' />
                  </Box>
                )}

                <Box
                  className='overlay'
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(0, 51, 69, 0.7)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 3,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant='subtitle1'
                    sx={{ fontWeight: 600, color: 'white' }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            * Todas las imágenes corresponden a trabajos reales realizados por
            Altamira Ltda.
          </Typography>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
