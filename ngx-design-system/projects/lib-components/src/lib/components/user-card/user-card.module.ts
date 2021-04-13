import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { CustomElementModule } from "../../classes/custom-element-module";
import { UserCardComponent } from "./user-card.component";

@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserCardModule extends CustomElementModule {
  constructor(injector: Injector) {
    super(injector, UserCardComponent, 'ngx-ds-user-card')
  }
}