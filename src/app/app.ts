import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ANCHOR_SCROLL_OFFSET } from './core/data/ui.constants';
import { LanguageService } from './core/services/language.service';
import { SiteFooter } from './shared/components/site-footer/site-footer';
import { SiteHeader } from './shared/components/site-header/site-header';
import { TranslatePipe } from './shared/pipes/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor() {
    inject(LanguageService);
    inject(ViewportScroller).setOffset(ANCHOR_SCROLL_OFFSET);
  }
}
