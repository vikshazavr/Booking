import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ILoginInfo, IUser, IUserInfo } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userInfos: IUserInfo[] = [];
  private readonly user$ = new BehaviorSubject<IUser | null>(null);

  constructor(private httpClient: HttpClient) {}

  getUserInfos(): void {
    this.httpClient
      .get<IUserInfo[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/users')
      .subscribe((value) => {
        this.userInfos = value;
      });

    this.user$.next(null);
  }

  addUser(user: IUserInfo) {
    this.httpClient
      .post<IUserInfo[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/users', {
        ...this.userInfos,
        ...{ id: this.userInfos.length, ...user },
      })
      .subscribe();
    this.getUserInfos();
    this.user$.next(user);
  }

  deleteUser(login: string) {
    this.httpClient.delete<IUserInfo[]>(
      `https://62af3aea3bbf46a3521e932f.mockapi.io/users/:${login}`
    );
    this.getUserInfos();
    this.user$.next(null);
  }

  getUser(): BehaviorSubject<IUser | null> {
    return this.user$;
  }

  login({ login, password }: ILoginInfo) {
    this.getUserInfos();
    const user = this.userInfos.find(
      (user) => user.login === login && user.password === password
    );
    if (user !== undefined) {
      this.user$.next(user);
    }
  }
}
