import { NgModule } from '@angular/core';
import { LibElementsComponent } from './lib-elements.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { TitleComponent } from './title/title.component';
import { ChipComponent } from './chip/chip.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LibElementsComponent,
    SubtitleComponent,
    TitleComponent,
    ChipComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    LibElementsComponent,
    SubtitleComponent,
    TitleComponent,
    ChipComponent,
    CardComponent
  ]
})
export class LibElementsModule { }
