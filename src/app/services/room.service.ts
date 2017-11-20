import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { RoomModel } from '../models/room-model';

@Injectable()

export class RoomService {
  apiRoot = 'http://localhost:8080/api/sistema/cuartos';
  rooms: RoomModel[];
  cont:number;

  constructor(private http: Http) {
    this.rooms = [];
    this.cont=1;
  }

  getRooms(): Promise<RoomModel[]> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.rooms = res.json().map((item: any) => {
              return new RoomModel(
                item.id,
                item.nombre,
                item.maxVelocidad,
                item.minVelocidad,
                item.ubicacionE,
                item.ubicacionC,
                item.maxconsumoEnergia,
                item.minconsumoEnergia,
                item.maxtemperatura,
                item.mintemperatura,
                item.threshold
              );
            });
            resolve(this.rooms);
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;

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
