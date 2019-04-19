class PagoEnDeposito {

    constructor(informacion_pago){
        this.nombre_titular = informacion_pago.nombre_titular;
        this.nro_cuenta =informacion_pago.nro_cuenta;
        this.monto = informacion_pago.monto;
        this.tipo_pago="Deposito";
    }

}

module.exports = {PagoEnDeposito};
