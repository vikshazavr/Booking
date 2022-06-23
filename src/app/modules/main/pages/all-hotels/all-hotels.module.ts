import { CommonModule } from '@angular/common';
import { HotelComponent } from './../hotel/hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteModule } from 'src/shared/components/autocomplete/autocomplete.module';
import { DatepickerModule } from 'src/shared/components/datepicker/datepicker.module';
import { AllHotelsComponent } from './all-hotels.component';
import { CardHotelModule } from 'src/shared/components/card-hotel/card-hotel.module';
import { getPriceByHotelIdPipe } from 'src/shared/pipes/get-price-by-hotel-id.pipe';

const route: Routes = [
  {
    path: '',
    component: AllHotelsComponent,
    children: [
      {
        path: 'hotel/:id',
        component: HotelComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AllHotelsComponent, getPriceByHotelIdPipe],
  imports: [
    DatepickerModule,
    AutocompleteModule,
    CardHotelModule,
    CommonModule,
    RouterModule.forChild(route),
  ],
})
export class AllHotelsModule {}
