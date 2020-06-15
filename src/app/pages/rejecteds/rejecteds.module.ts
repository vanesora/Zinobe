import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RejectedsComponent } from './rejecteds.component';
import { RejectedsRoutingModule } from './rejecteds-routing.module';

@NgModule({
  declarations: [
    RejectedsComponent,
  ],
  imports: [
    CommonModule,
    RejectedsRoutingModule
  ],
  providers: [],
})
export class RejectedsModule { }
