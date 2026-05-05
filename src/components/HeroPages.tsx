'use client';

import { Box, Container, Typography, Stack, Breadcrumbs } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroPagesProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  breadcrumbs: string | BreadcrumbItem[];
  objectPosition?: string;
}

export default function HeroPages({
  backgroundImage,
  title,
  subtitle,
  breadcrumbs,
  objectPosition = 'center 25%',
}: HeroPagesProps) {
  const items =
    typeof breadcrumbs === 'string' ? [{ label: breadcrumbs }] : breadcrumbs;

  return (
    <SectionWrapper
      id='hero-page'
      sx={{
        p: 0,
        position: 'relative',
        height: { xs: '50vh', md: 450 },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: 'primary.main',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          sizes='100vw'
          style={{
            objectFit: 'cover',
            objectPosition,
          }}
        />
      </Box>

      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 10 }}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<ChevronRight size={16} color='white' />}
            sx={{ color: 'white', opacity: 0.8, mb: 2 }}
          >
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none' }}>
              Inicio
            </Link>
            {items.map((item, index) => (
              <Box key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Typography color='secondary.light' sx={{ fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                )}
              </Box>
            ))}
          </Breadcrumbs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant='h1'
              sx={{
                color: 'white',
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant='h4'
                sx={{
                  color: 'secondary.light',
                  mt: 2,
                  maxWidth: 800,
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                {subtitle}
              </Typography>
            )}
          </motion.div>
        </Stack>
      </Container>
    </SectionWrapper>
  );
}
