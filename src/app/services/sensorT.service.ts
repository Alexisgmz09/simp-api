import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SensorTModel } from '../models/sensorT-model';

@Injectable()

export class SensorTService {
  apiRoot = 'http://localhost:8080/api/sistema/sensorTs';
  sensorsT: SensorTModel[];
  cont:number;

  constructor(private http: Http) {
    this.sensorsT = [];
    this.cont=1;
  }

  getSensorsT(): Promise<SensorTModel[]> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.sensorsT = res.json().map((item: any) => {
              return new SensorTModel(
                item.ubicacionE,
                item.ubicacionC,
                item.id,
                item.descripcion,
                item.tipoSensor,
                item.estado,
                item.conectado,
                item.temperatura,
                item.nombre
              );
            });
            resolve(this.sensorsT);
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

  getSensorT(id: number): Promise<SensorTModel> {
    return this.getSensorsT()
      .then(sensorsT => sensorsT.find(sensorT => sensorT.id === id));
  }

}
