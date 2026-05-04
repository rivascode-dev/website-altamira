'use client';
import { Box, Container, Grid, Typography, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceItemProps {
  id: string;
  title: string;
  content: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bgcolor?: string;
  quote?: string;
}

export default function ServiceItem({ id, title, content, image, imageAlt, reverse = false, bgcolor = 'background.default', quote }: ServiceItemProps) {
  const theme = useTheme();

  return (
    <SectionWrapper id={id} sx={{ py: { xs: 8, md: 12 }, bgcolor }}>
      <Container maxWidth='lg'>
        <Grid container spacing={8} direction={reverse ? 'row-reverse' : 'row'} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h3" component="h2" color="primary" sx={{ mb: 4, fontWeight: 800 }}>
                {title}
              </Typography>
              <Box sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                {content}
              </Box>
              {quote && (
                <Typography 
                  variant="h6" 
                  color="primary" 
                  sx={{ 
                    mt: 4, 
                    fontWeight: 600, 
                    borderLeft: '4px solid', 
                    borderColor: 'secondary.main', 
                    pl: 3, 
                    py: 1, 
                    bgcolor: 'rgba(211, 47, 47, 0.05)',
                    fontStyle: 'italic'
                  }}
                >
                  {quote}
                </Typography>
              )}
            </motion.div>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box 
                sx={{ 
                  position: 'relative', 
                  borderRadius: 4, 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  aspectRatio: '4/3'
                }}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
