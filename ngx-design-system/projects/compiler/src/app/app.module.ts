import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { LibComponentsModule, UserCardComponent } from 'projects/lib-components/src/public-api';
import { CardComponent, ChipComponent, LibElementsModule, SubtitleComponent, TitleComponent } from 'projects/lib-elements/src/public-api';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LibComponentsModule,
    LibElementsModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // Convert `CardComponent` from our `lib-components` to a custom element.
    const CardCustomElement = createCustomElement(CardComponent, {injector: this.injector});
    // Register the custom element with the browser.
    customElements.define('ngx-ds-card', CardCustomElement);
    
    const UserCardCustomElement = createCustomElement(UserCardComponent, {injector: this.injector});
    customElements.define('ngx-ds-user-card', UserCardCustomElement);

    const TitleCustomElement = createCustomElement(TitleComponent, {injector: this.injector});
    customElements.define('ngx-ds-title', TitleCustomElement);

    const SubTitleCustomElement = createCustomElement(SubtitleComponent, {injector: this.injector});
    customElements.define('ngx-ds-subtitle', SubTitleCustomElement);

    const ChipCustomElement = createCustomElement(ChipComponent, {injector: this.injector});
    customElements.define('ngx-ds-chip', ChipCustomElement);
  }
}
