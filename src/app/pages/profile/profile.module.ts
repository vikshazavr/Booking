import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ProfileComponent } from './profile.component';

const router: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'review', component: ReviewsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    AccountComponent,
    BookingsComponent,
    ReviewsComponent,
  ],
  imports: [RouterModule.forChild(router)],
  providers: [],
})
export class ProfileModule {}
