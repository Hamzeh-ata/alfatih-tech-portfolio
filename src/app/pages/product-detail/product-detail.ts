import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { getProductBySlug, getRelatedProducts } from '../../core/data/products.data';
import { Product } from '../../core/models/product.model';
import { SeoService } from '../../core/services/seo.service';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { ProductVisual } from '../../shared/components/product-visual/product-visual';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, TranslatePipe, ProductVisual, ProductCard],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetailPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  readonly product = signal<Product | null>(null);
  readonly related = signal<Product[]>([]);
  readonly layoutClass = computed(() => {
    const current = this.product();
    if (!current) {
      return 'layout-default';
    }
    if (current.visual === 'sendly') {
      return 'layout-sendly';
    }
    if (current.visual === 'siteproof' || current.visual === 'schoolwatch') {
      return 'layout-ops';
    }
    return 'layout-default';
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.loadProduct(slug);
    });
  }

  private loadProduct(slug: string): void {
    const found = getProductBySlug(slug);
    if (!found) {
      this.router.navigateByUrl('/products');
      return;
    }
    this.product.set(found);
    this.related.set(getRelatedProducts(slug, 3));
    this.seo.apply({
      titleKey: found.nameKey,
      descriptionKey: found.descriptionKey,
      path: `/products/${found.slug}`,
    });
  }
}
