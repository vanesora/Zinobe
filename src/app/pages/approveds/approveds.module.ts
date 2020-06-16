import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedsComponent } from './approveds.component';
import { ApprovedsRoutingModule } from './approveds-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ApprovedsComponent,
  ],
  imports: [
    CommonModule,
    ApprovedsRoutingModule,
    MatButtonModule
  ],
  providers: [],
})
export class ApprovedsModule { }
