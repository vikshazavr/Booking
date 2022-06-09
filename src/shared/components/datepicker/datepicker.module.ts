import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatepickerComponent } from './datepicker.component';
@NgModule({
  declarations: [DatepickerComponent],
  imports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
