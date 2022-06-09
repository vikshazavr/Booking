import { DatepickerModule } from './../shared/components/datepicker/datepicker.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ButtonSuccessComponent } from '../shared/components/button-success/button-success.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AllHotelsModule } from './pages/all-hotels/all-hotels.module';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ProfileModule } from './pages/profile/profile.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/all-hotels/all-hotels.module').then(
        (m) => m.AllHotelsModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  { path: 'hotel', component: HotelComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelComponent,
    AboutUsComponent,
    ButtonSuccessComponent,
  ],
  imports: [
    ProfileModule,
    AllHotelsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
