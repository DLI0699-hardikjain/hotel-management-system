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
}