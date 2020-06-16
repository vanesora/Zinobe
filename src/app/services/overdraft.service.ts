import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverdraftService {
  public balance = environment.capitalBase;

  constructor() { }
}
