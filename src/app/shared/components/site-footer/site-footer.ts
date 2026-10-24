import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY_CONTACT } from '../../../core/data/company.data';
import { getOrderedProducts } from '../../../core/data/products.data';
import { SERVICES } from '../../../core/data/services.data';
import { LanguageService } from '../../../core/services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  private readonly language = inject(LanguageService);

  readonly year = new Date().getFullYear();
  readonly products = getOrderedProducts();
  readonly services = SERVICES;
  readonly contact = COMPANY_CONTACT;
  readonly mailHref = `mailto:${COMPANY_CONTACT.email}`;
  readonly phoneHref = `tel:${COMPANY_CONTACT.phone.replace(/\s+/g, '')}`;
  readonly languageLabel = computed(() =>
    this.language.language() === 'en' ? 'العربية' : 'English',
  );

  switchLanguage(): void {
    this.language.toggleLanguage();
  }
}
