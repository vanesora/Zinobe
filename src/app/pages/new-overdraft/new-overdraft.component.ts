import { Component, OnInit, ViewChild } from '@angular/core';
import { OverdraftService } from 'src/app/services/overdraft.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/user';
import { OverdraftInterface } from 'src/app/models/overdraft';
import { database } from 'firebase';

@Component({
  selector: 'app-new-overdraft',
  templateUrl: './new-overdraft.component.html',
  styleUrls: ['./new-overdraft.component.scss']
})
export class NewOverdraftComponent implements OnInit {

  @ViewChild('myForm', { static: false }) myForm: NgForm;

  public overdraftForm: FormGroup;
  public user: UserInterface;
  public overdraft: OverdraftInterface;

  constructor(
    public fb: FormBuilder,
    public overdraftService: OverdraftService,
    public firebaseService: FirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.overdraftForm = this.fb.group({
      user: ['', [Validators.required]],
    });
  }

  public requestValue(value) {
    if (!value.error) {
      this.overdraft = {
        amount: value.value,
        answer: true,
        status: 'negative',
        userId: ''
      };
    } else {
      this.overdraft = null;
    }
  }

  public request() {
    if (!this.overdraft) {
      this.openSnackBar('Debes agregar un valor', 'cerrar');
      return;
    }
    this.user = this.overdraftForm.value.user;

    const listOverdraft = this.overdraftService.overdraftsUsers.filter((data) => {
      return data.user === this.user;
    });

    const valueAnswer = listOverdraft.find(value => value.answer === false);
    const valueStatus = listOverdraft.find(value => value.status === 'negative');

    if (valueAnswer) {
      this.openSnackBar('Usuario no permitido', 'cerrar');
      return;
    }
    if (valueStatus) {
      this.openSnackBar('Usuario debe un prestamo', 'cerrar');
      return;
    }
    this.overdraft.userId = this.user.id;
    return this.firebaseService.AddOverdraft(this.overdraft).then(() => {
      this.openSnackBar('Prestamo concedido', 'cerrar');
      this.overdraftForm.reset();
      this.myForm.resetForm();
    });
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
