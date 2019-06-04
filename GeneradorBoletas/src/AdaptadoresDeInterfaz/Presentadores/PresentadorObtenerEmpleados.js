class PresentadorObtenerEmpleados {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(this.noHayEmpleados(mensaje))
            return "No hay empleados";
        return mensaje;
    }
    noHayEmpleados(listaDeEmpleados) {
        return listaDeEmpleados==[];
    }
   
}

module.exports = { PresentadorObtenerEmpleados }

