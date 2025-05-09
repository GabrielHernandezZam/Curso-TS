//Implenta a una persona
export class Persona{
    //Propiedades de la clase
    public nombre:string; //Accesible desde cualquier parte
    protected edad:number; //Accesible desde la misma clase y las que heredan de ella
    private esDesarrollador: boolean; //Solo accesible en la clase

    //Crear un metodo que sea capaz de construir un objeto de esta clase dentro de otro archivo
    //Siempre se utiliza en la clase
    //Con esta se puede llamar dentro de otros documentos
    //
    constructor(nombre:string,edad:number, esDesarrollador:boolean){
        //Tiene el this para referirse a la propiedad de la clase no el parametro
        this.nombre = nombre;
        this.edad= edad;
        this.esDesarrollador = esDesarrollador;
    }
    //Si te deja utilizar el metodo en otro archivo
    //El metodo saludar es publico, por lo que se puede acceder desde fuera de la clase
    public saludar():string{
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} anios.`;
    }
    //El metodo obtenerEdad es protegido, por lo que solo se puede acceder desde la misma clase o desde una clase que herede de ella
    public obtenerEdad():number{
        return this.edad;
    }
    //El metodo esDesarrollador es privado, por lo que solo se puede acceder desde la misma clase
    private esDev():boolean{
        return this.esDesarrollador;
    }
}
//No debo implementar un archivo en donde esta la clase
