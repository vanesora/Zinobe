import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { OverdraftInterface } from '../models/overdraft';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user';
import { map } from 'rxjs/operators'
import { OverdraftUserInterface } from '../models/overdraftUser';

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
  private overdraftDoc: AngularFirestoreDocument<OverdraftInterface>;
  private userCollection: AngularFirestoreCollection<UserInterface>;
  private user: Observable<UserInterface[]>;

  public getAllOverdraft() {
    return this.overdraft = this.overdraftCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as OverdraftInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  public getAllUsers() {
    return this.user = this.userCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as UserInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  public AddOverdraft(overdraft: OverdraftInterface): Promise<any> {
    return this.overdraftCollection.add(overdraft);
  }

  public AddUsers(user: UserInterface): Promise<any> {
    return this.userCollection.add(user);
  }

  public UpdateOverdraft(overdraft: OverdraftInterface): Promise<any> {
    const id = overdraft.id;
    this.overdraftDoc = this.afs.doc<OverdraftInterface>(`overdrafts/${id}`);
    return this.overdraftDoc.update(overdraft);
  }

}
