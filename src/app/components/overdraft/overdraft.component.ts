import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overdraft',
  templateUrl: './overdraft.component.html',
  styleUrls: ['./overdraft.component.scss']
})
export class OverdraftComponent implements OnInit {

  public overdraftForm: FormGroup;

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.overdraftForm = this.fb.group({
      value: [0, [Validators.required, Validators.max(1000000), Validators.min(100000)]],
    });
  }

  saveOverdraft(){
    
  }

}
