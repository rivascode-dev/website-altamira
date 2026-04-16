import Link from 'next/link';
import Image from 'next/image';
import { ArrowBigLeft, X } from 'lucide-react';
import { Box, Typography, IconButton } from '@mui/material';
import { NavLinks } from './NavLinks';

interface Doc {
  slug: string;
  title: string;
  order: number;
}

interface SidebarProps {
  docs: Doc[];
  onClose?: () => void;
}

export function Sidebar({ docs, onClose }: SidebarProps) {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 320 },
        borderRight: { xs: 'none', md: '1px solid' },
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          p: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'relative',
        }}
      >
        {onClose && (
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              display: { md: 'none' },
              color: 'text.secondary',
            }}
          >
            <X size={30} color='#D32F2F' />
          </IconButton>
        )}

        <Link href='/' style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'secondary.main',
              '&:hover': {
                opacity: 0.8,
                transform: 'translateX(-4px)',
              },
              transition: 'all 0.2s ease-in-out',
              mb: 4,
            }}
          >
            <ArrowBigLeft size={30} />
          </Box>
        </Link>

        <Typography variant='h6' color='primary.main' sx={{ fontWeight: '800' }}>
          DOCUMENTACIÓN
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <NavLinks docs={docs} onClose={onClose} />
      </Box>

      <Box sx={{ p: 4, borderTop: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image
            src='/assets/logos/logo-altamira-limpieza-ductos-chile.png'
            alt='Altamira Ductos Logo'
            width={854}
            height={285}
            style={{ width: '70%', height: 'auto' }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
