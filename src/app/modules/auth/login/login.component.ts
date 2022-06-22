import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ButtonLabels } from 'src/shared/enums/button-labels.enum';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public buttonLabels = ButtonLabels;
  public form!: UntypedFormGroup;
  constructor(private router: Router, private userSvc: UserService) {
    if (localStorage.getItem('login')) {
      this.redirectToHotels();
    }
    this.form = this.initForm();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    this.userSvc.login(this.form.value);
    this.form.setValue({
      login: '',
      password: '',
    });
  }

  private initForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      login: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  private redirectToHotels() {
    this.router.navigateByUrl('/hotels');
  }
}
