import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibElementsModule } from 'lib-elements';
import { LibComponentsModule } from 'lib-components';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LibElementsModule,
    LibComponentsModule
  ],
  providers: []
})
export class AppModule {
  constructor() {}

  ngDoBootstrap() {}
}
