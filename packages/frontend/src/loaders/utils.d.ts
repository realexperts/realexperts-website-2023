export declare const fetchElementCtaInternal: (ctaId: number) => Promise<{
  type: string;
  title: string | null;
  url: string;
}>;
export declare const fetchElementCtaExternal: (ctaId: number) => Promise<{
  type: 'external';
  title: string | null;
  url: string | null;
}>;
export declare const getTypedCtaArray: (
  ctaArray:
    | {
        collection: string | null;
        item: number;
      }[]
    | undefined
) => Promise<
  (
    | {
        type: string;
        title: string | null;
        url: string;
      }
    | {
        type: 'external';
        title: string | null;
        url: string | null;
      }
  )[]
>;
