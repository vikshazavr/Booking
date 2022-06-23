import { NgModule } from '@angular/core';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
@NgModule({
  declarations: [MainComponent],
  imports: [MainRoutingModule, HeaderModule, FooterModule],
})
export class MainModule {}
