import { Component, OnInit, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { COMPANY_CONTACT, INQUIRY_OPTIONS } from '../../core/data/company.data';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactPage implements OnInit {
  private readonly seo = inject(SeoService);
  private readonly language = inject(LanguageService);
  private readonly fb = inject(FormBuilder);

  readonly contact = COMPANY_CONTACT;
  readonly inquiryOptions = INQUIRY_OPTIONS;
  readonly mailHref = `mailto:${COMPANY_CONTACT.email}`;
  readonly phoneHref = `tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`;
  readonly submittedAttempt = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    inquiryType: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  ngOnInit(): void {
    this.seo.apply({
      titleKey: 'contactPage.seoTitle',
      descriptionKey: 'contactPage.seoDescription',
      path: '/contact',
    });
  }

  submit(): void {
    this.submittedAttempt.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const inquiryLabel = this.resolveInquiryLabel(value.inquiryType);
    const subject = encodeURIComponent(`Alfatih inquiry — ${inquiryLabel}`);
    const body = encodeURIComponent(this.buildMailBody(value, inquiryLabel));
    window.location.href = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;
  }

  private resolveInquiryLabel(value: string): string {
    for (const option of this.inquiryOptions) {
      if (option.value === value) {
        return this.language.translate(option.labelKey);
      }
    }
    return value;
  }

  private buildMailBody(
    value: {
      name: string;
      company: string;
      email: string;
      inquiryType: string;
      message: string;
    },
    inquiryLabel: string,
  ): string {
    const lines = [
      `Name: ${value.name}`,
      `Company: ${value.company || '-'}`,
      `Email: ${value.email}`,
      `Inquiry type: ${inquiryLabel}`,
      '',
      value.message,
    ];
    return lines.join('\n');
  }
}
