import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { IHotel } from './../../../../../shared/interfaces/hotel.interface';
import { IRoom } from './../../../../../shared/interfaces/room.interface';
import { HotelService } from './../../../../../shared/services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss'],
})
export class AllHotelsComponent implements OnInit {
  public hotels: IHotel[] = [];
  public rooms: IRoom[] = [];
  public pricePerHotel: { id: number; price: number }[] = [];
  constructor(private hotelSvc: HotelService) {
    // this.hotelSvc.loadHotels();
    this.hotelSvc
      .getHotels()
      .pipe(filter((hotels) => hotels.length > 0))
      .subscribe((hotels) => {
        this.hotels = hotels;
        for (let hotel of this.hotels) {
          let cur = [];
          let prev = [];
          this.hotelSvc
            .getRoomsByHotelId(hotel.id)
            .pipe(filter((value) => value.length > 0))
            .subscribe((rooms) => {
              //TODO: so many
              this.rooms = rooms;
              this.getPrice(hotel);
            });
        }
      });
  }

  ngOnInit(): void {}

  private getPrice(hotel: IHotel) {
    if (this.rooms[0].hotelId === hotel.id) {
      this.rooms.sort((a, b) => a.price - b.price);
      this.pricePerHotel.push({
        id: hotel.id,
        price: this.rooms[0].price,
      });
    }
  }
}
