//Listas
//Arreglos de cadenas
var nombres = ["Juan", "Pedro", "Maria"];
console.log(nombres); //Juan
//Arreglos de numeros
var edades = [20, 30, 40];
console.log(edades);
//Este arreglo es mixto
//Puede contener cualquier tipo de dato
var mixto = ["Juan", 20, true];
console.log(mixto);
var personas = [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
];
personas.push({ nombre: "Miranda", edad: 30, esDesarrollador: true });
//Tupla
//Es parecido al Any, pero la diferencia es que este asigna una estructura
//Y la tienen que seguir
var persona;
persona = ["Amin", 39, true];
console.log("Persona:", persona);
var personasTupla = [];
personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});
// Enumeradores
//Sirve para generarl numeros con el siguente arreglo
//Tambien puede desplegar los datos pero su funcion principal es ennumerar
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Domingo;
console.log("Numero de dia: ", dia);
console.log("Dia:", DiaDeLaSemana[dia]);
