import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Pipe({
  name: 't',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly language = inject(LanguageService);

  transform(key: string, params?: Record<string, string | number>): string {
    this.language.language();
    return this.language.translate(key, params);
  }
}
