import { Component, OnInit } from '@angular/core';
import { OverdraftService } from 'src/app/services/overdraft.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  constructor(
    public overdraftService: OverdraftService
  ) { }

  ngOnInit() {
  }

}
