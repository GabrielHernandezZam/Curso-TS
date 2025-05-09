// Definicion de un metodo con un argumento opcional
// Si el saludo llega lo convierte en string, si el saludo no llega es indefinido
// Paramaetros opcionales
function saludar(nombre:string, saludo?:string):string{
    if(saludo){
        return `${saludo}, ${nombre}`;
    }else{
            return `Hola ${nombre}`
    }   
}
console.log(saludar("Juanito"));

//Parametros Multiples
//Este se refiere a que la funcion 
function sumarTodos(...numeros:number[]):number{
    return numeros.reduce((acumulado, actual)=> acumulado + actual, 0);
}
console.log(`La suma de todos los numeros es ${sumarTodos(1,2,3,4,5)}`);

//Valores por defecto
function despedir(nombre:string, despedida:string="Adios"):string{
    return `${despedida}, ${nombre}`;
}
console.log(despedir("Juanito"));
console.log(despedir("Juanito", "Hasta luego"));