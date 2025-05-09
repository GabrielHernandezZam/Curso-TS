//Siempre tienen que ser tipadas
// Primero el let y seguido del nombre de la varaible
// y el tipo de la variable
let nombre: string = "Jesus"

// Tipo de variables:
let edad: number = 23 // number
let esDesarrollador: boolean = true // boolean
let fechaNacimiento: Date = new Date("1999-01-01") // Date
let numeros: number[] = [1, 2, 3, 4, 5] // Array de numeros
let indefinido: string | undefined // Marcamos que sea string o undefined
let nulo: null = null // null

console.log(edad);
console.log(esDesarrollador);
console.log(fechaNacimiento);
console.log(numeros);
console.log(indefinido);
console.log(nulo);
// Recordatorio de la sintaxis
// El acento al reves te deja concatenar el texto con variables

console.log(`Hola ${nombre}`)