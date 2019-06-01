var ClasificadorFechaDePagoPorHora = require('./ClasificadorFechaDePagoPorHora' ).ClasificadorFechaDePagoPorHora;
var ClasificadorFechaDePagoFijo = require('./ClasificadorFechaDePagoFijo').ClasificadorFechaDePagoFijo;
var ClasificadorFechaDePagoPorComision = require('./ClasificadorFechaDePagoPorComision').ClasificadorFechaDePagoPorComision;

class ClasificadorFechaFactory {
    constructor(tipo) {
        if(tipo=="Comision")
            return new ClasificadorFechaDePagoPorComision();
        if(tipo=="Parcial")
            return new ClasificadorFechaDePagoPorHora();
        if(tipo=="Fijo")
            return new ClasificadorFechaDePagoFijo();
    }
}
module.exports= { ClasificadorFechaFactory };
