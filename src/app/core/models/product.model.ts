export type ProductVisual =
  | 'postlane'
  | 'inkplay'
  | 'dokkan'
  | 'pos'
  | 'inkverse'
  | 'schoolwatch'
  | 'gymwatch'
  | 'siteproof'
  | 'aqarpay'
  | 'sendly';

export type ProductStatus = 'product' | 'concept';

export interface Product {
  id: string;
  slug: string;
  name: string;
  order: number;
  accent: string;
  visual: ProductVisual;
  image: string;
  status: ProductStatus;
  nameKey: string;
  taglineKey: string;
  descriptionKey: string;
  problemKey: string;
  focusKeys: string[];
  capabilityKeys: string[];
  ctaKey: string;
}
