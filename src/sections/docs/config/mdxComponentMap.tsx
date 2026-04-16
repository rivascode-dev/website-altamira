import { Box, Typography, Stack, Button } from '@mui/material';
import Link from 'next/link';

export const mdxComponentMap = {
  Box,
  Stack,
  Typography,
  Link,
  Button: ({ href, sx, ...props }: any) => (
    <Button
      {...(href ? { component: Link, href } : {})}
      {...props}
      sx={{
        width: 'fit-content',
        '& p': { color: 'inherit', m: 0, display: 'inline' },
        ...sx,
      }}
    />
  ),
};
