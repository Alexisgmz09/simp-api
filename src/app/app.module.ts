import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { SensorComponent } from './sensor/sensor.component';
import { StateSensorComponent } from './state-sensor/state-sensor.component';
import { StateComponent } from './state/state.component';
import { RoomComponent } from './room/room.component';
import { ActuatorComponent } from './actuator/actuator.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HistoryComponent,
    SensorComponent,
    StateSensorComponent,
    StateComponent,
    RoomComponent,
    ActuatorComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
