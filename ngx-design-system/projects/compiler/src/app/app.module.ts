import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibElementsModule } from 'lib-elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    LibElementsModule,
  ],
  providers: []
})
export class AppModule {
  constructor() {}

  ngDoBootstrap() {}
}
