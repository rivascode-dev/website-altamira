import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, alpha } from '@mui/material';

interface Doc {
  slug: string;
  title: string;
  order: number;
}

interface NavLinksProps {
  docs: Doc[];
  onClose?: () => void;
}

export function NavLinks({ docs, onClose }: NavLinksProps) {
  const pathname = usePathname();
  const sortedDocs = [...docs].sort((a, b) => a.order - b.order);

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <Box component='nav' sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      {sortedDocs.map((doc) => {
        const href = `/docs/${doc.slug}`;
        const isExactActive = pathname === href || pathname === `${href}/`;
        const isDefaultActive =
          (pathname === '/docs' || pathname === '/docs/') && doc.order === 1;
        const isActive = isExactActive || isDefaultActive;

        return (
          <Link
            key={doc.slug}
            href={href}
            style={{ textDecoration: 'none' }}
            onClick={handleLinkClick}
          >
            <Box
              sx={(theme) => ({
                px: 2,
                py: 1.5,
                borderRadius: 2,
                fontSize: '0.9rem',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                bgcolor: isActive
                  ? alpha(theme.palette.primary.main, 0.08)
                  : 'transparent',
                color: isActive ? 'primary.main' : 'text.secondary',
                fontWeight: isActive ? 700 : 500,
                borderLeft: isActive
                  ? `4px solid ${theme.palette.secondary.main}`
                  : '4px solid transparent',
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                  color: 'primary.main',
                  transform: 'translateX(4px)',
                },
              })}
            >
              {doc.title}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
