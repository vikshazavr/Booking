import { RouterModule } from '@angular/router';
import { ButtonSuccessModule } from '../../../../../shared/components/button-success/button-success.module';
import { NgModule } from '@angular/core';
import { AuthHeaderComponent } from './auth.header.component';

@NgModule({
  declarations: [AuthHeaderComponent],
  imports: [ButtonSuccessModule, RouterModule],
  exports: [AuthHeaderComponent],
})
export class AuthHeaderModule {}
