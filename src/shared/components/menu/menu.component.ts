import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private userSvr: UserService) {}
  logOut() {
    this.userSvr.logOut();
  }
  ngOnInit(): void {}
}
