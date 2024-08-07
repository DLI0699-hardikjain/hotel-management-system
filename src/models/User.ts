import { Booking } from './Booking';

export class User {
  id: number;
  name: string;
  age: number;
  password: string;
  Bookings: Booking[];

    constructor(id: number, name: string, age: number, password: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password = password;
        this.Bookings = [];
    }
}