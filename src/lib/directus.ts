import { MainMenuSchema } from '@/lib/directus-menus';
import { MetaInformationSchema } from '@/lib/directus-meta-information';
import { RootSchema } from '@/lib/schema';

export const fetchMetaInformation = async (id: number) => {
  const fields = ['meta_title', 'meta_description', 'meta_image.*'];

  const response = await fetch(
    `${
      import.meta.env.DIRECTUS_URL
    }/items/pages_translations/${id}?access_token=${
      import.meta.env.DIRECTUS_TOKEN
    }&fields[]=${fields.join(',')}`
  );

  const data = await response.json();

  return MetaInformationSchema.parse(data);
};

export const fetchMainMenu = async () => {
  const fields = [
    'translations.title',
    'translations.languages_code',
    'translations.nodes.title',
    'translations.nodes.type',
    'translations.nodes.url',
    'translations.nodes.linked_page.url',
    'translations.nodes.anchor.slug'
  ];

  const response = await fetch(
    `${import.meta.env.DIRECTUS_URL}/items/main_menu?access_token=${
      import.meta.env.DIRECTUS_TOKEN
    }&fields[]=${fields.join(',')}`
  );

  const data = await response.json();

  return MainMenuSchema.parse(data);
};

export const fetchPages = async () => {
  const fields = [
    'translations.id',
    'translations.show_title',
    'translations.title',
    'translations.url',
    'translations.sections.sections_id.section_styles',
    'translations.sections.sections_id.color',
    'translations.sections.sections_id.slug',
    'translations.sections.sections_id.max_width',
    'translations.sections.sections_id.blocks.*',
    'translations.sections.sections_id.blocks.item.*',
    'translations.sections.sections_id.blocks.item.ctas.collection',
    'translations.sections.sections_id.blocks.item.ctas.item.*.*',
    'translations.sections.sections_id.blocks.item.image.*'
  ];

  const response = await fetch(
    `${import.meta.env.DIRECTUS_URL}/items/pages?access_token=${
      import.meta.env.DIRECTUS_TOKEN
    }&fields[]=${fields.join(',')}`
  );
  const data = await response.json();
  const root = RootSchema.parse(data);

  return root.data.flatMap((page) => {
    return page.translations.map((translation) => {
      return {
        id: translation.id,
        slug: translation.url === '/' ? undefined : translation.url,
        title: translation.title,
        sections: translation.sections,
        showTitle: translation.show_title
      };
    });
  });
};
