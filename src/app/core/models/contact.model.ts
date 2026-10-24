export interface InquiryOption {
  value: string;
  labelKey: string;
}

export interface ContactFormValue {
  name: string;
  company: string;
  email: string;
  inquiryType: string;
  message: string;
}

export interface CompanyContact {
  email: string;
  phone: string;
  locationKey: string;
  website: string;
}
