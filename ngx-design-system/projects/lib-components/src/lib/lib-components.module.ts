import { NgModule } from '@angular/core';
import { LibElementsModule } from 'projects/lib-elements/src/public-api';
import { LibComponentsComponent } from './lib-components.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    LibComponentsComponent,
    UserCardComponent,
    UserListComponent,
  ],
  imports: [
    LibElementsModule
  ],
  exports: [
    LibComponentsComponent
  ]
})
export class LibComponentsModule { }