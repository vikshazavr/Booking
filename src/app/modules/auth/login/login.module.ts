import { AuthHeaderModule } from './../components/header/auth.header.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const route: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(route),
    ReactiveFormsModule,
    AuthHeaderModule,
  ],
})
export class LoginModule {}
