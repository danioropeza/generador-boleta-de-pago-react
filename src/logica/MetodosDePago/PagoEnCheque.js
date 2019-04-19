class PagoEnCheque{

    constructor(informacion_pago){
        this.nombre_portador = informacion_pago.nombre_portador;
        this.ci_portador= informacion_pago.ci_portador;
        this.monto = informacion_pago.monto;
        this.tipo_pago="Cheque";
    }

}
module.exports = {PagoEnCheque};
