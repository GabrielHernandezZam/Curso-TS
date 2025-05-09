interface Direccion{
    calle:string;
    numero:number;
    ciudad?:string;
}

//Se puede crear un objeto de tipo Direccion
//La ciudad es opcionl por el signo ?
let direccionJesus:Direccion={
    calle:"Calle 1",
    numero:1
}
console.log(direccionJesus); // {calle:"Calle 1", numero:1, ciudad:"Madrid"}

//Todas estas propiedades unicamente son de lectura
//No se usan
interface Personas {
    readonly Nombre: string;
    readonly Edad: number;
    readonly EsDesarrollador: boolean;
}

// let Jesus1: Personas = {
//     Nombre: "Jesus",
//     Edad: 39,
//     EsDesarrollador: true
// };

// //Marca error por que solamente son lectura, estos no modifican
// console.log("Persona", Jesus1);
// //Esto te va causar un error
// //Jesus.nombre="Gabriel"
// console.log("Persona", Jesus1);

// //Interface Extendida
// Agrega o extiende propiedades de una interfaz
// Crea una interfaz usando las propiedades de otra interfaz
interface Empleado extends Persona{
    readonly puesto:string;
}

let empleadoRead:Empleado = {
    nombre:"Gabriel",
    edad:23,
    esDesarrollador:true,
    puesto:"Desarrollador Full Stack"
}