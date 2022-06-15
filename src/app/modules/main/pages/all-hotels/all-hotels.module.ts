import { HotelComponent } from './../hotel/hotel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteModule } from 'src/shared/components/autocomplete/autocomplete.module';
import { DatepickerModule } from 'src/shared/components/datepicker/datepicker.module';
import { AllHotelsComponent } from './all-hotels.component';

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
  imports: [DatepickerModule, AutocompleteModule, RouterModule.forChild(route)],
})
export class AllHotelsModule {}
