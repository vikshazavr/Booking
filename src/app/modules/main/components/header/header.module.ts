import { NgModule } from '@angular/core';
import { MenuModule } from './../../../../../shared/components/menu/menu.module';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [HeaderComponent],
  imports: [MenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
