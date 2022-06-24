import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IHotel } from './../interfaces/hotel.interface';
import { IRoom } from './../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class HotelService implements OnDestroy {
  private hotels: IHotel[] = [];
  private rooms: IRoom[] = [];

  private readonly hotel$ = new BehaviorSubject<IHotel | null>(null);
  private readonly hotels$ = new BehaviorSubject<IHotel[]>([]);
  private readonly rooms$ = new BehaviorSubject<IRoom[]>([]);
  private subscription: Subscription = new Subscription();

  constructor(private httpClient: HttpClient) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getHotels() {
    const subscription = this.httpClient
      .get<IHotel[]>('https://62af3aea3bbf46a3521e932f.mockapi.io/hotels')
      .subscribe((value) => {
        this.hotels = value;
        this.hotels$.next(this.hotels);
      });

    this.subscription.add(subscription);
    return this.hotels$;
  }

  getHotelById(id: number) {
    const hotel = this.hotels.find((hotel) => hotel.id == id)!;
    this.hotel$.next(hotel);
    return this.hotel$;
  }

  getRoomsByHotelId(id: number | string) {
    const subscription = this.httpClient
      .get<IRoom[]>(
        `https://62af3aea3bbf46a3521e932f.mockapi.io/hotels/${id}/rooms`
      )
      .subscribe((rooms) => {
        this.rooms = rooms;
        this.rooms$.next(this.rooms);
      });
    this.subscription.add(subscription);
    return this.rooms$;
  }
}
