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
import { SensorTModel } from '../models/sensorT-model';
import { SensorTService } from '../services/sensorT.service';
import { SensorLModel } from '../models/sensorL-model';
import { SensorLService } from '../services/sensorL.service';
import { Router } from "@angular/router";
import { UserService } from '../services/user.service';





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
  sensorsT: SensorTModel[] = [];
  sensorsL: SensorLModel[] = [];

  constructor(private roomService: RoomService, private actuatorAService: ActuatorAService,
              private actuatorCService: ActuatorCService, private actuatorFService: ActuatorFService,
              private sensorCService: SensorCService, private sensorMService: SensorMService,
              private sensorTService: SensorTService, private sensorLService: SensorLService, private router:Router,
              private userService:UserService) { }

  ngOnInit() {
    console.log(this.userService.user);
    if(this.userService.user===undefined|| this.userService.user===""){
      this.router.navigateByUrl('/login');
    }
    this.roomService.getRooms().then(rooms => this.rooms = rooms.slice(0, 10));

    this.actuatorAService.getActuatorsA().then(actuatorsA => this.actuatorsA = actuatorsA.slice(0, 2));
    this.actuatorCService.getActuatorsC().then(actuatorsC => this.actuatorsC = actuatorsC.slice(0, 2));
    this.actuatorFService.getActuatorsF().then(actuatorsF => this.actuatorsF = actuatorsF.slice(0, 2));

    this.sensorCService.getSensorsC().then(sensorsC => this.sensorsC = sensorsC.slice(0, 1));
    this.sensorMService.getSensorsM().then(sensorsM => this.sensorsM = sensorsM.slice(0, 1));
    this.sensorTService.getSensorsT().then(sensorsT => this.sensorsT = sensorsT.slice(0, 2));
    this.sensorLService.getSensorsL().then(sensorsL => this.sensorsL = sensorsL.slice(0, 2));
  }

}
