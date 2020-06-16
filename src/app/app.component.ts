import { Component, OnInit } from '@angular/core';
import { OverdraftService } from './services/overdraft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  events: string[] = [];
  opened = true;

  constructor(
    public overdraftService: OverdraftService,
  ) {
  }

  ngOnInit() {
    this.overdraftService.getAllOverdraft();
  }
}
