// Genericos
// Genericos son una forma de crear funciones, clases o interfaces que pueden trabajar con diferentes tipos de datos
// Puede recibir cualquier tipo de variable
// Indica que es un valor generico, puedo recibir cualquier tipo de variable
function identity(arg) {
    return arg;
}
var output = identity("Hola Mundo");
console.log(output);
var output2 = identity(23);
console.log(output2);
var output3 = identity([1, 2, 3]);
var output4 = identity(["Hola", "Mundo"]);
console.log(output3);
console.log(output4);
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    //MEtodo
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeStringd = new Caja("muchas ganas de aprender y superarse");
console.log("contenido de la caja: ", cajaDeStringd.obtenerContenido());
