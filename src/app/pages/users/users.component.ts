import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.firebaseService.getAllOverdraft().subscribe(overdrafts => {
      console.log(overdrafts);
    });
  }

}
