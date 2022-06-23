import { Pipe, PipeTransform } from '@angular/core';

// pricePerHotel?

@Pipe({ name: 'getPriceByHotelId', pure: false })
export class getPriceByHotelIdPipe implements PipeTransform {
  transform(
    pricePerHotel: { id: number; price: number }[],
    hotelId: number
  ): number {
    return pricePerHotel.find(
      (hotel: { id: number; price: number }) => hotel.id === hotelId
    )?.price!;
  }
}
