class GeneradorBoletaDePagoFactura {
    constructor(lista_datosBoletaDePago) {
        this.lista_datosBoletaDePago = lista_datosBoletaDePago;
    }

    generarFacturaBoletaDePago(){
        var factura = "";
        this.lista_datosBoletaDePago.forEach(datosDeBoletaDePago => {
            factura += 'Empleado: '+ datosDeBoletaDePago.empleado.nombre + ' Salario: ' + datosDeBoletaDePago.salario +' Bolivianos' + ' Fecha de pago: ' + datosDeBoletaDePago.fecha_pago + '\n';
        });
        return factura;
    }
}
module.exports = { GeneradorBoletaDePagoFactura };