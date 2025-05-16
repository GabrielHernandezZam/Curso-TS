// Genericos
// Genericos son una forma de crear funciones, clases o interfaces que pueden trabajar con diferentes tipos de datos
// Puede recibir cualquier tipo de variable
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>("Hola Mundo");
console.log(output);
let output2 = identity<number>(23);
console.log(output2);

let output3 = identity<number[]>([1, 2, 3]);
let output4 = identity<string[]>(["Hola", "Mundo"]);
console.log(output3);
console.log(output4);

class Caja<T>{
    private contenido: T;
    constructor(contenido:T){
        this.contenido = contenido;
    }
    //MEtodo
    
    public obtenerContenido(): T{
        return this.contenido;
    }
}

let cajaDeStringd = new Caja<string>("Hola mundo");
console.log("contenido de la caja: ", cajaDeStringd.obtenerContenido());

