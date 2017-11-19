export class ActuatorFModel {
  constructor(
    public nombre: string,
    public id: number,
    public unidad: string,
    public ubicacionE: string,
    public ubicacionC: string,
    public consumoEnergia: number,
    public descripcion: string,
    public tipoActuador: string,
    public estado: boolean,
    public conectado: boolean,
    public intensidad: number
  ) { }
}
