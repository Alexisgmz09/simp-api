import { Component, OnInit } from '@angular/core';
import { SensorMModel } from '../models/sensorM-model';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { SensorMService } from '../services/sensorM.service';

@Component({
  selector: 'app-sensorM',
  templateUrl: './sensorM.component.html',
  styleUrls: ['./sensorM.component.css']
})
export class SensorMComponent implements OnInit {
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaSensorM';
  name: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  constructor(private http: Http, private router: Router,private senServ:SensorMService) { }

  ngOnInit() {
  }
  postSensorM(): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.router.navigateByUrl('/home');
    return this.http.post(this.apiRoot,{
      'id': this.senServ.cont++,
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'descripcion': this.desc,
      'tipoSensor': 'SensorM',
      'estado': this.radioAct,
      'conectado': this.radioConec,
      'movimiento': false,
      'nombre': this.name
    }, options).toPromise()
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
