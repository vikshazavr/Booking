import { Router } from '@angular/router';
import { IRoom } from './../../interfaces/room.interface';
import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from './../../interfaces/hotel.interface';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss'],
})
export class CardHotelComponent implements OnInit {
  @Input() hotel!: IHotel;
  @Input() roomPrice!: IRoom['price'];
  public label: string = 'Reserve';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToHotelById(id: number) {
    console.log(111);

    this.router.navigateByUrl(`/hotel/${id}`);
  }
}
