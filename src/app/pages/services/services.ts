import { Component, OnInit, inject } from '@angular/core';
import { SERVICES } from '../../core/data/services.data';
import { SeoService } from '../../core/services/seo.service';
import { ProcessSteps } from '../../shared/components/process-steps/process-steps';
import { SectionCta } from '../../shared/components/section-cta/section-cta';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-services',
  imports: [TranslatePipe, ProcessSteps, SectionCta],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesPage implements OnInit {
  private readonly seo = inject(SeoService);
  readonly services = SERVICES;

  ngOnInit(): void {
    this.seo.apply({
      titleKey: 'servicesPage.seoTitle',
      descriptionKey: 'servicesPage.seoDescription',
      path: '/services',
    });
  }
}
