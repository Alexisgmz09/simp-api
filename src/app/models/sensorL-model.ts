export class SensorLModel {
  constructor (
    public id: number,
    public ubicacionE: string,
    public ubicacionC: string,
    public descripcion: string,
    public tipoSensor: string,
    public estado: boolean,
    public conectado: boolean,
    public luzAmbiente: number,
    public luzArtificial: number,
    public nombre: string
  ) { }
}
