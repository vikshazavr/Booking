import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  constructor(private router: Router, private userSvc: UserService) {
    if (localStorage.getItem('login')) {
      this.redirectToHotels();
    }
  }

  public ngOnInit(): void {}

  private redirectToHotels() {
    this.router.navigateByUrl('/hotels');
  }
}
