import { NgModule } from '@angular/core';
import { NgxSowLibraryComponent } from './ngx-sow-library.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NgxSowLibraryComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    NgxSowLibraryComponent
  ]
})
export class NgxSowLibraryModule { }
