//Los metodos son funciones que se encuentran dentro de una clase
//Las funciones son bloques de codigo que se pueden reutilizar
function imprimirMensaje(mensaje) {
    //No regresa ningun valor
    console.log(mensaje);
}
imprimirMensaje("Hola mundo desde TypeScript");
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
var resultado = sumar(5, 10);
console.log("Tu resultado es ".concat(resultado));
var Edad = function (edad, nombre) {
    return "Hola ".concat(nombre, ", tines ").concat(edad, " a\u00F1os");
};
var resultado1 = console.log(Edad(23, "Luis"));
resultado1();
