import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ButtonSuccessModule } from './../../../../../../../shared/components/button-success/button-success.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [ButtonSuccessModule, ReactiveFormsModule],
  exports: [AccountComponent],
})
export class AccountModule {}
