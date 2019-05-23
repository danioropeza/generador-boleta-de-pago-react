var expect = require('chai').expect

var CalculadoraPorFijo = require('../src/calculadoraSalario/CalculadoraPorFijo').CalculadoraPorFijo;
var CalculadoraPorHora = require('../src/calculadoraSalario/CalculadoraPorHora').CalculadoraPorHora;
var CalculadoraPorComision = require('../src/calculadoraSalario/CalculadoraPorComision').CalculadoraPorComision;
var AsistenciaPorDia = require('../src/tarjetas/AsistenciaPorDia').AsistenciaPorDia;
var TarjetaAsistencia = require('../src/tarjetas/TarjetaAsistencia').TarjetaAsistencia;
var TarjetaVenta = require('../src/tarjetas/TarjetaVenta').TarjetaVenta;
let DiasTrabajados=[];
describe('Calculadora de salario', function () {

    it('calcular salario para un empleado fijo que asistio un dia laboral del mes', function () {
        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadora = new CalculadoraPorFijo(2000,fechaIncioLaboral);
        expect(calculadora.calcularSalario()).equal(2000);
    });

    it('calcular salario para un empleado fijo que asistio 10 dias laborales del mes', function () {
        let fechaIncioLaboral = new Date(2019, 4, 20);
        let calculadora = new CalculadoraPorFijo(2300,fechaIncioLaboral);
        expect(calculadora.calcularSalario()).equal(1000);
    });


    it('calcular el salario para un empleado por hora con 1 tarjeta de hora', function () {
        let asistencia1 = new AsistenciaPorDia("2019-03-22", "08:00:00", "12:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        expect(calculadora.calcularSalario()).equal(800);
    });

    it('calcular el salario para un empleado por hora con mas de 1 tarjeta de hora', function () {
        let asistencia1 = new AsistenciaPorDia("2019-03-22", "08:00:00", "12:00:00");
        let asistencia2 = new AsistenciaPorDia("2019-03-23", "08:00:00", "18:00:00");
        let asistencia3 = new AsistenciaPorDia("2019-03-24", "07:00:00", "19:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        tarjetaAsistencia.agregarAsistencia(asistencia2);
        tarjetaAsistencia.agregarAsistencia(asistencia3);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        expect(calculadora.calcularSalario()).equal(5800);
    });
    
    it('calcular el salario para un empleado por comision con 10% de comision y 1 tarjeta de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-03-22");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        expect(calculadora.calcularSalario()).equal(1050);
    });
    
    it('calcular el salario para un empleado por comision con 10% de comision y mas de 1 tarjeta de venta', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-03-22");
        let tarjetaVenta2 = new TarjetaVenta(900, "2019-03-23");
        let tarjetaVenta3 = new TarjetaVenta(300, "2019-03-23");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3]);
        expect(calculadora.calcularSalario()).equal(1170);
    });

});