export class SensorMModel {
  constructor (
    public id: number,
    public ubicacionE: string,
    public ubicacionC: string,
    public descripcion: string,
    public tipoSensor: string,
    public estado: boolean,
    public conectado: boolean,
    public movimiento: boolean,
    public nombre: string
  ) { }
}
