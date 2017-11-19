import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { RoomModel } from '../models/room-model';

@Injectable()

export class RoomService {
  apiRoot = 'http://localhost:8080/api/sistema/cuartos';
  rooms: RoomModel[];

  constructor(private http: Http) {
    this.rooms = [];
  }

  getRooms(): Promise<RoomModel[]> {
    const apiURL = `${this.apiRoot}`;
    return this.http.get(apiURL)
      .toPromise()
      .then(
        res =>  // Success
          res.json().rooms as RoomModel[]
      ).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getRoom(id: number): Promise<RoomModel> {
    return this.getRooms()
      .then(rooms => rooms.find(room => room.id === id));
  }

}
