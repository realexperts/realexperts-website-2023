import { client } from '@/lib/directus';
import { readItem } from '@directus/sdk';
export const fetchElementCtaInternal = async (ctaId) => {
    const response = await client.request(readItem('element_cta_internal', ctaId, {
        fields: [
            'title',
            'anchor',
            {
                linked_page: ['url']
            }
        ]
    }));
    return {
        type: 'internal',
        title: response.title,
        url: `${response.linked_page?.url ?? ''}${response.anchor ? `#${response.anchor}` : ''}`
    };
};
export const fetchElementCtaExternal = async (ctaId) => {
    const response = await client.request(readItem('element_cta_external', ctaId, {
        fields: ['title', 'url']
    }));
    return {
        type: 'external',
        title: response.title,
        url: response.url
    };
};
export const getTypedCtaArray = async (ctaArray) => {
    const ctas = [];
    if (ctaArray) {
        for (const element of ctaArray) {
            if (element.collection === 'element_cta_internal') {
                ctas.push(await fetchElementCtaInternal(element.item));
            }
            else if (element.collection === 'element_cta_external') {
                ctas.push(await fetchElementCtaExternal(element.item));
            }
        }
    }
    return ctas;
};
