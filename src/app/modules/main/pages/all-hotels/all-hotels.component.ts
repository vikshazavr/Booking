import { HOTELS } from './../../../../mock.data';
import { IHotel } from './../../../../../shared/interfaces/hotel.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss'],
})
export class AllHotelsComponent implements OnInit {
  public hotels: IHotel[] = HOTELS;
  constructor() {}

  ngOnInit(): void {}
}
