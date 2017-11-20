import { Component, OnInit } from '@angular/core';


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

  constructor(private actuatorAService: ActuatorAService, private actuatorCService: ActuatorCService, private actuatorFService: ActuatorFService, private sensorCService: SensorCService,
              private sensorMService: SensorMService,  private sensorLService: SensorLService,  private sensorTService: SensorTService) { }

  ngOnInit() {

    this.actuatorAService.getActuatorsA().then(actuatorsA => this.actuatorsA = actuatorsA);
    this.actuatorCService.getActuatorsC().then(actuatorsC => this.actuatorsC = actuatorsC);
    this.actuatorFService.getActuatorsF().then(actuatorsF => this.actuatorsF = actuatorsF);
    this.sensorCService.getSensorsC().then(sensorsC => this.sensorsC = sensorsC);
    this.sensorLService.getSensorsL().then(sensorsL => this.sensorsL = sensorsL);
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = sensorsM);
    this.sensorTService.getSensorsT().then(sensorsT => this.sensorsT = sensorsT);
  }

}
