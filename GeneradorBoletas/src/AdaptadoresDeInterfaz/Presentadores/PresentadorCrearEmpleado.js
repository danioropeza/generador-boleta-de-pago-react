class PresentadorCrearEmpleado {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(mensaje=='Ok')
            return "El empleado se creó correctamente";
        return "No se creo el empleado";
    }
   
}

module.exports = { PresentadorCrearEmpleado }