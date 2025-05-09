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

interface PersonaRead {
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}
console.log(persona)
