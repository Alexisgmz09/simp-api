import { Component, OnInit } from '@angular/core';

import { HttpModule, Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { ActuatorAService } from '../services/actuatorA.service';
import { ActuatorAModel } from '../models/actuatorA-model';

import { ActuatorCService } from '../services/actuatorC.service';
import { ActuatorCModel } from '../models/actuatorC-model';

import { ActuatorFService } from '../services/actuatorF.service';
import { ActuatorFModel } from '../models/actuatorF-model';

import { SensorCService } from '../services/sensorC.service';
import { SensorCModel } from '../models/sensorC-model';

import { SensorMService } from '../services/sensorM.service';
import { SensorMModel } from '../models/sensorM-model';

import { SensorLService } from '../services/sensorL.service';
import { SensorLModel } from '../models/sensorL-model';

import { SensorTService } from '../services/sensorT.service';
import { SensorTModel } from '../models/sensorT-model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


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
  sensorsL: SensorLModel[] = [];
  sensorsT: SensorTModel[] = [];
  constructor(private actuatorAService: ActuatorAService, private actuatorCService: ActuatorCService,
              private actuatorFService: ActuatorFService, private sensorCService: SensorCService,
              private sensorMService: SensorMService, private sensorLService: SensorLService,
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
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = sensorsM);
    this.sensorLService.getSensorsL().then(sensorsL => this.sensorsL = sensorsL);
    this.sensorTService.getSensorsT().then(sensorsT => this.sensorsT = sensorsT);
  }
  deleteActuatorA( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarActuadorA',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
  }
  deleteActuatorC( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarActuadorC',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
  }
  deleteActuatorF( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarActuadorF',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
  }
  deleteSensorC( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarSensorC',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
  }
  deleteSensorL( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarSensorL',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
  }
  deleteSensorM( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarSensorM',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
  }
  deleteSensorT( id: number): void{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Access-Controll-Allow-Origin': 'http://localhost:4200/',
      'Access-Control-Allow-Credentials': true});
    let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/sistema/borrarSensorT',{
      'id': id,
      'estado': false
    }, options).toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(this.handleErrorPromise);
    window.location.reload();
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
