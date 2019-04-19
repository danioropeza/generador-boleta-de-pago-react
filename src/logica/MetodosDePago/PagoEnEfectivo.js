class PagoEnEfectivo {

    constructor(informacion_pago){
        this.nombre_empleado = informacion_pago.nombre_empleado;
        this.monto = informacion_pago.monto;
        this.tipo_pago="Efectivo";
    }

}

module.exports = {PagoEnEfectivo};
