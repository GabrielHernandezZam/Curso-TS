//La variable any puede recibir cualquier tipo de datos
var variableAny;
// variableAny = "Hello Word";
variableAny = 23;
// variableAny = true;
// variableAny = [1, 2, 3, 4, 5];
console.log("Numeros ".concat(variableAny));
//Variables desconocidas
var variableDesconocida;
variableDesconocida = 2;
if (typeof variableDesconocida === 'number') {
    console.log(variableDesconocida + 2);
    console.log(typeof (variableDesconocida)); // 4
}
//Never es un tipo de dato que nunca se va a cumplir, es decir, nunca va a retornar nada.
//Solamente retorna mensajes de error
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError("Error en la aplicacion");
function logMessage(message) {
    console.log("Log message: ", message);
}
logMessage("Este es un mensaje de log");
