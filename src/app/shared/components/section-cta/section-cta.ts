import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-section-cta',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './section-cta.html',
  styleUrl: './section-cta.scss',
})
export class SectionCta {
  readonly titleKey = input.required<string>();
  readonly bodyKey = input.required<string>();
  readonly primaryLabelKey = input('common.discussProject');
  readonly primaryLink = input('/contact');
  readonly secondaryLabelKey = input<string | null>('common.exploreProducts');
  readonly secondaryLink = input('/products');
}
