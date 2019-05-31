var MetodoDePago = require('./MetodoDePago').MetodoDePago;

class MetodoPagoFactory {
    constructor(tipo) {
        return new MetodoDePago();
    }
}
module.exports= { MetodoPagoFactory };