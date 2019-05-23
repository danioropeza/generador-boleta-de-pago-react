const funcionesFecha = require("../otros/FuncionesFecha");

class ClasificadorFechaDePagoPorHora{
    constructor(fecha) {
        
    }
    correspondePagar(fechaActual){
        return funcionesFecha.esViernes(fechaActual);
    }
}

module.exports= { ClasificadorFechaDePagoPorHora };
