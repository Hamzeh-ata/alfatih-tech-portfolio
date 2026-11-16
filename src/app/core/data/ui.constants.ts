import { InMemoryScrollingOptions } from '@angular/router';

export const ANCHOR_SCROLL_OFFSET: [number, number] = [0, 120];

export const ROUTER_SCROLL_OPTIONS: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

export const CONTACT_INVALID_CONTROL_SELECTOR =
  'input.ng-invalid, select.ng-invalid, textarea.ng-invalid';
