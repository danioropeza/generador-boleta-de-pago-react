var expect = require('chai').expect;

const Empleado = require ('../src/logica/Empleado').Empleado;
const PagoEnDeposito = require ('../src/logica/MetodosDePago/PagoEnDeposito').PagoEnDeposito;
const PagoEnEfectivo = require ('../src/logica/MetodosDePago/PagoEnEfectivo').PagoEnEfectivo;
const PagoEnCheque = require ('../src/logica/MetodosDePago/PagoEnCheque').PagoEnCheque;

describe('Metodo de Pago', function() {

    let empleado = new Empleado({
        nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
    });
    let empleado1 = new Empleado({
        nombre: " Vargas",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
    });
    let empleado3 = new Empleado({
        nombre: "Adrian ",
        ci: "7711450",
        salario: 6000,
        fecha_nacimiento: "tue mar 28 2009",
    });
    it('deberia devolver el metodo de pago en cheque', function() {
        let cheque = new PagoEnCheque({nombre_portador:empleado1.nombre,ci_portador:empleado1.ci,monto:empleado1.salario, tipo_pago:"Cheque"});
        empleado1.elegirMetodoPago(cheque);
        expect(empleado1.metodo_pago.tipo_pago).equal("Cheque");

    });
    it('deberia devolver el metodo de pago en efectivo', function() {
        let efectivo = new PagoEnEfectivo({nombre_portador:empleado.nombre,ci_portador:empleado.ci,monto:empleado.salario, tipo_pago:"Efectivo"});
        empleado.elegirMetodoPago(efectivo);
        expect(empleado.metodo_pago.tipo_pago).equal("Efectivo");

    });
    it('deberia devolver el metodo de pago en deposito', function() {
        let deposito = new PagoEnDeposito({nombre_portador:empleado3.nombre,ci_portador:empleado3.ci,monto:empleado3.salario, tipo_pago:"Deposito"});
        empleado3.elegirMetodoPago(deposito);
        expect(empleado3.metodo_pago.tipo_pago).equal("Deposito");

    });







});
