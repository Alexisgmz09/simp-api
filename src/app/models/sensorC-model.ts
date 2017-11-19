export class SensorCModel {
  constructor (
    public ubicacionE: string,
    public ubicacionC: string,
    public id: number,
    public descripcion: string,
    public tipoSensor: string,
    public estado: boolean,
    public conectado: boolean,
    public consume: boolean,
    public energia: number,
    public nombre: string
  ) { }
}
