export interface PerfilTransaccional {
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
}
