import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserInterface } from 'src/app/models/user';
import { OverdraftInterface } from 'src/app/models/overdraft';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  @ViewChild('myForm', { static: false }) myForm: NgForm;
  
  public userForm: FormGroup;
  public user: UserInterface;
  public overdraft: OverdraftInterface;

  constructor(
    public fb: FormBuilder,
    public firebaseService: FirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      identification: ['', [Validators.required]],
    });
  }

  public request() {
    if (!this.overdraft) {
      this.openSnackBar('Debes agregar un valor', 'cerrar');
      return;
    }
    let message = '';
    const random = Math.random();

    if (random < 0.5) {
      message = 'Prestamo concedido';
      this.overdraft.answer = true;
    } else {
      message = 'Prestamo denegado';
      this.overdraft.answer = false;
    }
    this.user = {
      email: this.userForm.value.email,
      name: this.userForm.value.name,
      identification: this.userForm.value.identification
    };
    return this.firebaseService.AddUsers(this.user).then(response => {
      this.overdraft.userId = response.Pc.path.segments[1];
      return this.firebaseService.AddOverdraft(this.overdraft).then(() => {
        this.openSnackBar(message, 'cerrar');
        this.userForm.reset();
        this.myForm.resetForm();
      });
    });
  }

  public requestValue(value) {
    if (!value.error) {
      this.overdraft = {
        amount: value.value,
        answer: false,
        status: 'negative',
        userId: ''
      };
    } else {
      this.overdraft = null;
    }
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
