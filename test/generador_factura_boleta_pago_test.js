var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const DatosBoletaDePago = require("../src/logica/DatosBoletaDePago").DatosBoletaDePago;
const GeneradorBoletaDePagoFactura = require("../src/logica/GeneradorBoletaDePagoFactura").GeneradorBoletaDePagoFactura;


describe("Tests para el generador de factura de boleta de pago ", function() {
    let empleado_fijo1 = new Empleado({
        nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
    });
    let empleado_fijo2 = new Empleado({
        nombre: "Matias Perez",
        ci: "6677888",
        salario: 8000,
        fecha_nacimiento: "tue mar 28 2009",
    });


    it("la boleta de pago deberia contener la fecha actual cuando se la genera", function () {
        let lista_datos_boleta_pago = [new DatosBoletaDePago(empleado_fijo1),new DatosBoletaDePago(empleado_fijo2)];
        let factura_boleta_pago = new GeneradorBoletaDePagoFactura(lista_datos_boleta_pago);
        expect(factura_boleta_pago.generarFacturaBoletaDePago()).includes('Fecha de pago: ' + String(new Date()).slice(0, 15));
    });

    it("la boleta de pago deberia contener el nombre del empleado, salario y fecha de pago cuando se la genera", function () {
        let lista_datos_boleta_pago = [new DatosBoletaDePago(empleado_fijo1),new DatosBoletaDePago(empleado_fijo2)];
        let factura_boleta_pago = new GeneradorBoletaDePagoFactura(lista_datos_boleta_pago);
        expect(factura_boleta_pago.generarFacturaBoletaDePago()).includes('Empleado: Adrian Vargas Salario: 6000 Bolivianos Fecha de pago: ' + String(new Date()).slice(0, 15));
    });
});