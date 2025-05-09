//La variable any puede recibir cualquier tipo de datos
let variableAny: any;

// variableAny = "Hello Word";
variableAny = 23;
// variableAny = true;
// variableAny = [1, 2, 3, 4, 5];

console.log(`Numeros ${variableAny}`);

//Variable desconocida
//Unknown es paracido al any pero mas seguro, requiere una verficacion de tipo antes de usar el valor.
//Es decir, no se puede usar directamente sin verificar el tipo de dato que es.
//Ideal para cuando no sabemos que tipo de dato va a recibir la variable.
let variableDesconocida: unknown;
variableDesconocida = 2;

if(typeof variableDesconocida === 'number') {
    console.log(variableDesconocida + 2);
    console.log(typeof(variableDesconocida)) // 4
}
//Never es un tipo de dato que nunca se va a cumplir, es decir, nunca va a retornar nada.
//Solamente retorna mensajes de error
// function throwError(message: string): never {
//     throw new Error(message);
    
// }
// throwError("Error en la aplicacion");

//e utiliza en funciones que no devuelven un valor. Esencial para describir funciones que solo realizan efectos secundarios.

function logMessage(message: string): void{
    console.log("Log message: ", message);
}
logMessage("Este es un mensaje de log");