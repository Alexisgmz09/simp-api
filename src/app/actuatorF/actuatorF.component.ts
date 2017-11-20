import { Component, OnInit } from '@angular/core';
import { ActuatorFModel } from '../models/actuatorF-model';
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-actuatorF',
  templateUrl: './actuatorF.component.html',
  styleUrls: ['./actuatorF.component.css']
})
export class ActuatorFComponent implements OnInit {
  name: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  cont = 1;
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaActuadorF';
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }
  postActuadorF(): Promise<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.router.navigateByUrl('/home');
    return this.http.post(this.apiRoot,{
      'id': this.cont++,
      'nombre': this.name,
      'unidad': 'lum',
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'consumoEnergia': 0,
      'descripcion': this.desc,
      'tipoActuador': 'ActuadorF',
      'estado': this.radioAct,
      'conectado': this.radioConec,
      'intensidad': 0
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
