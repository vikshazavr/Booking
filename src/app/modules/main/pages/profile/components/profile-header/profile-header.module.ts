import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileHeaderComponent } from './profile-header.component';

@NgModule({
  declarations: [ProfileHeaderComponent],
  imports: [RouterModule],
  exports: [ProfileHeaderComponent],
})
export class ProfileHeaderModule {}
