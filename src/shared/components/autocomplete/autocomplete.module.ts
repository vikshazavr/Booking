import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteComponent } from './autocomplete.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AutocompleteComponent],
  imports: [
    MatAutocompleteModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {}
