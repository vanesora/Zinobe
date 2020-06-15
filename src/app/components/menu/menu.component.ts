import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems = [
    { name: 'Nuevo prestamo', select: true, icon: 'add_circle_outline', path: 'new-overdraft' },
    { name: 'Nuevo usuario', select: false, icon: 'person_add_alt_1', path: 'new-user' },
    { name: 'Usuarios', select: false, icon: 'account_circle', path: 'users' },
    { name: 'Prestamos aprovados', select: false, icon: 'check_circle', path: 'approved' },
    { name: 'Prestamos rechazados', select: false, icon: 'cancel', path: 'rejected' },
  ];

  constructor(
    // tslint:disable-next-line: variable-name
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public selectMenuItem(item): void {
    this.menuItems = this.menuItems.map((itemMenu) => {
      itemMenu.select = false;
      return itemMenu;
    });
    item.select = true;
    this._router.navigate([`/${item.path}`]);
  }

}
