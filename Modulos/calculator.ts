//Crear un archivo de funcionalidad y el otro para sacar resultados
// Lo ideal es siempre refactorizarlo, heredando o exportando 

export function suma(number1:number, number2: number):Number{
    return number1+ number2;

}
export function resta(number1:number, number2: number):Number{
    return number1 - number2;
    
}
export function multipliacion(number1:number, number2: number):Number{
    return number1 * number2;
    
}
export function division(number1:number, number2: number):Number{
    return number1 / number2;
    
}

export const Pi = 3.1416