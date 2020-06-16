import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FirebaseService } from './firebase.service';
import { OverdraftInterface } from '../models/overdraft';
import { UserInterface } from '../models/user';
import { OverdraftUserInterface } from '../models/overdraftUser';

@Injectable({
  providedIn: 'root'
})
export class OverdraftService {
  public balance = environment.capitalBase;
  public overdrafts: OverdraftInterface[];
  public users: UserInterface[];
  public overdraftsUsers: OverdraftUserInterface[];

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
      this.firebaseService.getAllUsers().subscribe(users => {
        this.users = users;
        this.overdraftsUsers = this.overdrafts.map(overdraft => {
          const userProv = this.users.find(user => user.id === overdraft.userId);
          return {
            answer: overdraft.answer,
            amount: overdraft.amount,
            status: overdraft.status,
            id: overdraft.id,
            user: userProv
          };
        });
      });
    });
  }

}
