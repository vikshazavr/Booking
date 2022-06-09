import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerModule } from './../../../shared/components/datepicker/datepicker.module';
import { AllHotelsComponent } from './all-hotels.component';
const routes: Routes = [
  {
    path: '',
    component: AllHotelsComponent,
  },
];

@NgModule({
  declarations: [AllHotelsComponent],
  imports: [DatepickerModule, RouterModule.forChild(routes)],
})
export class AllHotelsModule {}
