import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ProductVisual } from '../product-visual/product-visual';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, TranslatePipe, ProductVisual],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly featured = input(false);
}
