//Listas
//Arreglos de cadenas
let nombres: string[]= ["Juan", "Pedro", "Maria"];
console.log(nombres); //Juan

//Arreglos de numeros
let edades:number[]= [20, 30, 40];
console.log(edades); 

//Este arreglo es mixto
//Puede contener cualquier tipo de dato
let mixto: any[]= ["Juan", 20, true];
console.log(mixto);

interface Persona{
    nombre:string;
    edad:number;
    esDesarrollador:boolean;
}
let personas: Persona[]= [
    { nombre: "Amin", edad: 39, esDesarrollador: true },
    { nombre: "Juan", edad: 25, esDesarrollador: false },
    { nombre: "Maria", edad: 30, esDesarrollador: true }
]

personas.push({ nombre: "Miranda", edad: 30, esDesarrollador: true });

//Tupla
//Es parecido al Any, pero la diferencia es que este asigna una estructura
//Y la tienen que seguir
let persona: [string, number, boolean];
persona = ["Amin", 39, true];

console.log("Persona:", persona);


let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);

personasTupla.forEach(persona => {
    console.log("Persona:", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});

// Enumeradores
//Sirve para generarl numeros con el siguente arreglo
//Tambien puede desplegar los datos pero su funcion principal es ennumerar
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Domingo;
console.log("Numero de dia: ",dia)
console.log("Dia:", DiaDeLaSemana[dia]);