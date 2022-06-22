import { CommonModule } from '@angular/common';
import { HotelComponent } from './../hotel/hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteModule } from 'src/shared/components/autocomplete/autocomplete.module';
import { DatepickerModule } from 'src/shared/components/datepicker/datepicker.module';
import { AllHotelsComponent } from './all-hotels.component';
import { CardHotelModule } from 'src/shared/components/card-hotel/card-hotel.module';

const route: Routes = [
  {
    path: '',
    component: AllHotelsComponent,
    children: [
      {
        path: 'hotel',
        component: HotelComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AllHotelsComponent],
  imports: [
    DatepickerModule,
    AutocompleteModule,
    CardHotelModule,
    CommonModule,
    RouterModule.forChild(route),
  ],
})
export class AllHotelsModule {}
