import { NgModule } from '@angular/core';
import { CardModule } from './components/card/card.module';
import { ChipModule } from './components/chip/chip.module';
import { SubtitleModule } from './components/subtitle/subtitle.module';
import { TitleModule } from './components/title/title.module';



@NgModule({
  imports: [
  ],
  exports: [
    TitleModule,
    SubtitleModule,
    ChipModule,
    CardModule
  ]
})
export class LibElementsModule { }
