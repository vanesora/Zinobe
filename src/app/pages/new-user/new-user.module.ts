import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user.component';
import { NewUserRoutingModule } from './new-user-routing.module';
import { OverdraftModule } from 'src/app/components/overdraft/overdraft.module';

@NgModule({
  declarations: [
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    NewUserRoutingModule,
    OverdraftModule
  ],
  providers: [],
})
export class NewUserModule { }
