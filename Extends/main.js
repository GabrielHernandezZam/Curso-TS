var nom = "Jesus";
console.log(nom.length);
//Crea una funcion para la implementacion del length pero con una variable generica
//
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("Longitud ".concat(longitud, " y tipo ").concat(tipo));
    return obj.length;
}
console.log(obtenerLongitud("Hola"));
