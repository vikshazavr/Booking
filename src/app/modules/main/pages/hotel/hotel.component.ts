import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { HOTELS } from 'src/app/mock.data';
import { IRoom } from 'src/shared/interfaces/room.interface';
import { HotelService } from 'src/shared/services/hotel.service';
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

  constructor(private route: ActivatedRoute, private hotelSvc: HotelService) {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => {
        this.id = +data;
        this.hotelSvc
          .getHotels()
          .pipe(filter((hotels) => hotels.length > 0))
          .subscribe((hotels) => {
            this.hotelSvc
              .getHotelById(this.id!)
              .pipe(filter((hotel) => hotel !== null))
              .subscribe((hotel) => {
                this.hotel = hotel!;
                this.hotelSvc
                  .getRoomsByHotelId(this.id!)
                  .pipe(filter((rooms) => rooms.length > 0))
                  .subscribe((rooms) => {
                    this.rooms = rooms;
                  });
              });
          });
      });
  }
  ngOnInit() {}
}
