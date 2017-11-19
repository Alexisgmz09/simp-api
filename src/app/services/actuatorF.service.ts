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
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.actuatorsF = res.json().map((item: any) => {
              return new ActuatorFModel(
                item.nombre,
                item.id,
                item.unidad,
                item.ubicacionE,
                item.ubicacionC,
                item.consumoEnergia,
                item.descripcion,
                item.tipoActuador,
                item.estado,
                item.conectado,
                item.intensidad
              );
            });
            resolve(this.actuatorsF);
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

  getActuatorF(id: number): Promise<ActuatorFModel> {
    return this.getActuatorsF()
      .then(actuatorsF => actuatorsF.find(actuatorF => actuatorF.id === id));
  }

}
