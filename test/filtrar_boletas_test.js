var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const DatosBoletaDePago = require("../src/logica/BoletasDePago/DatosBoletaDePago").DatosBoletaDePago;
const GeneradorBoletaDePagoFactura = require("../src/logica/BoletasDePago/GeneradorBoletaDePagoFactura").GeneradorBoletaDePagoFactura;

const filtroBoletasDePagoPorFechaDePago  = require("../src/logica/BoletasDePago/FiltroBoletasDePagoPorFechaDePago");


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
    it("no se deberia permitir imprimir factura cuando un empleado quiera recibir su salario en otra fecha no correspondiente", function () {
        let lista_datos_boleta_pago = [new DatosBoletaDePago(empleado_fijo2)];


        lista_datos_boleta_pago = filtroBoletasDePagoPorFechaDePago(lista_datos_boleta_pago);
        let factura_boleta_pago = new GeneradorBoletaDePagoFactura(lista_datos_boleta_pago);
        expect(factura_boleta_pago.generarFacturaBoletaDePago()).equals("");
    });

    it("no se deberia permitir imprimir factura cuando un empleado quiera recibir su salario en otra fecha no correspondiente", function () {
        let lista_datos_boleta_pago = [new DatosBoletaDePago(empleado_fijo1),new DatosBoletaDePago(empleado_fijo2),new DatosBoletaDePago(empleado_fijo1)];
        let lista_filtrada = filtroBoletasDePagoPorFechaDePago(lista_datos_boleta_pago);
        let factura_boleta_pago = new GeneradorBoletaDePagoFactura(lista_filtrada);
        expect(factura_boleta_pago.generarFacturaBoletaDePago()).equals("");
    });

    it("no se deberia permitir imprimir factura cuando un empleado quiera recibir su salario en otra fecha no correspondiente", function () {
        let lista_datos_boleta_pago = [new DatosBoletaDePago(empleado_fijo1),new DatosBoletaDePago(empleado_fijo2)];
        lista_datos_boleta_pago[1].validador = () => {
            return true;
        };
        let lista_filtrada = filtroBoletasDePagoPorFechaDePago(lista_datos_boleta_pago);
        let factura_boleta_pago = new GeneradorBoletaDePagoFactura(lista_filtrada);
        expect(factura_boleta_pago.generarFacturaBoletaDePago()).equals('Empleado: Matias Perez Salario: 8000 Bolivianos Fecha de pago: ' + String(new Date()).slice(0, 15)+ "\n");
    });


});