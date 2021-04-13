import { Injector, NgModule } from "@angular/core";
import { CustomElementModule } from "../../classes/custom-element-module";
import { SubtitleComponent } from "./subtitle.component";

@NgModule({
  declarations: [SubtitleComponent],
  exports: [SubtitleComponent]
})
export class SubtitleModule extends CustomElementModule {
  constructor(injector: Injector) {
    super(injector, SubtitleComponent, 'ngx-ds-subtitle')
  }
}