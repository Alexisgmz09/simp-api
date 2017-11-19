import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SensorMModel } from '../models/sensorM-model';

@Injectable()

export class SensorMService {
  apiRoot = 'http://localhost:8080/api/sistema/sensorCs';
  sensorsM: SensorMModel[];

  constructor(private http: Http) {
    this.sensorsM = [];
  }

  getSensorsM(): Promise<SensorMModel[]> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.sensorsM = res.json().map((item: any) => {
              return new SensorMModel(
                item.ubicacionE,
                item.ubicacionC,
                item.id,
                item.descripcion,
                item.tipoSensor,
                item.estado,
                item.conectado,
                item.movimiento,
                item.nombre
              );
            });
            resolve(this.sensorsM);
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSensorM(id: number): Promise<SensorMModel> {
    return this.getSensorsM()
      .then(sensorsM => sensorsM.find(sensorM => sensorM.id === id));
  }

}
