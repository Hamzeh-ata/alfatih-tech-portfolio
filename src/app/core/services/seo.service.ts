import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LanguageService } from './language.service';

export interface SeoConfig {
  titleKey: string;
  descriptionKey: string;
  path?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly language = inject(LanguageService);

  apply(config: SeoConfig): void {
    const pageTitle = this.language.translate(config.titleKey);
    const description = this.language.translate(config.descriptionKey);
    const brand = this.language.translate('brand.name');
    const fullTitle = `${pageTitle} | ${brand}`;
    const url = `https://alfatih-tech.com${config.path ?? ''}`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:site_name', content: brand });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });
  }
}
