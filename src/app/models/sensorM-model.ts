export class SensorMModel {
  constructor (
    public ubicacionE: string,
    public ubicacionC: string,
    public id: number,
    public descripcion: string,
    public tipoSensor: string,
    public estado: boolean,
    public conectado: boolean,
    public movimiento: boolean,
    public nombre: string
  ) { }
}
