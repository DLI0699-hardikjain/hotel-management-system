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
}