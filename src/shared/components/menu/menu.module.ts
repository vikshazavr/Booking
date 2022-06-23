import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [MatMenuModule, MatFormFieldModule, MatIconModule, RouterModule],
  exports: [MenuComponent],
})
export class MenuModule {}
