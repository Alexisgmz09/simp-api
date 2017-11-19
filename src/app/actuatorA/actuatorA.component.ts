import { Component, OnInit } from '@angular/core';
import { ActuatorAModel } from '../models/actuatorA-model';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';


@Component({
  selector: 'app-actuatorA',
  templateUrl: './actuatorA.component.html',
  styleUrls: ['./actuatorA.component.css']
})
export class ActuatorAComponent implements OnInit {
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaActuadorA';
  name: string;
  speed: number;
  unit: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  cont = 1;
  actuador: ActuatorAModel = new ActuatorAModel(this.cont++, '', 0, '', '', '', 0, '',
    '', false, false, 0);
  constructor(private http: Http) { }

  ngOnInit() {
  }
  postActuadorA(): Promise<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiRoot,{
      'id': this.cont++,
      'nombre': this.name,
      'velocidad': this.speed,
      'unidad': this.unit,
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'consumoEnergia': 0,
      'descripcion': this.desc,
      'tipoActuador': 'ActuadorA',
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
