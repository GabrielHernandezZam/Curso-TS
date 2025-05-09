//Se puede crear un objeto de tipo Persona
//
var persona1 = {
    nombre: "Jesus",
    edad: 23,
    esDesarrollador: true
};
console.log(persona1); // Jesus
var personaas = [
    { nombre: "Juan", edad: 23, esDesarrollador: true },
    { nombre: "Pedro", edad: 23, esDesarrollador: true },
    { nombre: "Maria", edad: 23, esDesarrollador: true },
];
console.log(personaas); // [{nombre:"Juan", edad:23, esDesarrollador:true}, {nombre:"Pedro", edad:23, esDesarrollador:true}, {nombre:"Maria", edad:23, esDesarrollador:true}]
//Definimos la funcion sumar
var cuentas = function (a, b) {
    return a + b;
};
console.log(cuentas(1, 2)); // 3
