import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_PRODUCT_LINKS } from '../../../core/data/home.data';
import { PRODUCTS } from '../../../core/data/products.data';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-hero-universe',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './hero-universe.html',
  styleUrl: './hero-universe.scss',
})
export class HeroUniverse {
  readonly productLinks = HOME_PRODUCT_LINKS;
  readonly productCount = PRODUCTS.length;
}
