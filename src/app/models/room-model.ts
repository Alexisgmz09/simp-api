export class RoomModel {
  constructor(
    public id: number,
    public nombre: string,
    public maxVelocidad: number,
    public minVelocidad: number,
    public ubicacionE: string,
    public ubicacionC: string,
    public maxconsumoEnergia: number,
    public minconsumoEnergia: number,
    public maxtemperatura: number,
    public mintemperatura: number
  ) { }
}
