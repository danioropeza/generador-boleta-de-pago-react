class PresentadorObtenerUnEmpleado {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(this.noHayElEmpleado(mensaje))
            return "No hay el empleado";
        return mensaje;
    }
    noHayElEmpleado(empleado) {
        return empleado == null;
    }
}

module.exports = { PresentadorObtenerUnEmpleado }

