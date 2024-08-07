import {Hotel} from '../models/Hotel';
import {Room} from '../models/Room';

function book(room: Room) {
    room.isAvailable = false;
}

function unbook(room: Room) {
    room.isAvailable = true;
}

function isBooked(room: Room) {
    return !room.isAvailable;
}

function getHotel(room: Room) {
    return room.hotel;
}

function setHotel(room: Room, hotel: string) {
    room.hotel = hotel;
}

function getRoomNumber(room: Room) {
    return room.roomNumber;
}

function setRoomNumber(room: Room, roomNumber: number) {
    room.roomNumber = roomNumber;
}

function getIsAvailable(room: Room) {
    return room.isAvailable;
}

function setIsAvailable(room: Room, isAvailable: boolean) {
    room.isAvailable = isAvailable;
}

function getId(room: Room) {
    return room.id;
}

function setId(room: Room, id: number) {
    room.id = id;
}

export const roomServices = {
    book,
    unbook,
    isBooked,
    getHotel,
    setHotel,
    getRoomNumber,
    setRoomNumber,
    getIsAvailable,
    setIsAvailable,
    getId,
    setId
};
