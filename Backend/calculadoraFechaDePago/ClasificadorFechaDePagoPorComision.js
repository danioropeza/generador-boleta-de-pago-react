const funcionesFecha = require("../otros/FuncionesFecha");

class ClasificadorFechaDePagoPorComision {
    constructor(fecha) {
        
    }
    correspondePagar(fechaActual){
        return funcionesFecha.esViernes(fechaActual) && funcionesFecha.esSemanaPar(fechaActual);
    }
}

module.exports= { ClasificadorFechaDePagoPorComision };
