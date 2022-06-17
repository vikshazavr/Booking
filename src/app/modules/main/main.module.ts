import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
import { HotelComponent } from './pages/hotel/hotel.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HotelComponent,
  ],
  imports: [MainRoutingModule],
})
export class MainModule {}
