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

    addBooking(booking: Booking) {
        this.Bookings.push(booking);
    }

    getBookings() {
        return this.Bookings;
    }

    removeBooking(booking: Booking) {
        this.Bookings = this.Bookings.filter(b => b !== booking);
    }

    updateBooking(booking: Booking) {
        this.Bookings = this.Bookings.map(b => b.id === booking.id ? booking : b);
    }

    getBooking(id: number) {
        return this.Bookings.find(b => b.id === id);
    }

    
}