import { Room } from './Room';

export class Hotel {
    id: number;
    name: string;
    city: string;
    rooms: Room[];
    
    constructor(id: number, name: string, city: string) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.rooms = [];
    }
    
    addRoom(room: Room) {
        this.rooms.push(room);
    }
    
    getRooms() {
        return this.rooms;
    }
    
    removeRoom(room: Room) {
        this.rooms = this.rooms.filter(r => r !== room);
    }
    
    updateRoom(room: Room) {
        this.rooms = this.rooms.map(r => r.id === room.id ? room : r);
    }
    
    getRoom(id: number) {
        return this.rooms.find(r => r.id === id);
    }

    getAvailableRooms() {
        return this.rooms.filter(r => r.getIsAvailable());
    }

    getBookedRooms() {
        return this.rooms.filter(r => !r.getIsAvailable());
    }

    
}
