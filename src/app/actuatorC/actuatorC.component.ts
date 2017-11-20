import { Component, OnInit } from '@angular/core';
import {ActuatorCModel} from "../models/actuatorC-model";
import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import { ActuatorCService } from '../services/actuatorC.service';

@Component({
  selector: 'app-actuatorC',
  templateUrl: './actuatorC.component.html',
  styleUrls: ['./actuatorC.component.css']
})
export class ActuatorCComponent implements OnInit {
  apiRoot: string = 'http://localhost:8080/api/sistema/insertaActuadorC';
  name: string;
  speed: number;
  unit: string;
  building: string;
  room: string;
  desc: string;
  radioConec: boolean;
  radioAct: boolean;
  constructor(private http: Http, private router: Router, private actServ:ActuatorCService) { }

  ngOnInit() {
  }
  postActuadorC(): Promise<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.router.navigateByUrl('/home');
    return this.http.post(this.apiRoot,{
      'id': this.actServ.cont++,
      'nombre': this.name,
      'unidad': this.unit,
      'ubicacionE': this.building,
      'ubicacionC': this.room,
      'consumoEnergia': 0,
      'descripcion': this.desc,
      'tipoActuador': 'ActuadorC',
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
