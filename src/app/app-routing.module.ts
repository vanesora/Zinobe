import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'approved',
    loadChildren: () => import('./pages/approveds/approveds.module').then((m) => m.ApprovedsModule)
  },
  {
    path: 'new-overdraft',
    loadChildren: () => import('./pages/new-overdraft/new-overdraft.module').then((m) => m.NewOverdraftModule)
  },
  {
    path: 'new-user',
    loadChildren: () => import('./pages/new-user/new-user.module').then((m) => m.NewUserModule)
  },
  {
    path: 'rejected',
    loadChildren: () => import('./pages/rejecteds/rejecteds.module').then((m) => m.RejectedsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule)
  },
  { path: '', redirectTo: 'new-overdraft', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
