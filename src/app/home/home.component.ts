import { Component, OnInit } from '@angular/core';

import { RoomService } from '../services/room.service';
import { RoomModel } from '../models/room-model';

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





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: RoomModel[] = [];

  actuatorsA: ActuatorAModel[] = [];
  actuatorsC: ActuatorCModel[] = [];
  actuatorsF: ActuatorFModel[] = [];

  sensorsC: SensorCModel[] = [];
  sensorsM: SensorMModel[] = [];

  constructor(private roomService: RoomService, private actuatorAService: ActuatorAService,
              private actuatorCService: ActuatorCService, private actuatorFService: ActuatorFService,
              private sensorCService: SensorCService, private sensorMService: SensorMService) { }

  ngOnInit() {
    this.roomService.getRooms().then(rooms => this.rooms = rooms.slice(0, 10));

    this.actuatorAService.getActuatorsA().then(actuatorsA => this.actuatorsA = this.actuatorsA.slice(0, 2));
    this.actuatorCService.getActuatorsC().then(actuatorsC => this.actuatorsC = this.actuatorsC.slice(0, 2));
    this.actuatorFService.getActuatorsF().then(actuatorsF => this.actuatorsF = this.actuatorsF.slice(0, 2));

    this.sensorCService.getSensorsC().then(sensorsC => this.sensorsC = this.sensorsC.slice(0, 4));
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = this.sensorsM.slice(0, 4));
  }

}
