import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthHeaderModule } from './../components/header/auth.header.module';
import { RegistrationComponent } from './registration.component';

const route: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    RouterModule.forChild(route),
    ReactiveFormsModule,
    AuthHeaderModule,
  ],
})
export class RegistrationModule {}
