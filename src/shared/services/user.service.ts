import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ILoginInfo, IUserInfo } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private userInfos: IUserInfo[] = [];
  private readonly user$ = new BehaviorSubject<IUserInfo | null>(null);
  private subscription: Subscription = new Subscription();

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUserInfos(): void {
    const subscription = this.httpClient
      .get<IUserInfo[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/users')
      .subscribe((value) => {
        this.userInfos = value;
      });
    this.subscription.add(subscription);
    // this.user$.next(null);
  }

  addUser(user: IUserInfo) {
    const subscription = this.httpClient
      .post<IUserInfo[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/users', {
        ...this.userInfos,
        ...{ id: this.userInfos.length, ...user },
      })
      .subscribe();

    this.subscription.add(subscription);
    this.getUserInfos();
    this.user$.next(user);
    localStorage.setItem('login', user.login!);
  }

  deleteUser(login: IUserInfo['login']) {
    this.httpClient.delete<IUserInfo[]>(
      `https://62af3aea3bbf46a3521e932f.mockapi.io/users/:${login}`
    );
    this.getUserInfos();
    this.user$.next(null);
  }

  getUser(): BehaviorSubject<IUserInfo | null> {
    return this.user$;
  }

  setUserByLogin(login: IUserInfo['login']): void {
    const subscription = this.httpClient
      .get<IUserInfo[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/users')
      .subscribe((value) => {
        const user = value.find((user) => user.login === login);
        if (user !== undefined) {
          this.user$.next(user);
        }
      });
  }

  login({ login, password }: ILoginInfo) {
    const subscription = this.httpClient
      .get<IUserInfo[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/users')
      .subscribe((value) => {
        this.userInfos = value;
        const user = this.userInfos.find(
          (user) => user.login === login && user.password === password
        );
        if (user !== undefined) {
          localStorage.setItem('login', user.login!);
          this.user$.next(user);
          this.router.navigateByUrl('/hotels');
        }
      });
    this.subscription.add(subscription);
  }
}
