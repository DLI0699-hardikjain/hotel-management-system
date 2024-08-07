import {Hotel} from './Hotel';

export class Room {
    id: number;
    roomNumber: number;
    isAvailable: boolean;
    hotel: string;
    
    constructor(id: number, roomNumber: number, isAvailable: boolean, hotel: string) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.isAvailable = isAvailable;
        this.hotel = hotel;
    }
    
    book() {
        this.isAvailable = false;
    }
    
    unbook() {
        this.isAvailable = true;
    }
    
    isBooked() {
        return !this.isAvailable;
    }
    
    getHotel() {
        return this.hotel;
    }
    
    setHotel(hotel: string) {
        this.hotel = hotel;
    }
    
    getRoomNumber() {
        return this.roomNumber;
    }
    
    setRoomNumber(roomNumber: number) {
        this.roomNumber = roomNumber;
    }
    
    getIsAvailable() {
        return this.isAvailable;
    }
    
    setIsAvailable(isAvailable: boolean) {
        this.isAvailable = isAvailable;
    }
    
    getId() {
        return this.id;
    }
    
    setId(id: number) {
        this.id = id;
    }
}