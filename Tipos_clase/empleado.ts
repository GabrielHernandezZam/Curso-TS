import { Persona } from "./clase";

//Tiene las propiedades de la clase Persona
export class Empleado extends Persona {
    public puesto:string;

    //Agregar constructor, tiene propiedades de persona y de empleado
    // El constructur es un metodo que crea la estructura de la clase generando un objeto
    constructor(nombre:string, edad:number, esDesarrollador:boolean, puesto:string){
        super(nombre, edad, esDesarrollador); //Llama al constructor de la clase padre
        this.puesto = puesto; //Llama al constructor de la clase hijo
    }
    public saludar():string{
        return `${super.saludar()}, trabajo como ${this.puesto}`;
    }
    public obtenerInfo():string{
        return `Tengo ${this.obtenerEdad()} anios y trabajo como ${this.puesto}`;
    }
    
}
