import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { ActuatorComponent } from "./actuator/actuator.component";
import { HistoryComponent } from "./history/history.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import  { RoomComponent } from "./room/room.component";
import { SensorComponent } from "./sensor/sensor.component";
import { StateComponent } from "./state/state.component";
import { StateSensorComponent } from "./state-sensor/state-sensor.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'actuator', component: ActuatorComponent},
  { path: 'room', component: RoomComponent},
  { path: 'sensor', component: SensorComponent},
  { path: 'state', component: StateComponent},
  { path: 'statesensor', component: StateSensorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export  class AppRoutingModule{}
