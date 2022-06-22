import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';

@Injectable()
export class MainGuard implements CanActivate {
  constructor(private router: Router, private userSvc: UserService) {}
  private flag = false;
  canActivate(): any {
    if (localStorage.getItem('login') !== null) {
      this.userSvc.setUserByLogin(localStorage.getItem('login')!);
      this.flag = true;
    } else {
      this.redirectToLogin();
    }
    return this.flag;
  }
  private redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
