import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ActuatorAComponent } from './actuatorA/actuatorA.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { SensorCComponent } from './sensorC/sensorC.component';
import { StateComponent } from './state/state.component';
import { StateSensorComponent } from './state-sensor/state-sensor.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'actuatorA', component: ActuatorAComponent},
  { path: 'room', component: RoomComponent},
  { path: 'sensorC', component: SensorCComponent},
  { path: 'state', component: StateComponent},
  { path: 'statesensor', component: StateSensorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export  class AppRoutingModule {}
