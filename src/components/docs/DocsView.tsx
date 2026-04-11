'use client';

import { Box, Typography, alpha } from '@mui/material';
import { brand } from '@/theme/customTheme';
import { MDXContent } from '@/components/docs/MdxContent';
import { docs } from '@/velite';

type Doc = (typeof docs)[number];

interface DocsViewProps {
  doc: Doc;
}

export function DocsView({ doc }: DocsViewProps) {
  return (
    <Box
      component='article'
      sx={(theme) => ({
        maxWidth: 'none',
        '& h1': {
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          fontWeight: 800,
          mb: 4,
          color: 'primary.main',
          lineHeight: 1.1,
        },
        '& h2': {
          fontSize: '2.25rem',
          fontWeight: 800,
          mt: 8,
          mb: 4,
          color: 'text.primary',
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: 60,
            height: 4,
            bgcolor: 'secondary.main',
            borderRadius: 2,
          },
        },
        '& h3': {
          fontSize: '1.75rem',
          fontWeight: 700,
          mt: 6,
          mb: 3,
          color: 'primary.main',
        },
        '& p': {
          fontSize: '1.125rem',
          lineHeight: 1.8,
          mb: 3,
          color: 'text.secondary',
        },
        '& strong': {
          color: 'text.primary',
          fontWeight: 700,
        },
        '& ul, & ol': {
          pl: 3,
          mb: 4,
          color: 'text.secondary',
        },
        '& li': {
          mb: 2,
          fontSize: '1.125rem',
          '&::marker': {
            color: 'secondary.main',
            fontWeight: 'bold',
          },
        },
        '& code': {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          color: 'primary.main',
          px: 1,
          py: 0.5,
          borderRadius: 1.5,
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '0.9em',
          fontWeight: 600,
        },
        '& pre': {
          backgroundColor: alpha(theme.palette.primary.main, 0.03),
          p: 4,
          borderRadius: 4,
          overflowX: 'auto',
          mb: 5,
          border: '1px solid',
          borderColor: alpha(theme.palette.primary.main, 0.1),
          '& code': {
            backgroundColor: 'transparent',
            color: 'text.primary',
            p: 0,
            fontSize: '1rem',
            fontWeight: 400,
          },
        },
        '& blockquote': {
          borderLeft: '6px solid',
          borderColor: 'secondary.main',
          pl: 4,
          py: 2,
          my: 6,
          fontStyle: 'italic',
          backgroundColor: alpha(theme.palette.secondary.main, 0.04),
          borderRadius: '0 12px 12px 0',
          '& p': {
            mb: 0,
            color: 'primary.main',
            fontWeight: 500,
            fontSize: '1.25rem',
          },
        },
        '& hr': {
          my: 8,
          border: 0,
          borderTop: '2px solid',
          borderColor: 'divider',
          opacity: 0.5,
        },
      })}
    >
      <Box sx={{ mb: 8 }}>
        <Typography
          variant='h1'
          color='primary.main'
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 900,
            mb: 3,
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {doc.title}
        </Typography>
        <Typography
          variant='h5'
          color='text.secondary'
          sx={{
            fontWeight: 400,
            fontSize: '1.5rem',
            maxWidth: '900px',
            lineHeight: 1.6,
          }}
        >
          {doc.description}
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <MDXContent code={doc.content} />
      </Box>
    </Box>
  );
}
