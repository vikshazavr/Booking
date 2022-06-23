import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { HOTELS } from 'src/app/mock.data';
import { IRoom } from 'src/shared/interfaces/room.interface';
import { IHotel } from './../../../../../shared/interfaces/hotel.interface';
import { ROOMS } from './../../../../mock.data';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  public id: number | undefined;
  public hotel!: IHotel;
  public rooms: IRoom[] = [];
  public label: string = 'reserve';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => {
        this.id = +data;
        this.hotel = HOTELS.find((hotel) => hotel.id === this.id)!;
        this.rooms = ROOMS.filter((room: IRoom) => room.hotelId === this.id)!;
      });
  }
}
