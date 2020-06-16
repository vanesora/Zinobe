import { Component, OnInit } from '@angular/core';
import { OverdraftService } from 'src/app/services/overdraft.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-approveds',
  templateUrl: './approveds.component.html',
  styleUrls: ['./approveds.component.scss']
})
export class ApprovedsComponent implements OnInit {

  constructor(
    public overdraftService: OverdraftService,
    public firebaseService: FirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public pay(overdraft) {
    overdraft.status = 'positive';
    return this.firebaseService.UpdateOverdraft(overdraft).then(() => {
      this.openSnackBar('gracias por su pago', 'cerrar');
    });
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
