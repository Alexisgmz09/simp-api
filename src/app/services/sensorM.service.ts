import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SensorCModel } from '../models/sensorC-model';

@Injectable()

export class SensorCService {
  apiRoot = 'http://localhost:8080/api/sistema/sensorCs';
  sensorsC: SensorCModel[];

  constructor(private http: Http) {
    this.sensorsC = [];
  }

  getSensorsC(): Promise<SensorCModel[]> {
    const apiURL = `${this.apiRoot}`;
    return this.http.get(apiURL)
      .toPromise()
      .then(
        res =>  // Success
          res.json().sensorsC as SensorCModel[]
      ).catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSensorC(id: number): Promise<SensorCModel> {
    return this.getSensorsC()
      .then(sensorsC => sensorsC.find(sensorC => sensorC.id === id));
  }

}
