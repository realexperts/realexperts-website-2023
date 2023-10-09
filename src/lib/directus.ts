import { RootSchema } from '@/lib/schema';

export const fetchPages = async () => {

  const fields = [
    'url',
    'translations.show_title',
    'translations.title',
    'translations.url',
    'translations.sections.sections_id.section_styles',
    'translations.sections.sections_id.color',
    'translations.sections.sections_id.blocks.*',
    'translations.sections.sections_id.blocks.item.*',
    'translations.sections.sections_id.blocks.item.ctas.collection',
    'translations.sections.sections_id.blocks.item.ctas.item.*.*',
    'translations.sections.sections_id.blocks.item.image.*',
  ]

  const response = await fetch(
    `${import.meta.env.DIRECTUS_URL}/items/pages?access_token=${
      import.meta.env.DIRECTUS_TOKEN
    }&fields[]=${fields.join(',')}`,
  );
  const data = await response.json();
  const root = RootSchema.parse(data);

  return root.data
    .map((page) => {
      return page.translations.map((translation) => {
        return {
          slug: translation.url === '/' ? undefined : translation.url,
          title: translation.title,
          sections: translation.sections,
          showTitle: translation.show_title,
        };
      });
    })
    .flat();
};
