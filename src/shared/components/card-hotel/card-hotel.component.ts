import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from './../../interfaces/hotel.interface';

@Component({
  selector: 'app-card-hotel',
  templateUrl: './card-hotel.component.html',
  styleUrls: ['./card-hotel.component.scss'],
})
export class CardHotelComponent implements OnInit {
  @Input() hotel!: IHotel;
  constructor() {}

  ngOnInit(): void {}
}
