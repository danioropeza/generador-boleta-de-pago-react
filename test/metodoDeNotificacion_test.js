var expect = require('chai').expect;

const Empleado = require ('../src/logica/Empleado').Empleado;
const PagoEnDeposito = require ('../src/logica/MetodosDePago/PagoEnDeposito').PagoEnDeposito;
const PagoEnEfectivo = require ('../src/logica/MetodosDePago/PagoEnEfectivo').PagoEnEfectivo;
const PagoEnCheque = require ('../src/logica/MetodosDePago/PagoEnCheque').PagoEnCheque;

describe('Pruebas para metodos de notificacion', function() {
    let empleado = new Empleado({
        nombre: "Adrian Vargas",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
    });
    let empleadoUno = new Empleado({
        nombre: " Vargas",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
    });
    let empleadoDos = new Empleado({
        nombre: "Adrian ",
        ci: "7711450",
        salario: 6000,
        fechaNacimiento: "tue mar 28 2009",
    });
    it('Deberia devolver el metodo de pago en efectivo', function() {
        let efectivo = new PagoEnEfectivo({nombrePortador:empleado.nombre,ciPortador:empleado.ci,monto:empleado.salario, tipoDePago:"Efectivo"});
        empleado.elegirMetodoDePago(efectivo);
        expect(empleado.metodoDePago.tipoDePago).equal("Efectivo");

    });
    it('Deberia devolver el metodo de pago en cheque', function() {
        let cheque = new PagoEnCheque({nombrePortador:empleadoUno.nombre,ciPortador:empleadoUno.ci,monto:empleadoUno.salario, tipoDePago:"Cheque"});
        empleadoUno.elegirMetodoDePago(cheque);
        expect(empleadoUno.metodoDePago.tipoDePago).equal("Cheque");

    });
    it('Deberia devolver el metodo de pago en deposito', function() {
        let deposito = new PagoEnDeposito({nombrePortador:empleadoDos.nombre,ciPortador:empleadoDos.ci,monto:empleadoDos.salario, tipoDePago:"Deposito"});
        empleadoDos.elegirMetodoDePago(deposito);
        expect(empleadoDos.metodoDePago.tipoDePago).equal("Deposito");

    });

});
