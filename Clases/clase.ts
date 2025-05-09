//Implenta a una persona
export class Persona{
    nombre:string;
    edad:number;
    esDesarrollador: boolean;

    //Crear un metodo que sea capaz de construir un objeto de esta clase dentro de otro archivo
    //Siempre se utiliza en la clase
    //Con esta se puede llamar dentro de otros documentos
    constructor(nombre:string,edad:number, esDesarrollador:boolean){
        //Tiene el this para referirse a la propiedad de la clase no el parametro
        this.nombre = nombre;
        this.edad= edad;
        this.esDesarrollador = esDesarrollador;
    }
    saludar():string{
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} anios.`;
    }
}
//No debo implementar un archivo en donde esta la clase
