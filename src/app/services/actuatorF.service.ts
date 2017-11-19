import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActuatorCModel } from '../models/actuatorC-model';

@Injectable()

export class ActuatorCService {
  apiRoot = 'http://localhost:8080/api/sistema/actuadorCs';
  actuatorsC: ActuatorCModel[];

  constructor(private http: Http) {
    this.actuatorsC = [];
  }

  getActuatorsC(): Promise<ActuatorCModel[]> {
    const apiURL = `${this.apiRoot}`;
    return this.http.get(apiURL)
      .toPromise()
      .then(
        res =>  // Success
          res.json().actuatorsC as ActuatorCModel[]
      ).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getActuatorC(id: number): Promise<ActuatorCModel> {
    return this.getActuatorsC()
      .then(actuatorsC => actuatorsC.find(actuatorC => actuatorC.id === id));
  }

}
