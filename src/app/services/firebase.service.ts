import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { OverdraftInterface } from '../models/overdraft';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afs: AngularFirestore
  ) {
    this.overdraftCollection = afs.collection<OverdraftInterface>('overdrafts');
    this.overdraft = this.overdraftCollection.valueChanges();
  }

  private overdraftCollection: AngularFirestoreCollection<OverdraftInterface>;
  private overdraft: Observable<OverdraftInterface[]>;

  public getAllOverdraft() {
    return this.overdraft;
  }

}
