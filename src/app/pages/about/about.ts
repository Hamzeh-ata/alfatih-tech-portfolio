import { Component, OnInit, inject } from '@angular/core';
import { TEAM_MEMBERS } from '../../core/data/team.data';
import { SeoService } from '../../core/services/seo.service';
import { SectionCta } from '../../shared/components/section-cta/section-cta';
import { TeamCard } from '../../shared/components/team-card/team-card';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, TeamCard, SectionCta],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutPage implements OnInit {
  private readonly seo = inject(SeoService);
  readonly team = TEAM_MEMBERS;

  readonly values = [
    {
      titleKey: 'aboutPage.valueClarityTitle',
      bodyKey: 'aboutPage.valueClarityBody',
    },
    {
      titleKey: 'aboutPage.valueCraftTitle',
      bodyKey: 'aboutPage.valueCraftBody',
    },
    {
      titleKey: 'aboutPage.valueContinuityTitle',
      bodyKey: 'aboutPage.valueContinuityBody',
    },
  ];

  ngOnInit(): void {
    this.seo.apply({
      titleKey: 'aboutPage.seoTitle',
      descriptionKey: 'aboutPage.seoDescription',
      path: '/about',
    });
  }
}
