import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovedsComponent } from './approveds.component';


const routes: Routes = [
  {
    path: '',
    component: ApprovedsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovedsRoutingModule { }
