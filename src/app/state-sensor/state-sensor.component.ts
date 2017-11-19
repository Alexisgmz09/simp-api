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

import { SensorLComponent } from '../sensorL/sensorL.component';

@Component({
  selector: 'app-state-sensor',
  templateUrl: './state-sensor.component.html',
  styleUrls: ['./state-sensor.component.css']
})
export class StateSensorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
