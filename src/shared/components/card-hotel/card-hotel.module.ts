import { CommonModule } from '@angular/common';
import { ButtonSuccessModule } from './../button-success/button-success.module';
import { NgModule } from '@angular/core';
import { CardHotelComponent } from './card-hotel.component';

@NgModule({
  declarations: [CardHotelComponent],
  imports: [ButtonSuccessModule, CommonModule],
  exports: [CardHotelComponent],
})
export class CardHotelModule {}
