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

import { SensorLService} from '../services/sensorL.service';
import { SensorLModel } from "../models/sensorL-model";

import { SensorTService} from '../services/sensorT.service';
import { SensorTModel } from "../models/sensorT-model";
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-state-sensor',
  templateUrl: './state-sensor.component.html',
  styleUrls: ['./state-sensor.component.css']
})
export class StateSensorComponent implements OnInit {
  actuatorsA: ActuatorAModel[] = [];
  actuatorsC: ActuatorCModel[] = [];
  actuatorsF: ActuatorFModel[] = [];
  sensorsC: SensorCModel[] = [];
  sensorsL: SensorLModel[] = [];
  sensorsM: SensorMModel[] = [];
  sensorsT: SensorTModel[] = [];

  constructor(private actuatorAService: ActuatorAService, private actuatorCService: ActuatorCService,
              private actuatorFService: ActuatorFService, private sensorCService: SensorCService,
              private sensorMService: SensorMService,  private sensorLService: SensorLService,
              private sensorTService: SensorTService, private http: Http, private router:Router,
              private userService:UserService) { }

  ngOnInit() {
    if(this.userService.user===undefined|| this.userService.user===""){
      this.router.navigateByUrl('/login');
    }
    this.actuatorAService.getActuatorsA().then(actuatorsA => this.actuatorsA = actuatorsA);
    this.actuatorCService.getActuatorsC().then(actuatorsC => this.actuatorsC = actuatorsC);
    this.actuatorFService.getActuatorsF().then(actuatorsF => this.actuatorsF = actuatorsF);
    this.sensorCService.getSensorsC().then(sensorsC => this.sensorsC = sensorsC);
    this.sensorLService.getSensorsL().then(sensorsL => this.sensorsL = sensorsL);
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = sensorsM);
    this.sensorTService.getSensorsT().then(sensorsT => this.sensorsT = sensorsT);
  }
  deleteActuatorA( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarActuadorA',{
      'id': id,
      'estado': state
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteActuatorC( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarActuadorC',{
      'id': id,
      'estado': state
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteActuatorF( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarActuadorF',{
      'id': id,
      'estado': state
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorC( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarSensorC',{
      'id': id,
      'estado': state
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorL( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarSensorL',{
      'id': id,
      'estado': state
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorM( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarSensorM',{
      'id': id,
      'estado': state
    }, options).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  deleteSensorT( id: number, state:boolean): Promise<Response>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    window.location.reload();
    return this.http.post('http://localhost:8080/api/sistema/apagarSensorT',{
      'id': id,
      'estado': state
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
