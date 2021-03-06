import { MainGuard } from './../main.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from '../page-status-code/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'hotels',
        pathMatch: 'full',
      },
      {
        path: 'hotels',
        loadChildren: () =>
          import('./pages/all-hotels/all-hotels.module').then(
            (m) => m.AllHotelsModule
          ),
      },
      {
        path: 'hotel/:id',
        loadChildren: () =>
          import('./pages/hotel/hotel.module').then((m) => m.HotelModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
