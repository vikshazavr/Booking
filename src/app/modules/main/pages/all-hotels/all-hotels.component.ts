import { IRoom } from './../../../../../shared/interfaces/room.interface';
import { HOTELS, ROOMS } from './../../../../mock.data';
import { IHotel } from './../../../../../shared/interfaces/hotel.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss'],
})
export class AllHotelsComponent implements OnInit {
  public hotels: IHotel[] = HOTELS;
  public rooms: IRoom[] = ROOMS;
  public pricePerHotel: { id: number; price: number }[] = [];
  constructor() {}

  getPrice() {
    this.hotels.forEach((hotel) => {
      const roomsByHotelId = this.rooms.filter(
        (room) => room.hotelId === hotel.id
      );
      roomsByHotelId.sort((a, b) => a.price - b.price);
      this.pricePerHotel.push({ id: hotel.id, price: roomsByHotelId[0].price });
    });
  }

  ngOnInit(): void {
    this.getPrice();
  }

  getMinPriceByHotelId(id: number): number {
    return this.pricePerHotel.find((el) => el.id === id)?.price!;
  }
}
