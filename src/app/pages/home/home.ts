import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getFeaturedProducts } from '../../core/data/products.data';
import { HOME_PILLARS, HOME_PORTFOLIO_NAMES, HOME_SUPPORT_POINTS } from '../../core/data/home.data';
import { SERVICES } from '../../core/data/services.data';
import { TEAM_MEMBERS } from '../../core/data/team.data';
import { SeoService } from '../../core/services/seo.service';
import { ProcessSteps } from '../../shared/components/process-steps/process-steps';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { SectionCta } from '../../shared/components/section-cta/section-cta';
import { TeamCard } from '../../shared/components/team-card/team-card';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { HeroUniverse } from '../../shared/components/hero-universe/hero-universe';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    TranslatePipe,
    ProductCard,
    ProcessSteps,
    SectionCta,
    TeamCard,
    HeroUniverse,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage implements OnInit {
  private readonly seo = inject(SeoService);
  readonly products = getFeaturedProducts();
  readonly services = SERVICES;
  readonly team = TEAM_MEMBERS;
  readonly supportPoints = HOME_SUPPORT_POINTS;
  readonly introPillars = HOME_PILLARS;
  readonly portfolioNames = HOME_PORTFOLIO_NAMES;

  ngOnInit(): void {
    this.seo.apply({
      titleKey: 'home.seoTitle',
      descriptionKey: 'home.seoDescription',
      path: '/',
    });
  }
}
