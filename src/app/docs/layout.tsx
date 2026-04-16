import { ArticleLayout } from '@/sections/docs/ArticleLayout';
import { docs } from '@/velite';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ArticleLayout docs={docs}>{children}</ArticleLayout>;
}
