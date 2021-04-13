import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CustomElementModule } from "../../classes/custom-element-module";
import { UserCardModule } from "../user-card/user-card.module";
import { UserListComponent } from "./user-list.component";

@NgModule({
  declarations: [UserListComponent],
  imports: [
    BrowserModule,
    UserCardModule
  ],
  exports: [UserListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserListModule extends CustomElementModule {
  constructor(injector: Injector) {
    super(injector, UserListComponent, 'ngx-ds-user-list')
  }
}