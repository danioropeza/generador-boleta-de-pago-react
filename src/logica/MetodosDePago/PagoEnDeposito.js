class PagoEnDeposito {
    constructor(informacionDePago){
        this.nombreTitular = informacionDePago.nombreTitular;
        this.numeroDeCuenta =informacionDePago.numeroDeCuenta;
        this.monto = informacionDePago.monto;
        this.tipoDePago="Deposito";
    }
}
module.exports = {PagoEnDeposito};
