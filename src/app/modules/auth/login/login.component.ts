import { ButtonLabels } from './../../../../shared/enums/button-labels.enum';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { USER_CONFIG } from 'src/app/mock.data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  label = ButtonLabels.LOGIN;
  password = '';
  login = '';

  public logIn(): boolean {
    USER_CONFIG.login = this.login;
    USER_CONFIG.password = this.password;

    return true;
  }
  constructor() {}

  ngOnInit(): void {}
}
