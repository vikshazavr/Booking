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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
  public buttonLabels = ButtonLabels;
  public form!: UntypedFormGroup;
  constructor(private router: Router, private userSvc: UserService) {
    this.redirectToHotels();
  }

  ngOnInit(): void {
    this.form = this.initForm();
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
    this.userSvc.getUser().subscribe((val) => {
      if (val !== null) {
        this.router.navigateByUrl('/hotels');
      }
    });
  }
}
