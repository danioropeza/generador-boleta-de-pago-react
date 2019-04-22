class PagoEnCheque{
    constructor(informacionDePago){
        this.nombrePortador = informacionDePago.nombrePortador;
        this.ciPortador= informacionDePago.ciPortador;
        this.monto = informacionDePago.monto;
        this.tipoDePago="Cheque";
    }
}
module.exports = {PagoEnCheque};
