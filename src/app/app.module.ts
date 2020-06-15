import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { OverdraftComponent } from './components/overdraft/overdraft.component';
import { BalanceComponent } from './components/balance/balance.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsersComponent } from './pages/users/users.component';
import { RejectedsComponent } from './pages/rejecteds/rejecteds.component';
import { ApprovedsComponent } from './pages/approveds/approveds.component';
import { NewAverdreftComponent } from './pages/new-averdreft/new-averdreft.component';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OverdraftComponent,
    BalanceComponent,
    NewUserComponent,
    UsersComponent,
    RejectedsComponent,
    ApprovedsComponent,
    NewAverdreftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
