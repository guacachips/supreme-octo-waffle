import { Injector, NgModule } from "@angular/core";
import { CustomElementModule } from "../../classes/custom-element-module";
import { CardComponent } from "./card.component";

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule extends CustomElementModule {
  constructor(injector: Injector) {
    super(injector, CardComponent, 'ngx-ds-card')
  }
}