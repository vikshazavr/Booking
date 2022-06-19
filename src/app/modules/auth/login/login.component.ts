import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonLabels } from 'src/shared/enums/button-labels.enum';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public buttonLabels = ButtonLabels;
  public form!: UntypedFormGroup;
  constructor(private router: Router, private userSvc: UserService) {
    this.redirectToHotels();
    this.userSvc.getUserInfos();
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  public onSubmit() {
    this.userSvc.login(this.form.value);
    this.redirectToHotels();
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
    this.userSvc.getUser().subscribe((val) => {
      if (val !== null) {
        this.router.navigateByUrl('/hotels');
      }
    });
  }
}
