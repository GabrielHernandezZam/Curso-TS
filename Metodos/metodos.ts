//Los metodos son funciones que se encuentran dentro de una clase
//Las funciones son bloques de codigo que se pueden reutilizar
function imprimirMensaje(mensaje:string):void{
    //No regresa ningun valor
    console.log(mensaje);
}
imprimirMensaje("Hola mundo desde TypeScript");

function sumar(numero1:number,numero2:number):number{
    return numero1 + numero2;
}

let resultado: number = sumar(5,10);
console.log(`Tu resultado es ${resultado}`)

const Edad = (edad:number, nombre:string):any => {
    return `Hola ${nombre}, tines ${edad} años`;
}

const resultado1:any = Edad(23, "Juanito");
console.log(resultado1);