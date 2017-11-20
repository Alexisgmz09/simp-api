import { Component, OnInit } from '@angular/core';

import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { ActuatorAService } from "../services/actuatorA.service";
import { ActuatorAModel } from "../models/actuatorA-model";

import { ActuatorCService } from "../services/actuatorC.service";
import { ActuatorCModel } from "../models/actuatorC-model";

import { ActuatorFService } from "../services/actuatorF.service";
import { ActuatorFModel } from "../models/actuatorF-model";

import { SensorCService } from "../services/sensorC.service";
import { SensorCModel } from "../models/sensorC-model";

import { SensorMService } from "../services/sensorM.service";
import { SensorMModel } from "../models/sensorM-model";

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  actuatorsA: ActuatorAModel[] = [];
  actuatorsC: ActuatorCModel[] = [];
  actuatorsF: ActuatorFModel[] = [];
  sensorsC: SensorCModel[] = [];
  sensorsM: SensorMModel[] = [];
  constructor(private actuatorAService: ActuatorAService, private actuatorCService: ActuatorCService,
              private actuatorFService: ActuatorFService, private sensorCService: SensorCService,
              private sensorMService: SensorMService, private http: Http) { }

  ngOnInit() {
    this.actuatorAService.getActuatorsA().then(actuatorsA => this.actuatorsA = actuatorsA);
    this.actuatorCService.getActuatorsC().then(actuatorsC => this.actuatorsC = actuatorsC);
    this.actuatorFService.getActuatorsF().then(actuatorsF => this.actuatorsF = actuatorsF);
    this.sensorCService.getSensorsC().then(sensorsC => this.sensorsC = sensorsC);
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = sensorsM);
  }
  deleteActuatorA( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarActuadorA',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteActuatorC( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarActuadorC',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteActuatorF( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarActuadorF',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorC( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarSensorC',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorL( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarSensorL',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorM( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarSensorM',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorT( id: number): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    return this.http.post('localhost:8080/api/sistema/borrarSensorT',{
      'id': id,
      'estado': false
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
