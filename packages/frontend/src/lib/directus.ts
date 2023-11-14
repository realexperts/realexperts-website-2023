import type { Collections } from '@/lib/types';
import {
  createDirectus,
  readItem,
  readItems,
  readSingleton,
  rest,
  staticToken
} from '@directus/sdk';

export const client = createDirectus<Collections>(import.meta.env.DIRECTUS_URL)
  .with(rest())
  .with(staticToken(import.meta.env.DIRECTUS_TOKEN));

export const fetchSettings = async () => {
  return await client.request(
    readSingleton('settings', {
      fields: [
        'robots_index',
        'meta_title',
        'meta_description',
        {
          favicon: ['id', 'width', 'height'],
          meta_image: ['id', 'width', 'height']
        }
      ]
    })
  );
};

export const fetchMetaInformation = async (id: number | undefined) => {
  if (!id) return;

  return await client.request(
    readItem('pages_translations', id, {
      fields: [
        'meta_title',
        'meta_description',
        {
          meta_image: ['*']
        }
      ]
    })
  );
};

export const fetchMainMenu = async () => {
  return await client.request(
    readSingleton('main_menu', {
      fields: [
        {
          translations: [
            'title',
            'languages_code',
            {
              nodes: [
                'title',
                'type',
                'url',
                {
                  linked_page: ['url']
                },
                {
                  anchor: ['slug']
                }
              ]
            }
          ]
        }
      ]
    })
  );
};

export const fetchPages = async () => {
  const response = await client.request(
    readItems('pages', {
      fields: [
        {
          translations: [
            'id',
            'url',
            'title',
            'show_title',
            {
              sections: [
                {
                  sections_id: [
                    'section_styles',
                    'color',
                    'slug',
                    {
                      blocks: ['id', 'collection', 'item']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  );

  return response.flatMap((page) => {
    return page.translations?.map((translation) => translation);
  });
};
