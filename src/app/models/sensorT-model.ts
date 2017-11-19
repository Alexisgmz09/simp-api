export class SensorTModel {
  constructor (
    public ubicacionE: string,
    public ubicacionC: string,
    public id: number,
    public descripcion: string,
    public tipoSensor: string,
    public estado: boolean,
    public conectado: boolean,
    public temperatura: number,
    public nombre: string
  ) { }
}
