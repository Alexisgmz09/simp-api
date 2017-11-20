import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SensorCModel } from '../models/sensorC-model';

@Injectable()

export class SensorCService {
  apiRoot = 'http://localhost:8080/api/sistema/sensorCs';
  sensorsC: SensorCModel[];
  cont:number;

  constructor(private http: Http) {
    this.sensorsC = [];
    this.cont=1;
  }

  getSensorsC(): Promise<SensorCModel[]> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.sensorsC = res.json().map((item: any) => {
              return new SensorCModel(
                item.id,
                item.ubicacionE,
                item.ubicacionC,
                item.descripcion,
                item.tipoSensor,
                item.estado,
                item.conectado,
                item.consume,
                item.energia,
                item.nombre
              );
            });
            resolve(this.sensorsC);
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

  getSensorC(id: number): Promise<SensorCModel> {
    return this.getSensorsC()
      .then(sensorsC => sensorsC.find(sensorC => sensorC.id === id));
  }

}
