//Funcion por cada modulo
var CaracteristicasClientes = function (PolizaVigentes, TipoProducto, PaisNacimiento, Domicilio) {
    var resultado = 0;
    if (PolizaVigentes === 1) {
        resultado += 0.15;
    }
    if ([0, 1, 2, 3, 4, 5].indexOf(TipoProducto)) {
        resultado += 0.2;
    }
    if ([0, 1, 2, 3, 4, 5].indexOf(PaisNacimiento)) {
        resultado += 0.15;
    }
    if (Domicilio.length < 20) {
        resultado += 0.5;
    }
    return Number(resultado.toFixed(2));
};
//Caracteristica de poliza
var CaracteristicaPolizas = function (SumaPagoPrima, PeriocidadPago, SumaAseguradaContra, InstrumentoPago) {
    if (SumaPagoPrima === void 0) { SumaPagoPrima = 0; }
    if (PeriocidadPago === void 0) { PeriocidadPago = 0; }
    if (SumaAseguradaContra === void 0) { SumaAseguradaContra = 0; }
    if (InstrumentoPago === void 0) { InstrumentoPago = 0; }
    var resultado = 0;
    if (SumaPagoPrima <= 30000)
        resultado += 0.15;
    if (PeriocidadPago <= 3)
        resultado += 0.3;
    if (SumaAseguradaContra <= 1000000)
        resultado += 0.15;
    if ([0, 1, 2, 3].indexOf(InstrumentoPago))
        resultado += 0.4;
    return Number(resultado.toFixed(2));
};
var ActividadEconomica = function (Trabajo) {
    var resultado = 0;
    if (Trabajo <= 10)
        resultado = 1;
    return Number(resultado.toFixed(2));
};
var PropietarioReal = function (Propietario) {
    var resultado = 0;
    if (Propietario)
        resultado = 1;
    return Number(resultado.toFixed(2));
};
var PEP = function (EsPEP) {
    var resultado = 0;
    if (!EsPEP)
        resultado = 1;
    return Number(resultado.toFixed(2));
};
// Resultados individuales
var resulCaracteristicasClientes = CaracteristicasClientes(1, 1, 1, "prueba");
console.log("Caracteristicas Clientes:", resulCaracteristicasClientes);
var resultadoCaracteristcasPoliza = CaracteristicaPolizas(30000, 3, 500000, 1);
console.log("Caracteristicas Poliza:", resultadoCaracteristcasPoliza);
var resultadoActividadEconomica = ActividadEconomica(10);
console.log("Actividad Economica:", resultadoActividadEconomica);
var resultadoPropietarioReal = PropietarioReal(true);
console.log("Propietario Real:", resultadoPropietarioReal);
var resultadoPEP = PEP(false);
console.log("PEP:", resultadoPEP);
// Resultado general ponderado
var resultadoGeneral = (resulCaracteristicasClientes +
    resultadoCaracteristcasPoliza +
    resultadoActividadEconomica +
    resultadoPropietarioReal +
    resultadoPEP) *
    0.2;
resultadoGeneral = Number(resultadoGeneral.toFixed(2));
console.log("Resultado General:", resultadoGeneral);
