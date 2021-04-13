import { Injector, NgModule } from "@angular/core";
import { CustomElementModule } from "../../classes/custom-element-module";
import { ChipComponent } from "./chip.component";

@NgModule({
  declarations: [ChipComponent],
  exports: [ChipComponent]
})
export class ChipModule extends CustomElementModule {
  constructor(injector: Injector) {
    super(injector, ChipComponent, 'ngx-ds-chip')
  }
}