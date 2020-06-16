import { Component, OnInit } from '@angular/core';
import { OverdraftService } from 'src/app/services/overdraft.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    public overdraftService: OverdraftService,
  ) { }

  ngOnInit() {
  }

}
