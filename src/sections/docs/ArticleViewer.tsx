'use client';
import { Box } from '@mui/material';
import { docs } from '@/velite';
import { ArticleHeader } from './components/ArticleHeader';
import { articleStyles } from './styles/articleStyles';
import { mdxComponentMap } from './config/mdxComponentMap';
import { MdxDynamicRenderer } from './MdxDynamicRenderer';

type Doc = (typeof docs)[number];

interface ArticleViewerProps {
  doc: Doc;
}

export function ArticleViewer({ doc }: ArticleViewerProps) {
  return (
    <Box component='article' sx={articleStyles}>
      <ArticleHeader title={doc.title} description={doc.description} />
      <Box sx={{ position: 'relative' }}>
        <MdxDynamicRenderer code={doc.content} components={mdxComponentMap} />
      </Box>
    </Box>
  );
}
