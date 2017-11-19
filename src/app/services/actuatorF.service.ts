import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActuatorFModel } from '../models/actuatorF-model';

@Injectable()

export class ActuatorFService {
  apiRoot = 'http://localhost:8080/api/sistema/actuadorFs';
  actuatorsF: ActuatorFModel[];

  constructor(private http: Http) {
    this.actuatorsF = [];
  }

  getActuatorsF(): Promise<ActuatorFModel[]> {
    const apiURL = `${this.apiRoot}`;
    return this.http.get(apiURL)
      .toPromise()
      .then(
        res =>  // Success
          res.json().actuatorsF as ActuatorFModel[]
      ).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getActuatorF(id: number): Promise<ActuatorFModel> {
    return this.getActuatorsF()
      .then(actuatorsF => actuatorsF.find(actuatorF => actuatorF.id === id));
  }

}
