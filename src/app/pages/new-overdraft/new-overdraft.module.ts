import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOverdraftComponent } from './new-overdraft.component';
import { NewOverdraftRoutingModule } from './new-overdraft-routing.module';
import { OverdraftModule } from 'src/app/components/overdraft/overdraft.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    NewOverdraftComponent,
  ],
  imports: [
    CommonModule,
    NewOverdraftRoutingModule,
    OverdraftModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
})
export class NewOverdraftModule { }
