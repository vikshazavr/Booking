import { IUserInfo } from './../../../../../../../shared/interfaces/user.interface';
import { UserService } from 'src/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  form!: UntypedFormGroup;
  user: IUserInfo | null = null;
  label: string = 'Save';
  constructor(private userSrv: UserService) {}
  ngOnInit(): void {
    this.userSrv.getUser().subscribe((user) => {
      this.user = user;
      this.form = this.initForm();
    });
  }

  public onSubmit() {
    console.log(1111, { ...this.form.getRawValue(), id: this.user!.id });
    this.userSrv.changeUserInfo({
      ...this.form.getRawValue(),
      id: this.user!.id,
    });
    // this.http.put('asdasdxcnfdfas : ${id}', newUser);
  }

  private initForm(): UntypedFormGroup {
    return new UntypedFormGroup({
      firstName: new UntypedFormControl(this.user?.firstName, [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new UntypedFormControl(this.user?.lastName, [
        Validators.required,
        Validators.minLength(5),
      ]),
      login: new UntypedFormControl(this.user?.login, [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new UntypedFormControl(this.user?.password, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  public validateFileType() {
    var fileName = (<HTMLInputElement>document.getElementById('image')).value;
    var idxDot = fileName.lastIndexOf('.') + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile !== 'jpg' || extFile !== 'jpeg' || extFile !== 'png') {
      alert('Only jpg/jpeg and png files are allowed!');
    }
  }
}
