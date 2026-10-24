import { Component, input } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-product-visual',
  imports: [TranslatePipe],
  templateUrl: './product-visual.html',
  styleUrl: './product-visual.scss',
})
export class ProductVisual {
  readonly image = input.required<string>();
  readonly name = input.required<string>();
  readonly accent = input('#3b9eff');
  readonly compact = input(false);
  readonly showNote = input(true);
}
