import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent, NgxSowLibraryModule } from 'projects/ngx-sow-library/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    NgxSowLibraryModule
  ],
  providers: [],
})
export class AppModule {
  
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    // Convert `CardComponent` from our `ngx-sow-library` to a custom element.
    const CardElement = createCustomElement(CardComponent, {injector: this.injector});
    // Register the custom element with the browser.
    customElements.define('sow-card-element', CardElement);
  }
}
