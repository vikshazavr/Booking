import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonSuccessModule } from './../../../../../shared/components/button-success/button-success.module';
import { HotelComponent } from './hotel.component';

const route: Routes = [
  {
    path: '',
    component: HotelComponent,
  },
];

@NgModule({
  declarations: [HotelComponent],
  imports: [CommonModule, RouterModule.forChild(route), ButtonSuccessModule],
})
export class HotelModule {}
