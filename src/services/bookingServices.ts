import { User } from '../models/User';
import { Room } from '../models/Room';
import { Booking } from '../models/Booking';

function getUser(booking: Booking) {
    return booking.user;
}

function setUser(booking: Booking, user: User) {
    booking.user = user;
}

function getRoom(booking: Booking) {
    return booking.room;
}

function setRoom(booking: Booking, room: Room) {
    booking.room = room;
}

function getStartDate(booking: Booking) {
    return booking.startDate;
}

function setStartDate(booking: Booking, startDate: Date) {
    booking.startDate = startDate;
}

function getEndDate(booking: Booking) {
    return booking.endDate;
}

function setEndDate(booking: Booking, endDate: Date) {
    booking.endDate = endDate;
}

function getId(booking: Booking) {
    return booking.id;
}

function setId(booking: Booking, id: number) {
    booking.id = id;
}

export const bookingServices = {
    getUser,
    setUser,
    getRoom,
    setRoom,
    getStartDate,
    setStartDate,
    getEndDate,
    setEndDate,
    getId,
    setId
};
