import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 'postlane',
    slug: 'postlane',
    name: 'Postlane',
    order: 1,
    accent: '#5b8cff',
    visual: 'postlane',
    image: '/assets/images/products/postlane-cover.jpg',
    status: 'product',
    nameKey: 'products.postlane.name',
    taglineKey: 'products.postlane.tagline',
    descriptionKey: 'products.postlane.description',
    problemKey: 'products.postlane.problem',
    focusKeys: [
      'products.postlane.focus.local',
      'products.postlane.focus.instagram',
      'products.postlane.focus.leads',
      'products.postlane.focus.email',
      'products.postlane.focus.permissions',
    ],
    capabilityKeys: [
      'products.postlane.capabilities.studio',
      'products.postlane.capabilities.campaigns',
      'products.postlane.capabilities.research',
      'products.postlane.capabilities.workspaces',
      'products.postlane.capabilities.planned',
    ],
    ctaKey: 'products.postlane.cta',
  },
  {
    id: 'inkplay',
    slug: 'inkplay',
    name: 'InkPlay',
    order: 2,
    accent: '#a78bfa',
    visual: 'inkplay',
    image: '/assets/images/products/inkplay-cover.jpg',
    status: 'product',
    nameKey: 'products.inkplay.name',
    taglineKey: 'products.inkplay.tagline',
    descriptionKey: 'products.inkplay.description',
    problemKey: 'products.inkplay.problem',
    focusKeys: [
      'products.inkplay.focus.operations',
      'products.inkplay.focus.player',
      'products.inkplay.focus.displays',
      'products.inkplay.focus.promotions',
    ],
    capabilityKeys: [
      'products.inkplay.capabilities.venue',
      'products.inkplay.capabilities.access',
      'products.inkplay.capabilities.visibility',
    ],
    ctaKey: 'products.inkplay.cta',
  },
  {
    id: 'dokkan-style',
    slug: 'dokkan-style',
    name: 'Dokkan Style',
    order: 3,
    accent: '#f59e0b',
    visual: 'dokkan',
    image: '/assets/images/products/dokkan.jpg',
    status: 'product',
    nameKey: 'products.dokkan.name',
    taglineKey: 'products.dokkan.tagline',
    descriptionKey: 'products.dokkan.description',
    problemKey: 'products.dokkan.problem',
    focusKeys: [
      'products.dokkan.focus.identity',
      'products.dokkan.focus.interaction',
      'products.dokkan.focus.web',
    ],
    capabilityKeys: [
      'products.dokkan.capabilities.experience',
      'products.dokkan.capabilities.interface',
      'products.dokkan.capabilities.brand',
    ],
    ctaKey: 'products.dokkan.cta',
  },
  {
    id: 'pos',
    slug: 'point-of-sale',
    name: 'Point-of-Sale System',
    order: 4,
    accent: '#34d399',
    visual: 'pos',
    image: '/assets/images/products/pos.jpg',
    status: 'product',
    nameKey: 'products.pos.name',
    taglineKey: 'products.pos.tagline',
    descriptionKey: 'products.pos.description',
    problemKey: 'products.pos.problem',
    focusKeys: [
      'products.pos.focus.sales',
      'products.pos.focus.transactions',
      'products.pos.focus.dashboards',
    ],
    capabilityKeys: [
      'products.pos.capabilities.workflows',
      'products.pos.capabilities.transactions',
      'products.pos.capabilities.operations',
    ],
    ctaKey: 'products.pos.cta',
  },
  {
    id: 'inkverse',
    slug: 'inkverse',
    name: 'Inkverse',
    order: 5,
    accent: '#38bdf8',
    visual: 'inkverse',
    image: '/assets/images/products/inkverse.jpg',
    status: 'product',
    nameKey: 'products.inkverse.name',
    taglineKey: 'products.inkverse.tagline',
    descriptionKey: 'products.inkverse.description',
    problemKey: 'products.inkverse.problem',
    focusKeys: [
      'products.inkverse.focus.discovery',
      'products.inkverse.focus.community',
      'products.inkverse.focus.scale',
    ],
    capabilityKeys: [
      'products.inkverse.capabilities.content',
      'products.inkverse.capabilities.interaction',
      'products.inkverse.capabilities.journey',
    ],
    ctaKey: 'products.inkverse.cta',
  },
  {
    id: 'schoolwatch',
    slug: 'schoolwatch',
    name: 'SchoolWatch',
    order: 6,
    accent: '#60a5fa',
    visual: 'schoolwatch',
    image: '/assets/images/products/schoolwatch.jpg',
    status: 'product',
    nameKey: 'products.schoolwatch.name',
    taglineKey: 'products.schoolwatch.tagline',
    descriptionKey: 'products.schoolwatch.description',
    problemKey: 'products.schoolwatch.problem',
    focusKeys: [
      'products.schoolwatch.focus.admin',
      'products.schoolwatch.focus.attendance',
      'products.schoolwatch.focus.fees',
      'products.schoolwatch.focus.parents',
    ],
    capabilityKeys: [
      'products.schoolwatch.capabilities.operations',
      'products.schoolwatch.capabilities.followup',
      'products.schoolwatch.capabilities.communication',
    ],
    ctaKey: 'products.schoolwatch.cta',
  },
  {
    id: 'gymwatch',
    slug: 'gymwatch',
    name: 'GymWatch',
    order: 7,
    accent: '#22d3ee',
    visual: 'gymwatch',
    image: '/assets/images/products/gymwatch-hero.jpg',
    status: 'product',
    nameKey: 'products.gymwatch.name',
    taglineKey: 'products.gymwatch.tagline',
    descriptionKey: 'products.gymwatch.description',
    problemKey: 'products.gymwatch.problem',
    focusKeys: [
      'products.gymwatch.focus.memberships',
      'products.gymwatch.focus.operations',
      'products.gymwatch.focus.attendance',
      'products.gymwatch.focus.classes',
      'products.gymwatch.focus.training',
    ],
    capabilityKeys: [
      'products.gymwatch.capabilities.subscriptions',
      'products.gymwatch.capabilities.branches',
      'products.gymwatch.capabilities.occupancy',
      'products.gymwatch.capabilities.classes',
      'products.gymwatch.capabilities.programs',
      'products.gymwatch.capabilities.equipment',
      'products.gymwatch.capabilities.partner',
      'products.gymwatch.capabilities.wearables',
    ],
    ctaKey: 'products.gymwatch.cta',
  },
  {
    id: 'siteproof',
    slug: 'siteproof',
    name: 'SiteProof',
    order: 8,
    accent: '#2dd4bf',
    visual: 'siteproof',
    image: '/assets/images/products/siteproof.jpg',
    status: 'product',
    nameKey: 'products.siteproof.name',
    taglineKey: 'products.siteproof.tagline',
    descriptionKey: 'products.siteproof.description',
    problemKey: 'products.siteproof.problem',
    focusKeys: [
      'products.siteproof.focus.inspections',
      'products.siteproof.focus.checklists',
      'products.siteproof.focus.photos',
      'products.siteproof.focus.issues',
      'products.siteproof.focus.reporting',
    ],
    capabilityKeys: [
      'products.siteproof.capabilities.quality',
      'products.siteproof.capabilities.evidence',
      'products.siteproof.capabilities.visibility',
    ],
    ctaKey: 'products.siteproof.cta',
  },
  {
    id: 'aqarpay',
    slug: 'aqarpay',
    name: 'AqarPay',
    order: 9,
    accent: '#fb7185',
    visual: 'aqarpay',
    image: '/assets/images/products/aqarpay.jpg',
    status: 'product',
    nameKey: 'products.aqarpay.name',
    taglineKey: 'products.aqarpay.tagline',
    descriptionKey: 'products.aqarpay.description',
    problemKey: 'products.aqarpay.problem',
    focusKeys: [
      'products.aqarpay.focus.rental',
      'products.aqarpay.focus.tenants',
      'products.aqarpay.focus.payments',
      'products.aqarpay.focus.maintenance',
    ],
    capabilityKeys: [
      'products.aqarpay.capabilities.apartments',
      'products.aqarpay.capabilities.balances',
      'products.aqarpay.capabilities.workflows',
    ],
    ctaKey: 'products.aqarpay.cta',
  },
  {
    id: 'sendly',
    slug: 'sendly',
    name: 'Sendly',
    order: 10,
    accent: '#3b9eff',
    visual: 'sendly',
    image: '/assets/images/products/sendly.jpg',
    status: 'product',
    nameKey: 'products.sendly.name',
    taglineKey: 'products.sendly.tagline',
    descriptionKey: 'products.sendly.description',
    problemKey: 'products.sendly.problem',
    focusKeys: [
      'products.sendly.focus.email',
      'products.sendly.focus.outreach',
      'products.sendly.focus.messaging',
    ],
    capabilityKeys: [
      'products.sendly.capabilities.workflows',
      'products.sendly.capabilities.communication',
      'products.sendly.capabilities.organization',
    ],
    ctaKey: 'products.sendly.cta',
  },
];

export function getOrderedProducts(): Product[] {
  return [...PRODUCTS].sort((a, b) => a.order - b.order);
}

export function getProductBySlug(slug: string): Product | undefined {
  const products = getOrderedProducts();
  for (const product of products) {
    if (product.slug === slug) {
      return product;
    }
  }
  return undefined;
}

export function getFeaturedProducts(limit = 4): Product[] {
  return getOrderedProducts().slice(0, limit);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const products = getOrderedProducts();
  const related: Product[] = [];
  for (const product of products) {
    if (product.slug === slug) {
      continue;
    }
    related.push(product);
    if (related.length >= limit) {
      break;
    }
  }
  return related;
}
