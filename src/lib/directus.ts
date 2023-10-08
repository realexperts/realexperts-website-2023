import { RootSchema } from '@/lib/schema';

export const fetchPages = async () => {
  const response = await fetch(
    `${import.meta.env.DIRECTUS_URL}/items/pages?access_token=${
      import.meta.env.DIRECTUS_TOKEN
    }&fields[]=url,translations.title,translations.url,translations.sections.sections_id.blocks.*,translations.sections.sections_id.blocks.item.*`,
  );
  const data = await response.json();
  const root = RootSchema.parse(data);

  return root.data
    .map((page) => {
      return page.translations.map((translation) => {
        return {
          slug: translation.url === '/' ? undefined : translation.url,
          title: translation.title,
        };
      });
    })
    .flat();
};
