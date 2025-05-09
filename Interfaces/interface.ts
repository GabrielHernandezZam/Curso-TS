//Las interfaces definen la estructura de un objeto\
//Una interface define la estructura de un objeto
//Contiene propiedades y tipos de datos
interface Personas{
    nombre:string;
    edad:number;
    esDesarrollador:boolean;
}

//Se puede crear un objeto de tipo Persona
//
let persona1:Personas={
    nombre:"Jesus",
    edad:23,
    esDesarrollador:true
};

console.log(persona1); // Jesus

let personaas: Personas[]=[
    {nombre:"Juan", edad:23, esDesarrollador:true},
    {nombre:"Pedro", edad:23, esDesarrollador:true},
    {nombre:"Maria", edad:23, esDesarrollador:true},
]

console.log(personaas); // [{nombre:"Juan", edad:23, esDesarrollador:true}, {nombre:"Pedro", edad:23, esDesarrollador:true}, {nombre:"Maria", edad:23, esDesarrollador:true}]

interface Sumar{
    (a:number, b:number):number; //Definimos la estructura de la funcion sumar
}
//Definimos la funcion sumar
let cuentas:Sumar=(a,b)=>{
    return a+b;
}

console.log(cuentas(1,2)); // 3