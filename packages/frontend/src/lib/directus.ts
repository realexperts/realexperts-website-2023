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
        'page_404',
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

export const fetchNotFoundPage = async () => {
  const settings = await fetchSettings();

  if (typeof settings.page_404 !== 'number') return;

  return await client.request(
    readItem('pages', settings.page_404, {
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
                    'id',
                    'section_styles',
                    'color',
                    'slug',
                    'margin_bottom',
                    'margin_top',
                    'padding_bottom',
                    'padding_top',
                    {
                      blocks: [
                        'id',
                        'collection',
                        'item',
                        'margin_top',
                        'margin_bottom'
                      ]
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
};

export const fetchPages = async () => {
  const settings = await fetchSettings();

  if (typeof settings.page_404 !== 'number') return;

  const response = await client.request(
    readItems('pages', {
      filter: {
        id: {
          _neq: settings.page_404
        }
      },
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
                    'id',
                    'section_styles',
                    'color',
                    'slug',
                    'margin_bottom',
                    'margin_top',
                    'padding_bottom',
                    'padding_top',
                    {
                      blocks: [
                        'id',
                        'collection',
                        'item',
                        'margin_top',
                        'margin_bottom'
                      ]
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
