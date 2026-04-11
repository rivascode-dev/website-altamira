import { defineConfig, s } from 'velite';

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    name: '[name]-[hash].[ext]',
    clean: true
  },
  collections: {
    docs: {
      name: 'Doc',
      pattern: 'docs/**/*.mdx',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.slug(), // Esto generará 'nombre-del-archivo' basado en el nombre del archivo
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
