let nom: string = "Jesus";
console.log(nom.length);

//Crea una funcion para la implementacion del length pero con una variable generica
//Extender la funcionalidad de los metoods
//Esta nos puede dar mas informacion
// Para que proposiposito se esta haciendo
function obtenerLongitud <T extends {length: number}>(obj:T): number{
    let longitud:number = obj.length;
    let tipo:string = typeof obj;
    console.log(`Longitud ${longitud} y tipo ${tipo}`)
    return obj.length
}

console.log(obtenerLongitud("Hola"))
//Los metodos extendidos dependen de una propiedad por defecto de tus valores
