import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing',
  template: `
    <app-marketing-header></app-marketing-header>
    <router-outlet></router-outlet>
    <app-marketing-footer></app-marketing-footer>
  `
})
export class MarketingComponent {}
