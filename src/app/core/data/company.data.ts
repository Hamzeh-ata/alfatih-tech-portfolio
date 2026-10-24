import { CompanyContact, InquiryOption } from '../models/contact.model';

export const COMPANY_CONTACT: CompanyContact = {
  email: 'hamzeh@alfatih-tech.com',
  phone: '+962 7 9835 4093',
  locationKey: 'contact.location',
  website: 'https://alfatih-tech.com',
};

export const INQUIRY_OPTIONS: InquiryOption[] = [
  { value: 'custom-software', labelKey: 'contact.inquiry.custom' },
  { value: 'product-inquiry', labelKey: 'contact.inquiry.product' },
  { value: 'post-launch', labelKey: 'contact.inquiry.support' },
  { value: 'marketing', labelKey: 'contact.inquiry.marketing' },
  { value: 'partnership', labelKey: 'contact.inquiry.partnership' },
  { value: 'other', labelKey: 'contact.inquiry.other' },
];
