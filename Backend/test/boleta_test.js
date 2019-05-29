var expect = require('chai').expect;

var Empleado = require('../src/ReglasDeNegocioEmpresa/Empleado/Empleado.js').Empleado;
var CalculadoraPorFijo = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorFijo').CalculadoraPorFijo;
var CalculadoraPorHora = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorHora').CalculadoraPorHora;
var CalculadoraPorComision = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorComision').CalculadoraPorComision;
var AsistenciaPorDia = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/AsistenciaPorDia').AsistenciaPorDia;
var TarjetaVenta = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/TarjetaVenta').TarjetaVenta;
var TarjetaAsistencia = require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/TarjetaAsistencia').TarjetaAsistencia;
var ClasificadorFechaDePagoPorHora = require('../src/ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoPorHora').ClasificadorFechaDePagoPorHora;
var ClasificadorFechaDePagoFijo = require('../src/ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoFijo').ClasificadorFechaDePagoFijo;
var ClasificadorFechaDePagoPorComision = require('../src/ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoPorComision').ClasificadorFechaDePagoPorComision;
var MetodoDePago = require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/MetodoDePago').MetodoDePago;
var BoletaDePago = require('../src/ReglasDeNegocioEmpresa/GeneradorBoletas/Boleta/boletaDePago').BoletaDePago;


describe('Boleta de pago',function(){
    it('recibe un Empleado fijo y genera su Boleta de pago', function () {
        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadora = new CalculadoraPorFijo(1800,fechaIncioLaboral);
        let calculadoraDeFecha = new ClasificadorFechaDePagoFijo(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Deposito");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        let boletaPago = new BoletaDePago();
        let fechaDePago = new Date(2019,3,30);
        fechaDePago.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 1800
                            Tipo de moneda: Bs
                            Metodo de pago: Deposito`;
        let boletaResultante=boletaPago.generarBoleta(empleado);
        expect(boletaEsperada).equal(boletaResultante);
    });


    it('recibe un Empleado por hora y genera su Boleta de pago', function () {
        let asistencia1 = new AsistenciaPorDia("2019-03-02", "08:00:00", "12:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        expect(calculadora.calcularSalario()).equal(800);
        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Efectivo");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        let boletaPago = new BoletaDePago();
        let fechaDePago = new Date(2019,3,5);
        fechaDePago.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 800
                            Tipo de moneda: Bs
                            Metodo de pago: Efectivo`;
        let boletaResultante=boletaPago.generarBoleta(empleado);
        expect(boletaEsperada).equal(boletaResultante);
    });

    it('recibe un Empleado por comision y genera su Boleta de pago', function () {
        let tarjetaVenta = new TarjetaVenta(500, "2018-03-02");
        let calculadora = new CalculadoraPorComision(200, 0.05, [tarjetaVenta]);

        let fechaIncioLaboral = new Date(2019, 3, 2);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorComision(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        let boletaPago = new BoletaDePago();
        let fechaDePago = new Date(2019,3,12);
        fechaDePago.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 225
                            Tipo de moneda: Bs
                            Metodo de pago: Cheque`;
        let boletaResultante=boletaPago.generarBoleta(empleado);
        expect(boletaEsperada).equal(boletaResultante);
    });
});