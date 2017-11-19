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
  constructor(private actuatorAService: ActuatorAService, private actuatorCService: ActuatorCService, private actuatorFService: ActuatorFService, private sensorCService: SensorCService,
              private sensorMService: SensorMService)
  { }

  ngOnInit() {
    this.actuatorAService.getActuatorsA().then(actuatorsA => this.actuatorsA = actuatorsA);
    this.actuatorCService.getActuatorsC().then(actuatorsC => this.actuatorsC = actuatorsC);
    this.actuatorFService.getActuatorsF().then(actuatorsF => this.actuatorsF = actuatorsF);
    this.sensorCService.getSensorsC().then(sensorsC => this.sensorsC = sensorsC);
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = sensorsM);
  }

}
