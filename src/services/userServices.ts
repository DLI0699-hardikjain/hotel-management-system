import { Booking } from '../models/Booking';

let Bookings: Booking[] = [];

export function addBooking(booking: Booking) {
    Bookings.push(booking);
}

export function getBookings() {
    return Bookings;
}

export function removeBooking(booking: Booking) {
    Bookings = Bookings.filter(b => b !== booking);
}

export function updateBooking(booking: Booking) {
    Bookings = Bookings.map(b => b.id === booking.id ? booking : b);
}

export function getBooking(id: number) {
    return Bookings.find(b => b.id === id);
}
