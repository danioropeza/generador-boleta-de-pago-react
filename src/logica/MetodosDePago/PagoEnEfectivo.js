class PagoEnEfectivo {

    constructor(informacionDePago){
        this.nombreEmpleado = informacionDePago.nombreEmpleado;
        this.monto = informacionDePago.monto;
        this.tipoDePago="Efectivo";
    }

}

module.exports = {PagoEnEfectivo};
