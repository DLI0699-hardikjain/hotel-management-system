const readlineSync = require('readline-sync');
import { Hotel } from './models/Hotel';
import { Booking } from './models/Booking';
import { User } from './models/User';
import { Room } from './models/Room';

const hotels: Hotel[] = [];
const users: User[] = [];
const bookings: Booking[] = [];

function displayAreas() {
    console.log('Available Areas:');
    hotels.map((hotel, idx) => {
        console.log(`${idx + 1}. ${hotel.city}`);
    });
    // filter it
}

function displayHotels(area: string) {
    console.log(`Hotels in ${area}:`);
    hotels.filter(hotel => hotel.city === area).map((hotel, idx) => {
        console.log(`${idx + 1}. ${hotel.name}`);
    });
}

function displayAvailableRooms(area: string, date: string) {
    console.log(`Available Rooms on ${date}:`);
    hotels.filter(hotel => hotel.city === area).map(hotel => {
        console.log(`Hotel: ${hotel.name}`);
        hotel.rooms.filter(room => room.isAvailable).map(room => {
            console.log(`Room: ${room.roomNumber}`);
        });
    });
}

function bookRoom(hotel: string, room: string) {
    if(!hotel) return console.log('Hotel not found!');
    if(!room) return console.log('Room not found!');

    console.log(`Booking room ${room}...`);
}

function addHotel() {
    console.log('Adding a new hotel...');
    const name = readlineSync.question('Enter the hotel name: ');
    const city = readlineSync.question('Enter the city: ');
    const id = hotels.length + 1;
    const hotel = new Hotel(id, name, city);
    hotel.addRoom(new Room(1, 101, true, name));
    hotels.push(hotel);
    console.log('Hotel added successfully!');
}

function addRooms(area: string, hotel: string) {
    console.log(`Adding rooms to ${hotel}...`);
    const selectedHotel = hotels.find(h => h.name === hotel && h.city === area);
    if(!selectedHotel) return console.log('Hotel not found!');
    const roomNumber = readlineSync.question('Enter the room number: ');
    const id = selectedHotel.rooms.length + 1;
    const room = new Room(id, parseInt(roomNumber), true, hotel);
    selectedHotel.addRoom(room);
    console.log('Room added successfully!');
}

function main() {
    console.log('Welcome to the Hotel Management System!');

    const area = readlineSync.question('Enter the area where you want a hotel: ');
    displayHotels(area);

    const date = readlineSync.question('Enter the date: ');
    displayAvailableRooms(area, date);

    const hotel = readlineSync.question('Enter the hotel name: ');
    const room = readlineSync.question('Enter the room number: ');
    bookRoom(hotel, room);

    const isAdmin = readlineSync.keyInYN('Are you an admin?');
    if (isAdmin) {
        addHotel();
        const hotel = readlineSync.question('Enter the hotel name: ');
        addRooms(area, hotel);
    }

    console.log('Thank you for using the Hotel Management System!');
}

main();