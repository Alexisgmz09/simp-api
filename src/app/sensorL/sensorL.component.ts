import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { SensorLService } from '../services/sensorL.service';

@Component({
  selector: 'app-sensorL',
  templateUrl: './sensorL.component.html',
  styleUrls: ['./sensorL.component.css']
})
export class SensorLComponent implements OnInit {
  name: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaSensorL';
  constructor(private http: Http, private router: Router, private senServ: SensorLService) { }

  ngOnInit() {
  }
  postSensorL(): Promise<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.router.navigateByUrl('/home');
    return this.http.post(this.apiRoot,{
      'id': this.senServ.cont++,
      'nombre': this.name,
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'descripcion': this.desc,
      'tipoSensor': 'SensorL',
      'estado': this.radioAct,
      'conectado': this.radioConec,
      'luzAmbiente': 0,
      'luzArtificial':0
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
