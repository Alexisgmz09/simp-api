import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActuatorAModel } from '../models/actuatorA-model';

@Injectable()

export class ActuatorAService {
  apiRoot = 'http://localhost:8080/api/sistema/actuadorAs';
  actuatorsA: ActuatorAModel[];
  cont:number;

  constructor(private http: Http) {
    this.actuatorsA = [];
    this.cont = 1;
  }

  getActuatorsA(): Promise<ActuatorAModel[]> {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}`;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.actuatorsA = res.json().map((item: any) => {
              return new ActuatorAModel(
                item.id,
                item.nombre,
                item.velocidad,
                item.unidad,
                item.ubicacionE,
                item.ubicacionC,
                item.consumoEnergia,
                item.descripcion,
                item.tipoActuador,
                item.estado,
                item.conectado,
                item.temperatura
              );
            });
            resolve(this.actuatorsA);
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

  getActuatorA(id: number): Promise<ActuatorAModel> {
    return this.getActuatorsA()
      .then(actuatorsA => actuatorsA.find(actuatorA => actuatorA.id === id));
  }

}
