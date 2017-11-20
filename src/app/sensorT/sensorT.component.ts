import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-sensorT',
  templateUrl: './sensorT.component.html',
  styleUrls: ['./sensorT.component.css']
})
export class SensorTComponent implements OnInit {
  name: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  cont = 1;
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaSensorT';
  constructor(private http: Http) { }

  ngOnInit() {
  }
  postSensorL(): Promise<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiRoot,{
      'id': this.cont++,
      'nombre': this.name,
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'descripcion': this.desc,
      'tipoSensor': 'SensorT',
      'estado': this.radioAct,
      'conectado': this.radioConec,
      'temperatura': 0
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
