import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { RoomModel } from '../models/room-model';
import { Router } from "@angular/router";
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaCuarto';
  name: string;
  building: string;
  loc: string;
  minene: number;
  maxene: number;
  mintem: number;
  maxtem: number;
  minvel: number;
  maxvel: number;
  cont = 1;
  room: RoomModel = new RoomModel(this.cont++, ' ', 0, 0, ' ', ' ', 0, 0, 0, 0);
  constructor(private http: Http, private router: Router) {}

  ngOnInit() {
  }
  postRoom(): Promise<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.router.navigateByUrl('/home');
    return this.http.post(this.apiRoot, {'id': this.cont++, 'nombre': this.name, 'ubicacionE': this.building, 'ubicacionC': this.loc,
      'minconsumoEnergia': this.minene, 'maxconsumoEnergia': this.maxene, 'mintemperatura': this.mintem, 'maxtemperatura': this.maxtem,
      'minVelocidad': this.minvel, 'maxVelocidad': this.maxvel }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}


