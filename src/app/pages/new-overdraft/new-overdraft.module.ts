import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOverdraftComponent } from './new-overdraft.component';
import { NewOverdraftRoutingModule } from './new-overdraft-routing.module';

@NgModule({
  declarations: [
    NewOverdraftComponent,
  ],
  imports: [
    CommonModule,
    NewOverdraftRoutingModule
  ],
  providers: [],
})
export class NewOverdraftModule { }
