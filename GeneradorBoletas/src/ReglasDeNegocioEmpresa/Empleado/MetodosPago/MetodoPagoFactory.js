var MetodoDePago = require('./MetodoDePago').MetodoDePago;
var PagoEnCheque = require('./PagoEnCheque').PagoEnCheque;
var PagoEnDeposito = require('./PagoEnDeposito').PagoEnDeposito;
var PagoEnEfectivo = require('./PagoEnEfectivo').PagoEnEfectivo;


class MetodoPagoFactory {
    constructor(tipo) {
        if(tipo=="Cheque")
            return new PagoEnCheque();
        if(tipo=="Deposito")
            return new PagoEnDeposito();
        if(tipo=="Efectivo")
            return new PagoEnEfectivo();
    }
}
module.exports= { MetodoPagoFactory };