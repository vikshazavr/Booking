import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AllHotelsComponent } from './pages/all-hotels/all-hotels.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ProfileModule } from './pages/profile/profile.module';

const routes: Routes = [
  { path: '', component: AllHotelsComponent },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'hotel', component: HotelComponent },
  { path: 'aboutus', component: AboutUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelComponent,
    AboutUsComponent,
    AllHotelsComponent,
  ],
  imports: [ProfileModule, BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
