var expect = require("chai").expect;

const Empleado = require("../src/logica/Empleado").Empleado;
const DatosBoletaDePago = require("../src/logica/BoletasDePago/DatosBoletaDePago").DatosBoletaDePago;
const GeneradorBoletaDePagoFactura = require("../src/logica/BoletasDePago/GeneradorBoletaDePagoFactura").GeneradorBoletaDePagoFactura;

const filtroBoletasDePagoPorFechaDePago  = require("../src/logica/BoletasDePago/FiltroBoletasDePagoPorFechaDePago");


describe("Tests para el generador de factura de boleta de pago ", function() {
    let empleadoFijoUno = new Empleado({
        nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
    });

    let empleadoFijoDos = new Empleado({
        nombre: "Matias Perez",
        ci: "6677888",
        salario: 8000,
        fechaNacimiento: "tue mar 28 2009",
    });

    it("no se deberia permitir imprimir factura cuando un empleado quiera recibir su salario en otra fecha no correspondiente", function () {
        let listaDeDatosDeBoletaDePago = [new DatosBoletaDePago(empleadoFijoDos)];
        listaDeDatosDeBoletaDePago = filtroBoletasDePagoPorFechaDePago(listaDeDatosDeBoletaDePago);
        let facturaBoletaDePago = new GeneradorBoletaDePagoFactura(listaDeDatosDeBoletaDePago);
        expect(facturaBoletaDePago.generarFacturaBoletaDePago()).equals("");
    });

    it("no se deberia permitir imprimir factura cuando un empleado quiera recibir su salario en otra fecha no correspondiente", function () {
        let listaDeDatosDeBoletaDePago = [new DatosBoletaDePago(empleadoFijoUno),new DatosBoletaDePago(empleadoFijoDos),new DatosBoletaDePago(empleadoFijoUno)];
        let listaFiltrada = filtroBoletasDePagoPorFechaDePago(listaDeDatosDeBoletaDePago);
        let facturaBoletaDePago = new GeneradorBoletaDePagoFactura(listaFiltrada);
        expect(facturaBoletaDePago.generarFacturaBoletaDePago()).equals("");
    });

    it("no se deberia permitir imprimir factura cuando un empleado quiera recibir su salario en otra fecha no correspondiente", function () {
        let listaDeDatosDeBoletaDePago = [new DatosBoletaDePago(empleadoFijoUno),new DatosBoletaDePago(empleadoFijoDos)];
        listaDeDatosDeBoletaDePago[1].validador = () => {
            return true;
        };
        let listaFiltrada = filtroBoletasDePagoPorFechaDePago(listaDeDatosDeBoletaDePago);
        let facturaBoletaDePago = new GeneradorBoletaDePagoFactura(listaFiltrada);
        expect(facturaBoletaDePago.generarFacturaBoletaDePago()).equals('Empleado: Matias Perez Salario: 8000 Bolivianos Fecha de pago: ' + String(new Date()).slice(0, 15)+ "\n");
    });
});