import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { SensorCModel } from '../models/sensorC-model';
import { Router } from "@angular/router";
import { SensorCService } from '../services/sensorC.service'

@Component({
  selector: 'app-sensorC',
  templateUrl: './sensorC.component.html',
  styleUrls: ['./sensorC.component.css']
})
export class SensorCComponent implements OnInit {
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaSensorC';
  name: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  constructor(private http: Http, private router: Router, private senService: SensorCService) { }

  ngOnInit() {
  }
  postSensorC(): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.router.navigateByUrl('/home');
    return this.http.post(this.apiRoot,{'id': this.senService.cont++,
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'descripcion': this.desc,
      'tipoSensor': 'SensorC',
      'estado': this.radioAct,
      'conectado': this.radioConec,
      'consume': false,
      'energia': 0,
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
