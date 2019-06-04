class PresentadorObtenerBoletas {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(this.noHayEmpleados(mensaje))
            return "No hay boletas";
        return mensaje;
    }
    noHayEmpleados(listaDeBoletas) {
        return listaDeBoletas.length == 0;
    }
}

module.exports = { PresentadorObtenerBoletas }

