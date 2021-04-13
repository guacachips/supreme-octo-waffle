import { Injector, NgModule } from "@angular/core";
import { CustomElementModule } from "../../classes/custom-element-module";
import { TitleComponent } from "./title.component";

@NgModule({
  declarations: [TitleComponent],
  exports: [TitleComponent]
})
export class TitleModule extends CustomElementModule {
  constructor(injector: Injector) {
    super(injector, TitleComponent, 'ngx-ds-title')
  }
}