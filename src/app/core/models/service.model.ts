export interface ServiceItem {
  id: string;
  icon: string;
  titleKey: string;
  summaryKey: string;
  pointKeys: string[];
  featured?: boolean;
}
