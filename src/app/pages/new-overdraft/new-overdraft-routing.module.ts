import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewOverdraftComponent } from './new-overdraft.component';


const routes: Routes = [
  {
    path: '',
    component: NewOverdraftComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewOverdraftRoutingModule { }
