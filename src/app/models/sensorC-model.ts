export class SensorCModel {
  constructor (
    public id: number,
    public ubicacionE: string,
    public ubicacionC: string,
    public descripcion: string,
    public tipoSensor: string,
    public estado: boolean,
    public conectado: boolean,
    public consume: boolean,
    public energia: number,
    public nombre: string
  ) { }
}
