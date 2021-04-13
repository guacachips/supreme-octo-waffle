import { NgModule } from '@angular/core';
import { UserCardModule } from './components/user-card/user-card.module';
import { UserListModule } from './components/user-list/user-list.module';



@NgModule({
  exports: [
    UserCardModule,
    UserListModule
  ]
})
export class LibComponentsModule { }
