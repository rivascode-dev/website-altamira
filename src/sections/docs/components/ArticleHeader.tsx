import { Box, Typography } from '@mui/material';

interface ArticleHeaderProps {
  title: string;
  description?: string;
}

export function ArticleHeader({ title, description }: ArticleHeaderProps) {
  return (
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
        {title}
      </Typography>
      {description && (
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
          {description}
        </Typography>
      )}
    </Box>
  );
}
