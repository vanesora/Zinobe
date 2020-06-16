import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOverdraftComponent } from './new-overdraft.component';
import { NewOverdraftRoutingModule } from './new-overdraft-routing.module';
import { OverdraftModule } from 'src/app/components/overdraft/overdraft.module';

@NgModule({
  declarations: [
    NewOverdraftComponent,
  ],
  imports: [
    CommonModule,
    NewOverdraftRoutingModule,
    OverdraftModule
  ],
  providers: [],
})
export class NewOverdraftModule { }
