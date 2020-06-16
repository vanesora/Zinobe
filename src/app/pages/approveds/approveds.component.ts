import { Component, OnInit } from '@angular/core';
import { OverdraftService } from 'src/app/services/overdraft.service';

@Component({
  selector: 'app-approveds',
  templateUrl: './approveds.component.html',
  styleUrls: ['./approveds.component.scss']
})
export class ApprovedsComponent implements OnInit {

  constructor(
    public overdraftService: OverdraftService,
  ) { }

  ngOnInit() {
  }

  public pay(overdraft) {

  }

}
