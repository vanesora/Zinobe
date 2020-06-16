import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';
import { OverdraftInterface } from '../models/overdraft';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OverdraftService {
  public balance = environment.capitalBase;
  public overdrafts: OverdraftInterface[];
  public users: UserInterface[];

  constructor(
    private firebaseService: FirebaseService
  ) { }

  getAllOverdraft() {
    this.firebaseService.getAllOverdraft().subscribe(overdrafts => {
      this.overdrafts = overdrafts;
      let count = 0;
      overdrafts.forEach(overdraft => {
        if (overdraft.answer === true && overdraft.status === 'negative') {
          count = count + overdraft.amount;
        }
      });
      this.balance = environment.capitalBase - count;
    });
  }

  getAllUsers() {
    this.firebaseService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
