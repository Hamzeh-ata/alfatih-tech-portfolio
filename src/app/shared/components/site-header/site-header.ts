import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LanguageService } from '../../../core/services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  private readonly language = inject(LanguageService);
  private readonly router = inject(Router);

  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly languageLabel = computed(() =>
    this.language.language() === 'en' ? 'AR' : 'EN',
  );

  readonly links = [
    { path: '/', labelKey: 'nav.home', exact: true },
    { path: '/products', labelKey: 'nav.products', exact: false },
    { path: '/services', labelKey: 'nav.services', exact: false },
    { path: '/about', labelKey: 'nav.about', exact: false },
    { path: '/contact', labelKey: 'nav.contact', exact: false },
  ];

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuOpen.set(false);
      });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  switchLanguage(): void {
    this.language.toggleLanguage();
  }
}
