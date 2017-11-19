import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { RoomModel } from '../models/room-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: RoomModel[] = [];
  constructor(private roomService: RoomService ) { }

  ngOnInit() {
    this.roomService.getRooms().then(rooms => this.rooms = rooms.slice(0, 10));
  }

}
