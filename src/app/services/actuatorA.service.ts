import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActuatorAModel } from '../models/actuatorA-model';

@Injectable()

export class ActuatorAService {
  apiRoot = 'http://localhost:8080/api/sistema/actuadorAs';
  actuatorsA: ActuatorAModel[];

  constructor(private http: Http) {
    this.actuatorsA = [];
  }

  getActuatorsA(): Promise<ActuatorAModel[]> {
    const apiURL = `${this.apiRoot}`;
    return this.http.get(apiURL)
      .toPromise()
      .then(
        res =>  // Success
          res.json().actuatorsA as ActuatorAModel[]
      ).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getActuatorA(id: number): Promise<ActuatorAModel> {
    return this.getActuatorsA()
      .then(actuatorsA => actuatorsA.find(actuatorA => actuatorA.id === id));
  }

}
