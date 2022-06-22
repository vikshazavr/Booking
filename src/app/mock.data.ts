import { IHotel } from './../shared/interfaces/hotel.interface';
import { IRoom } from './../shared/interfaces/room.interface';
export const USER_CONFIG = {
  login: '',
  password: '',
  firstName: '',
  lastName: '',
};
export const HOTELS: IHotel[] = [
  {
    id: 1,
    name: 'Raf',
    description:
      'This property is 1 minute walk from the beach. Opposite Durban`s famous beachfront, Blue Waters Hotel is within walking distance of the Suncoast Casino and the iconic Moses Mabhida Stadium. Both uShaka Marine World and Greyville Racecourse are within 2.5 mi from the property"city',
    starRating: 3,
    country: 'South Africa',
    city: 'Durban',
    street: 'Snell Parade',
    houseNumber: 175,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/233371734.jpg?k=6947fb9d8cb5304aab445c8041c30c8296c2df5be70db8aed6634c292064bc63&o=&hp=1',
  },
  {
    id: 2,
    name: 'Blue Waters',
    description:
      'This property is 1 minute walk from the beach. Opposite Durban`s famous beachfront, Blue Waters Hotel is within walking distance of the Suncoast Casino and the iconic Moses Mabhida Stadium. Both uShaka Marine World and Greyville Racecourse are within 2.5 mi from the property"city',
    starRating: 4,
    country: 'South Africa',
    city: 'Durban',
    street: 'Snell Parade',
    houseNumber: 173,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/20215163.jpg?k=2a56b14af3ac53d9cf04f58935d20108b53973ad3856b4053c05c8b8d78b91a8&o=&hp=1',
  },
  {
    id: 3,
    name: 'SunCoast Towers-SunSquare Suncoast',
    description:
      'A fresh breakfast is served daily at the Riviera Restaurant, which also offers an à la carte menu for lunch and dinner. Guests can relax in the evening with a cocktail at the Riviera Bar.',
    starRating: 2,
    country: 'South Africa',
    city: 'Durban',
    street: 'Battery Beach Road',
    houseNumber: 20,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17771563.jpg?k=5eb618f50bf8e9dd4efcef585d9e7afbdb46fd9cd825267a5946042c81dba48b&o=&hp=1',
  },
];

export const ROOM: IRoom[] = [
  {
    hotelId: 1,
    type: 'Standard Double Room',
    sleeps: 2,
    price: 409,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/315475896.jpg?k=125bb1535d02a48bde4b4a2a33c4ec812602e5e6255606886f874046451a11be&o=&hp=1',
  },
  {
    hotelId: 1,
    type: 'Twin Room',
    sleeps: 2,
    price: 380,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/315475913.jpg?k=df91d0f25124e5d565e383d0b23dbd3068939673456a39783e8d9278af7a7307&o=&hp=1',
  },
  {
    hotelId: 1,
    type: 'Standard Room',
    sleeps: 3,
    price: 510,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/303248287.jpg?k=f236ae07e4183519230b3650730fc64b916d88225959897b9f744604769e32aa&o=&hp=1',
  },
  {
    hotelId: 1,
    type: 'Family Room',
    sleeps: 4,
    price: 620,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/315475897.jpg?k=5d3a39e09cb58ca3bcda6c01d8bb9f83a6adb9cc07a4df16c332372d8537905d&o=&hp=1',
  },
  {
    hotelId: 2,
    type: 'Standard Double Room',
    sleeps: 2,
    price: 340,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/315475896.jpg?k=125bb1535d02a48bde4b4a2a33c4ec812602e5e6255606886f874046451a11be&o=&hp=1',
  },
  {
    hotelId: 2,
    type: 'Standard Room',
    sleeps: 3,
    price: 390,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/303248287.jpg?k=f236ae07e4183519230b3650730fc64b916d88225959897b9f744604769e32aa&o=&hp=1',
  },
  {
    hotelId: 2,
    type: 'Family Room',
    sleeps: 4,
    price: 570,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/315475897.jpg?k=5d3a39e09cb58ca3bcda6c01d8bb9f83a6adb9cc07a4df16c332372d8537905d&o=&hp=1',
  },
  {
    hotelId: 3,
    type: 'Standard Double Room',
    sleeps: 2,
    price: 210,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/315475896.jpg?k=125bb1535d02a48bde4b4a2a33c4ec812602e5e6255606886f874046451a11be&o=&hp=1',
  },
  {
    hotelId: 3,
    type: 'Standard Room',
    sleeps: 3,
    price: 350,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/303248287.jpg?k=f236ae07e4183519230b3650730fc64b916d88225959897b9f744604769e32aa&o=&hp=1',
  },
  {
    hotelId: 3,
    type: 'Family Room',
    sleeps: 4,
    price: 510,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/315475897.jpg?k=5d3a39e09cb58ca3bcda6c01d8bb9f83a6adb9cc07a4df16c332372d8537905d&o=&hp=1',
  },
];
