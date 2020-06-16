import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverdraftComponent } from './overdraft.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    OverdraftComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    OverdraftComponent
  ],
  providers: [],
})
export class OverdraftModule { }
