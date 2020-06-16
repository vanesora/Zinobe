import { Component, OnInit } from '@angular/core';
import { OverdraftService } from 'src/app/services/overdraft.service';

@Component({
  selector: 'app-rejecteds',
  templateUrl: './rejecteds.component.html',
  styleUrls: ['./rejecteds.component.scss']
})
export class RejectedsComponent implements OnInit {

  constructor(
    public overdraftService: OverdraftService,
  ) { }

  ngOnInit() {
  }

}
