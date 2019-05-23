var expect = require('chai').expect
var ClasificadorFechaDePagoPorHora = require('../src/calculadoraFechaDePago/ClasificadorFechaDePagoPorHora').ClasificadorFechaDePagoPorHora;
var ClasificadorFechaDePagoFijo = require('../src/calculadoraFechaDePago/ClasificadorFechaDePagoFijo').ClasificadorFechaDePagoFijo;
var ClasificadorFechaDePagoPorComision = require('../src/calculadoraFechaDePago/ClasificadorFechaDePagoPorComision').ClasificadorFechaDePagoPorComision;

describe('CalculadoraFechaDePago', function () {
it('recibe una fecha y devuelve la fecha del viernes para pagar a un empleado por hora', function () {

    let fechaIncioLaboral = new Date(2019, 3, 8);
    let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora();
    let fechaEsperada = new Date(2019, 3, 12);
    let correspondePagar = calculadoraDeFecha.correspondePagar(fechaEsperada);


    expect(correspondePagar).equal(true);


});

it('recibe una fecha y devuelve la fecha del ultimo dia habil del mes para un empleado fijo', function () {

    let calculadoraDeFecha = new ClasificadorFechaDePagoFijo();
    let fechaEsperada = new Date(2019, 5, 28);
    let correspondePagar = calculadoraDeFecha.correspondePagar(fechaEsperada);

    expect(correspondePagar).equal(true);

});
it('recibe una fecha y devuelve la fecha del 2do viernes para pagar a un empleado por comision', function () {

    let comprabanteDeFechaHora = new ClasificadorFechaDePagoPorComision();
    let correspondePagar = comprabanteDeFechaHora.correspondePagar(new Date("April 5 2019"));

    expect(correspondePagar).equal(true);

});

});