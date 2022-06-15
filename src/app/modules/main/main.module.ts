import { NgModule } from '@angular/core';
import { ButtonSuccessComponent } from 'src/shared/components/button-success/button-success.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HotelComponent } from './pages/hotel/hotel.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HotelComponent,
    AboutUsComponent,
    ButtonSuccessComponent,
  ],
  imports: [MainRoutingModule],
})
export class MainModule {}
