import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getOrderedProducts } from '../../core/data/products.data';
import { SERVICES } from '../../core/data/services.data';
import { TEAM_MEMBERS } from '../../core/data/team.data';
import { SeoService } from '../../core/services/seo.service';
import { ProcessSteps } from '../../shared/components/process-steps/process-steps';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { SectionCta } from '../../shared/components/section-cta/section-cta';
import { TeamCard } from '../../shared/components/team-card/team-card';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    TranslatePipe,
    ProductCard,
    ProcessSteps,
    SectionCta,
    TeamCard,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage implements OnInit {
  private readonly seo = inject(SeoService);

  readonly products = getOrderedProducts();
  readonly services = SERVICES;
  readonly team = TEAM_MEMBERS;
  readonly supportPoints = [
    'home.supportPoints.maintenance',
    'home.supportPoints.fixes',
    'home.supportPoints.performance',
    'home.supportPoints.features',
  ];
  readonly introPillars = [
    {
      index: '01',
      titleKey: 'home.introPillars.productsTitle',
      bodyKey: 'home.introPillars.productsBody',
      tone: 'blue',
    },
    {
      index: '02',
      titleKey: 'home.introPillars.softwareTitle',
      bodyKey: 'home.introPillars.softwareBody',
      tone: 'teal',
    },
    {
      index: '03',
      titleKey: 'home.introPillars.growthTitle',
      bodyKey: 'home.introPillars.growthBody',
      tone: 'violet',
    },
  ];

  ngOnInit(): void {
    this.seo.apply({
      titleKey: 'home.seoTitle',
      descriptionKey: 'home.seoDescription',
      path: '/',
    });
  }
}
