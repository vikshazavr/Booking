import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent, RouterModule],
})
export class FooterModule {}
