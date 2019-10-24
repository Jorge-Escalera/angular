import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  public user: User;

  constructor() { }

  ngOnInit() {
    this.initModel();
}

private initModel() {
    this.user = {
      id: 1,
      firstName: 'Jorge',
      lastName: 'Escalera'
    };
}

}
