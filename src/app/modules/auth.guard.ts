import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userSvc: UserService) {}
  private flag = false;
  canActivate(): any {
    this.userSvc.getUser().subscribe((value) => {
      this.flag = !!value;
    });
    // return this.flag;
    return false;
  }
}
