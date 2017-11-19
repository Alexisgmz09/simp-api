export class ActuatorAModel {
  constructor(
    public id: number,
    public nombre: string,
    public velocidad: number,
    public unidad: string,
    public ubicacionE: string,
    public ubicacionC: string,
    public consumoEnergia: number,
    public descripcion: string,
    public tipoActuador: string,
    public estado: boolean,
    public conectado: boolean,
    public temperatura: number
  ) { }
}
