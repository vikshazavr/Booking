import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  constructor(private userSvc: UserService, private router: Router) {}

  public ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private redirectToLogin() {
    const subscription = this.userSvc.getUser().subscribe((val) => {
      if (val === null) {
        this.router.navigateByUrl('/login');
      }
    });
    this.subscription.add(subscription);
  }
}
