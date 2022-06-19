import { ReactiveFormsModule } from '@angular/forms';
import { ButtonSuccessModule } from './../../../../shared/components/button-success/button-success.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ButtonSuccessModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
