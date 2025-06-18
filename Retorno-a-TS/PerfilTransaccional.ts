//Funcion por cada modulo
const CaracteristicasClientes = (
  PolizaVigentes: number,
  TipoProducto: boolean,
  PaisNacimiento: boolean,
  Domicilio: string
): number => {
  let resultado: number = 0;
  if ([0, 1, 2, 3, 4].indexOf(PolizaVigentes)) {
    resultado += 0.15;
  } else {
    resultado += 0.3;
  }
  // Es falso cuando se considera Producto Individual o Estandarizado
  // Es alto cuando es Colectivo
  if (TipoProducto === false) {
    resultado += 0.2;
  } else {
    resultado += 0.4;
  }

  // Es true cuando aparece en listas con AML, LD y FT
  if (PaisNacimiento === false) {
    resultado += 0.15;
  } else {
    resultado += 0.3;
  }
  if (Domicilio.length < 20) {
    resultado += 0.5;
  }

  return Number(resultado.toFixed(2));
};

//Caracteristica de poliza
const CaracteristicaPolizas = (
  SumaPagoPrima: number = 0,
  PeriocidadPago: number = 0,
  SumaAseguradaContra: number = 0,
  InstrumentoPago: number = 0
): number => {
  let resultado: number = 0;
  if (SumaPagoPrima <= 30000) resultado += 0.15;
  else if (PeriocidadPago <= 3) resultado += 0.3;
  if (SumaAseguradaContra <= 1000000) resultado += 0.15;
  if ([0, 1, 2, 3].indexOf(InstrumentoPago)) resultado += 0.4;
  else resultado += 0.8;

  return Number(resultado.toFixed(2));
};

const ActividadEconomica = (Trabajo: number): number => {
  let resultado = 0;
  if (Trabajo <= 10) resultado = 1;
  return Number(resultado.toFixed(2));
};

const PropietarioReal = (Propietario: boolean): number => {
  let resultado = 0;
  if (Propietario) resultado = 1;
  return Number(resultado.toFixed(2));
};

const PEP = (EsPEP: boolean): number => {
  let resultado = 0;
  if (!EsPEP) resultado = 1;
  return Number(resultado.toFixed(2));
};

// Resultados individuales
let resulCaracteristicasClientes = CaracteristicasClientes(1, 1, 1, "prueba");
console.log("Caracteristicas Clientes:", resulCaracteristicasClientes);

let resultadoCaracteristcasPoliza = CaracteristicaPolizas(30000, 3, 500000, 1);
console.log("Caracteristicas Poliza:", resultadoCaracteristcasPoliza);

let resultadoActividadEconomica = ActividadEconomica(10);
console.log("Actividad Economica:", resultadoActividadEconomica);

let resultadoPropietarioReal = PropietarioReal(true);
console.log("Propietario Real:", resultadoPropietarioReal);

let resultadoPEP = PEP(false);
console.log("PEP:", resultadoPEP);

// Resultado general ponderado
let resultadoGeneral =
  (resulCaracteristicasClientes +
    resultadoCaracteristcasPoliza +
    resultadoActividadEconomica +
    resultadoPropietarioReal +
    resultadoPEP) *
  0.2;

resultadoGeneral = Number(resultadoGeneral.toFixed(2));

console.log("Resultado General:", resultadoGeneral);
