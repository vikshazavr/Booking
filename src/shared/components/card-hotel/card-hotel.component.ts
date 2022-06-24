import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IHotel } from './../../interfaces/hotel.interface';
import { IRoom } from './../../interfaces/room.interface';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss'],
})
export class CardHotelComponent {
  @Input() hotel!: IHotel;
  @Input() roomPrice!: IRoom['price'];
  public label: string = 'Reserve';
  constructor(private router: Router) {}

  redirectToHotelById(id: number) {
    this.router.navigateByUrl(`/hotel/${id}`);
  }
}
