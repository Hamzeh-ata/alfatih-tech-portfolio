import { Component, OnInit, inject } from '@angular/core';
import { getOrderedProducts } from '../../core/data/products.data';
import { SeoService } from '../../core/services/seo.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-products',
  imports: [ProductCard, TranslatePipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsPage implements OnInit {
  private readonly seo = inject(SeoService);
  readonly products = getOrderedProducts();

  ngOnInit(): void {
    this.seo.apply({
      titleKey: 'productsPage.seoTitle',
      descriptionKey: 'productsPage.seoDescription',
      path: '/products',
    });
  }
}
