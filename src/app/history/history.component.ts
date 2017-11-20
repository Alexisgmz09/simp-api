import {Component, OnInit} from '@angular/core';

import { ActuatorAModel } from '../models/actuatorA-model';
import { ActuatorAService } from '../services/actuatorA.service';
import { ActuatorCModel } from '../models/actuatorC-model';
import { ActuatorCService } from '../services/actuatorC.service';
import { ActuatorFModel } from '../models/actuatorF-model';
import { ActuatorFService } from '../services/actuatorF.service';

import { SensorCModel } from '../models/sensorC-model';
import { SensorCService } from '../services/sensorC.service';
import { SensorMModel } from '../models/sensorM-model';
import { SensorMService } from '../services/sensorM.service';
import { SensorLModel } from '../models/sensorL-model';
import { SensorLService } from '../services/sensorL.service';
import { SensorTModel } from '../models/sensorT-model';
import { SensorTService } from '../services/sensorT.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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
              private sensorTService: SensorTService, private userService:UserService,
              private router:Router) {
  }

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

}
