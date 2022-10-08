import { AccountModule } from './pages/account/account.module';
import { ProfileHeaderModule } from './components/profile-header/profile-header.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ProfileComponent } from './profile.component';

const route: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },
      { path: 'account', component: AccountComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
];

@NgModule({
  declarations: [ProfileComponent, BookingsComponent, ReviewsComponent],
  imports: [RouterModule.forChild(route), ProfileHeaderModule, AccountModule],
  providers: [],
})
export class ProfileModule {}
