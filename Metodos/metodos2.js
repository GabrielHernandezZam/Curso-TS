// Definicion de un metodo con un argumento opcional
// Si el saludo llega lo convierte en string, si el saludo no llega es indefinido
// Paramaetros opcionales
function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre);
    }
    else {
        return "Hola ".concat(nombre);
    }
}
console.log(saludar("Juanito"));
//Parametros Multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
console.log("La suma de todos los numeros es ".concat(sumarTodos(1, 2, 3, 4, 5)));
//Valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    return "".concat(despedida, ", ").concat(nombre);
}
console.log(despedir("Juanito"));
console.log(despedir("Juanito", "Hasta luego"));
