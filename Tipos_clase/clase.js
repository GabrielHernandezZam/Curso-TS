"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//Implenta a una persona
var Persona = /** @class */ (function () {
    //Crear un metodo que sea capaz de construir un objeto de esta clase dentro de otro archivo
    //Siempre se utiliza en la clase
    //Con esta se puede llamar dentro de otros documentos
    function Persona(nombre, edad, esDesarrollador) {
        //Tiene el this para referirse a la propiedad de la clase no el parametro
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    //Si te deja utilizar el metodo en otro archivo
    //El metodo saludar es publico, por lo que se puede acceder desde fuera de la clase
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " anios.");
    };
    //El metodo obtenerEdad es protegido, por lo que solo se puede acceder desde la misma clase o desde una clase que herede de ella
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    //El metodo esDesarrollador es privado, por lo que solo se puede acceder desde la misma clase
    Persona.prototype.esDev = function () {
        return this.esDesarrollador;
    };
    return Persona;
}());
exports.Persona = Persona;
//No debo implementar un archivo en donde esta la clase
