import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public fullName: string = '';
  constructor(private userSvc: UserService) {
    this.userSvc
      .getUser()
      .subscribe(
        (value) => (this.fullName = `${value?.firstName!} ${value?.lastName}`)
      );
  }

  ngOnInit(): void {}
}
