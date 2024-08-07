import { User } from './User';
import { Room } from './Room';

export class Booking {
    id: number;
    user: User;
    room: Room;
    startDate: Date;
    endDate: Date;
    
    constructor(id: number, user: User, room: Room, startDate: Date, endDate: Date) {
        this.id = id;
        this.user = user;
        this.room = room;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    
    getUser() {
        return this.user;
    }
    
    setUser(user: User) {
        this.user = user;
    }
    
    getRoom() {
        return this.room;
    }
    
    setRoom(room: Room) {
        this.room = room;
    }
    
    getStartDate() {
        return this.startDate;
    }
    
    setStartDate(startDate: Date) {
        this.startDate = startDate;
    }
    
    getEndDate() {
        return this.endDate;
    }
    
    setEndDate(endDate: Date) {
        this.endDate = endDate;
    }
    
    getId() {
        return this.id;
    }
    
    setId(id: number) {
        this.id = id;
    }
}