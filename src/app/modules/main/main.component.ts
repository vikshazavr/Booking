import { Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  constructor(private userSvc: UserService, private router: Router) {
    this.redirectToLogin();
  }

  public ngOnInit(): void {}

  private redirectToLogin() {
    this.userSvc.getUser().subscribe((val) => {
      if (val === null) {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
