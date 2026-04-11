import { defineConfig, s } from 'velite';

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    static: 'public/static',
    filename: '[name]-[hash].[ext]',
    clean: true
  },
  collections: {
    docs: {
      name: 'Doc',
      pattern: 'docs/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.path(), // Esto generará 'docs/nombre-del-archivo' basado en la ruta del archivo
          description: s.string().max(999).optional(),
          order: s.number().default(0),
          content: s.mdx()
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`
        }))
    }
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: []
  }
});
