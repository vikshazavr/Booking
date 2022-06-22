import { Subscription } from 'rxjs';
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
import { ButtonLabels } from 'src/shared/enums/button-labels.enum';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public buttonLabels = ButtonLabels;
  public form!: UntypedFormGroup;
  constructor(private router: Router, private userSvc: UserService) {
    if (localStorage.getItem('login')) {
      this.redirectToHotels();
    }
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public onSubmit() {
    this.userSvc.addUser(this.form.value);
    this.redirectToHotels();
  }

  private initForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      firstName: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
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
