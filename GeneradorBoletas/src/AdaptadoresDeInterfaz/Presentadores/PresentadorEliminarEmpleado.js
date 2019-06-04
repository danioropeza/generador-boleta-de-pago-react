class PresentadorEliminarEmpleado {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(mensaje=="Ok")
            return "El empleado se elimino correctamente";
        return "No se elimino el empleado";
    }
   
}

module.exports = { PresentadorEliminarEmpleado }