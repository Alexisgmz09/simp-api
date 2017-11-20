import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SensorLModel } from '../models/sensorL-model';

@Injectable()

export class SensorLService {
  apiRoot = 'http://localhost:8080/api/sistema/sensorLs';
  sensorsL: SensorLModel[];
  cont:number;

  constructor(private http: Http) {
    this.sensorsL = [];
    this.cont=1;
  }

  getSensorsL(): Promise<SensorLModel[]> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.sensorsL = res.json().map((item: any) => {
              return new SensorLModel(
                item.ubicacionE,
                item.ubicacionC,
                item.id,
                item.descripcion,
                item.tipoSensor,
                item.estado,
                item.conectado,
                item.cantidadLuz,
                item.nombre
              );
            });
            resolve(this.sensorsL);
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

  getSensorL(id: number): Promise<SensorLModel> {
    return this.getSensorsL()
      .then(sensorsL => sensorsL.find(sensorL => sensorL.id === id));
  }

}
