var expect = require('chai').expect;

var Empleado = require('../src/empleado/Empleado.js').Empleado;
var CalculadoraPorFijo = require('../src/calculadoraSalario/CalculadoraPorFijo').CalculadoraPorFijo;
var CalculadoraPorHora = require('../src/calculadoraSalario/CalculadoraPorHora').CalculadoraPorHora;
var CalculadoraPorComision = require('../src/calculadoraSalario/CalculadoraPorComision').CalculadoraPorComision;
var AsistenciaPorDia = require('../src/tarjetas/AsistenciaPorDia').AsistenciaPorDia;
var TarjetaVenta = require('../src/tarjetas/TarjetaVenta').TarjetaVenta;
var TarjetaAsistencia = require('../src/tarjetas/TarjetaAsistencia').TarjetaAsistencia;
var ClasificadorFechaDePagoPorHora = require('../src/calculadoraFechaDePago/ClasificadorFechaDePagoPorHora').ClasificadorFechaDePagoPorHora;
var ClasificadorFechaDePagoFijo = require('../src/calculadoraFechaDePago/ClasificadorFechaDePagoFijo').ClasificadorFechaDePagoFijo;
var ClasificadorFechaDePagoPorComision = require('../src/calculadoraFechaDePago/ClasificadorFechaDePagoPorComision').ClasificadorFechaDePagoPorComision;
var MetodoDePago = require('../src/metodoDePago/MetodoDePago').MetodoDePago;

describe('calcular el salario para empleados y su fecha de paga', function () {
    
    it('obtener salario para un empleado fijo que gana 1800 y que asistio un dia laboral', function () {

        let fechaIncioLaboral = new Date(2019, 3, 22);
        let calculadora = new CalculadoraPorFijo(1800,fechaIncioLaboral);

        let calculadoraDeFecha = new ClasificadorFechaDePagoFijo(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Deposito");
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,metodoDePago);
        expect(empleado.calcularSalario()).equal(1800);
    });

    it('obtener la fecha de paga para un empleado fijo', function () {
        let tarjetaHora = new AsistenciaPorDia("2019-05-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 22);
        let calculadoraDeFecha = new ClasificadorFechaDePagoFijo(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha,metodoDePago);
        let fechaEsperada = new Date(2019, 5, 28)

        let correspondePagar = empleado.correspondePagar(fechaEsperada);

        expect(correspondePagar).equal(true);
    });

    it('obtener el salario para un empleado por hora con 1 tarjeta de venta y 200 de salario por hora', function () {
        let asistencia1= new AsistenciaPorDia("2019-03-22", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let fechaIncioLaboral = new Date(2019, 3, 22);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Efectivo");
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,metodoDePago);
        expect(empleado.calcularSalario()).equal(800);
    });

    it('obtener la fecha de paga para un empleado por hora', function () {
        let asistencia1 = new AsistenciaPorDia("2019-05-03", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Deposito");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        let correspondePagar = empleado.correspondePagar(new Date(2019, 5, 7));
        expect(correspondePagar).equal(true);
    });
    
    
    it('obtener el salario para un empleado por hora con mas de 1 tarjeta de venta y 200 de salario por hora', function () {
        let asistencia1 = new AsistenciaPorDia("2019-03-22", "16:00:00", "20:00:00");
        let asistencia2 = new AsistenciaPorDia("2019-03-23", "16:00:00", "20:00:00");
        let asistencia3 = new AsistenciaPorDia("2019-03-24", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        tarjetaAsistencia.agregarAsistencia(asistencia2);
        tarjetaAsistencia.agregarAsistencia(asistencia3);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let metodoDePago = new MetodoDePago("Efectivo");
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,metodoDePago);
        expect(empleado.calcularSalario()).equal(2400);
    });

    it('obtener salario para un empleado por comision con 1 tarjeta de venta y 5% de comision', function () {
        let tarjetaVentas = new TarjetaVenta(500, "2019-03-22");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorComision(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,metodoDePago);
        expect(empleado.calcularSalario()).equal(225);
    });

    it('obtener salario para un empleado por comision con 3 tarjetas de venta y 7% de comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-03-22");
        let tarjetaVenta2 = new TarjetaVenta(300, "2019-03-22");
        let tarjetaVenta3 = new TarjetaVenta(100, "2019-03-22");

        let lista = [tarjetaVenta1, tarjetaVenta2, tarjetaVenta3];
    
        let calculadora = new CalculadoraPorComision(700,0.07,lista);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorComision(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1, calculadora,calculadoraDeFecha,metodoDePago);

        expect(empleado.calcularSalario()).equal(763);
    });

    it('obtener la fecha de paga para un empleado por comision', function () {
        let tarjetaVenta1 = new TarjetaVenta(500, "2019-05-03");
        let calculadora = new CalculadoraPorComision(1000, 0.10, [tarjetaVenta1]);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorComision();
        let metodoDePago = new MetodoDePago("Efectivo");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        let fechaEsperada = new Date("April 5 2019");
        let correspondePagar = empleado.correspondePagar(fechaEsperada);
        expect(correspondePagar).equal(true);
    });
});
