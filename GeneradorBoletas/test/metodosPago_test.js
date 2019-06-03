var expect = require('chai').expect;

const Empleado = require ('../src/ReglasDeNegocioEmpresa/Empleado/Empleado').Empleado;
const PagoEnDeposito = require ('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/PagoEnDeposito').PagoEnDeposito;
const PagoEnEfectivo = require ('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/PagoEnEfectivo').PagoEnEfectivo;
const PagoEnCheque = require ('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/PagoEnCheque').PagoEnCheque;

describe('Metodo de Pago', function() {

    let empleado = new Empleado({
        nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
    });

    it('deberia devolver el metodo de pago en cheque', function() {
        let cheque = new PagoEnCheque();
        expect(cheque.obtenerFormaDePagar()).equal("Pago en cheque");

    });
    it('deberia devolver el metodo de pago en efectivo', function() {
        let efectivo = new PagoEnEfectivo();
        expect(efectivo.obtenerFormaDePagar()).equal("Pago en efectivo");

    });
    it('deberia devolver el metodo de pago en deposito', function() {
        let deposito = new PagoEnDeposito()
        expect(deposito.obtenerFormaDePagar()).equal("Pago en deposito");

    });







});