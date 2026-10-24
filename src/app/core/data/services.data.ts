import { ServiceItem } from '../models/service.model';

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    icon: 'code',
    titleKey: 'services.custom.title',
    summaryKey: 'services.custom.summary',
    pointKeys: [
      'services.custom.points.web',
      'services.custom.points.systems',
      'services.custom.points.portals',
      'services.custom.points.workflows',
      'services.custom.points.integrations',
    ],
  },
  {
    id: 'digital-products',
    icon: 'product',
    titleKey: 'services.product.title',
    summaryKey: 'services.product.summary',
    pointKeys: [
      'services.product.points.planning',
      'services.product.points.design',
      'services.product.points.development',
      'services.product.points.testing',
      'services.product.points.deployment',
    ],
  },
  {
    id: 'post-launch',
    icon: 'support',
    titleKey: 'services.support.title',
    summaryKey: 'services.support.summary',
    featured: true,
    pointKeys: [
      'services.support.points.maintenance',
      'services.support.points.bugs',
      'services.support.points.performance',
      'services.support.points.security',
      'services.support.points.features',
      'services.support.points.uiux',
      'services.support.points.api',
      'services.support.points.deployment',
      'services.support.points.scale',
    ],
  },
  {
    id: 'marketing',
    icon: 'growth',
    titleKey: 'services.marketing.title',
    summaryKey: 'services.marketing.summary',
    pointKeys: [
      'services.marketing.points.strategy',
      'services.marketing.points.positioning',
      'services.marketing.points.presence',
      'services.marketing.points.campaigns',
      'services.marketing.points.leads',
      'services.marketing.points.acquisition',
    ],
  },
];
