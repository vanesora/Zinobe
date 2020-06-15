import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedsComponent } from './approveds.component';
import { ApprovedsRoutingModule } from './approveds-routing.module';

@NgModule({
  declarations: [
    ApprovedsComponent,
  ],
  imports: [
    CommonModule,
    ApprovedsRoutingModule
  ],
  providers: [],
})
export class ApprovedsModule { }
