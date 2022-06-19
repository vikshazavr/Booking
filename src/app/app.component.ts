import { Component } from '@angular/core';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private userSvc: UserService) {
    this.userSvc.getUser().subscribe((value) => console.log('user', value));
  }
}
