import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { SensorCComponent } from './sensorC/sensorC.component';
import { SensorMComponent } from './sensorM/sensorM.component';
import { StateSensorComponent } from './state-sensor/state-sensor.component';
import { StateComponent } from './state/state.component';
import { RoomComponent } from './room/room.component';
import { ActuatorAComponent } from './actuatorA/actuatorA.component';
import { ActuatorCComponent } from './actuatorC/actuatorC.component';
import { ActuatorFComponent } from './actuatorF/actuatorF.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Services
import { ActuatorAService } from './services/actuatorA.service';
import { ActuatorCService } from './services/actuatorC.service';
import { ActuatorFService } from './services/actuatorF.service';
import { RoomService } from './services/room.service';
import { SensorCService } from './services/sensorC.service';
import { SensorMService } from './services/sensorM.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistoryComponent,
    SensorCComponent,
    SensorMComponent,
    StateSensorComponent,
    StateComponent,
    RoomComponent,
    ActuatorAComponent,
    ActuatorCComponent,
    ActuatorFComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ActuatorAService,
    ActuatorCService,
    ActuatorFService,
    RoomService,
    SensorCService,
    SensorMService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
