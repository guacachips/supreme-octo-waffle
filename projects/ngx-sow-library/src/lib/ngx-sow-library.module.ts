import { NgModule } from '@angular/core';
import { NgxSowLibraryComponent } from './ngx-sow-library.component';
import { CardComponent } from './card/card.component';
import { SwoSiteBarComponent } from './swo-site-bar/swo-site-bar.component';
import { SwoSiteMainComponent } from './swo-site-main/swo-site-main.component';



@NgModule({
  declarations: [
    NgxSowLibraryComponent,
    CardComponent,
    SwoSiteBarComponent,
    SwoSiteMainComponent
  ],
  imports: [
  ],
  exports: [
    NgxSowLibraryComponent,
    CardComponent,
    SwoSiteBarComponent,
    SwoSiteMainComponent
  ]
})
export class NgxSowLibraryModule { }
