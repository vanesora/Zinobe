import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { OverdraftInterface } from '../models/overdraft';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afs: AngularFirestore
  ) {
    this.overdraftCollection = afs.collection<OverdraftInterface>('overdrafts');
    this.overdraft = this.overdraftCollection.valueChanges();
    this.userCollection = afs.collection<UserInterface>('users');
    this.user = this.userCollection.valueChanges();
  }

  private overdraftCollection: AngularFirestoreCollection<OverdraftInterface>;
  private overdraft: Observable<OverdraftInterface[]>;
  private userCollection: AngularFirestoreCollection<UserInterface>;
  private user: Observable<UserInterface[]>;

  public getAllOverdraft() {
    return this.overdraft;
  }

  public getAllUsers() {
    return this.user;
  }

  public AddOverdraft() {
    return this.overdraft;
  }

  public AddUsers() {
    return this.overdraft;
  }

}
