import { PerfilTransaccional } from "./interface";

class RiegoPerfilTransaccional {
  IDPerfil: number;
  IDCotizacion: number;
  TipoProducto: number;
  SumaAsegurada: number;
  PeriodoPago: number;
  SumaPagoPrima: number;
  InstrumentoDePago: number;
  Cliente: string;
  PaisNacimiento: string;
  Domicilio: string;
  ActividadEconomica: number;
  PEP: boolean;
  IDOrden: number;
  PolizasActivas: number;
  PropietarioReal: boolean;
  Riesgo: string;

  constructor(
    IDPerfil: number,
    IDCotizacion: number,
    TipoProducto: number,
    SumaAsegurada: number,
    PeriodoPago: number,
    SumaPagoPrima: number,
    InstrumentoDePago: number,
    Cliente: string,
    PaisNacimiento: string,
    Domicilio: string,
    ActividadEconomica: number,
    PEP: boolean,
    IDOrden: number,
    PolizasActivas: number,
    PropietarioReal: boolean,
    Riesgo: string
  ) {
    this.IDPerfil = IDPerfil;
    this.IDCotizacion = IDCotizacion;
    this.TipoProducto = TipoProducto;
    this.SumaAsegurada = SumaAsegurada;
    this.PeriodoPago = PeriodoPago;
    this.SumaPagoPrima = SumaPagoPrima;
    this.InstrumentoDePago = InstrumentoDePago;
    this.Cliente = Cliente;
    this.PaisNacimiento = PaisNacimiento;
    this.Domicilio = Domicilio;
    this.ActividadEconomica = ActividadEconomica;
    this.PEP = PEP;
    this.IDOrden = IDOrden;
    this.PolizasActivas = PolizasActivas;
    this.PropietarioReal = PropietarioReal;
    this.Riesgo = Riesgo;
  }
  calcularPefil(): string {
    return `Este es tu perfil para la persona con ${this.IDCotizacion}, con numero de cliente ${this.Cliente} y con Orden ${this.IDOrden}`;
  }
}
