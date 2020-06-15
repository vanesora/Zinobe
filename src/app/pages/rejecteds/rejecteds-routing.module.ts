import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RejectedsComponent } from './rejecteds.component';


const routes: Routes = [
  {
    path: '',
    component: RejectedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedsRoutingModule { }
