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
var GeneradorBoletasDePago = require('../src/ReglasDeNegocioEmpresa/GeneradorBoletas/GeneradorBoletasPago').GeneradorBoletasDePago;
var MetodoDePago = require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/MetodoDePago').MetodoDePago;
let empleados = [];
let boletasEsperadas = [];

describe('Generador de boletas de pago',function(){
    it('recibe todos los empleados y genera sus boletas de pago', function () {
        crearListaDeEmpleados();
        let generadorDeBoletas = new GeneradorBoletasDePago(empleados);
        generadorDeBoletas.generarBoletasDePagoParaTodosLosEmpleados();
        let index=0;
        for (let boletaResultante of generadorDeBoletas.boletasGeneradas) {
            let boletaEsperada = boletasEsperadas[index];
            expect(boletaEsperada).equal(boletaResultante);
            index++;
        }
    });

    function crearListaDeEmpleados() {
        let fechaIncioLaboral1 = new Date(2019, 3, 22);
        let calculadora1 = new CalculadoraPorFijo(4000,fechaIncioLaboral1);
        let calculadoraDeFecha1 = new ClasificadorFechaDePagoFijo(fechaIncioLaboral1);
        let metodoDePagoDeposito = new MetodoDePago("Deposito");
        let empleado1 = new Empleado("Erick", 1, calculadora1, calculadoraDeFecha1,metodoDePagoDeposito);
        let fechaDePago1 = new Date(2019,3,30);
        fechaDePago1.toString();
        let boletaEsperada=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 4000
                            Tipo de moneda: Bs
                            Metodo de pago: Deposito`;

        let tarjetaVentas = new TarjetaVenta(500, "2019-03-22");
        let calculadora2 = new CalculadoraPorComision(200, 0.05, [tarjetaVentas]);
        let fechaIncioLaboral2 = new Date(2019, 3, 2);
        let calculadoraDeFecha2 = new ClasificadorFechaDePagoPorComision(fechaIncioLaboral2);
        let metodoDePagoEfectivo = new MetodoDePago("Efectivo");
        let empleado2 = new Empleado("Juan", 1, calculadora2,calculadoraDeFecha2,metodoDePagoEfectivo);
        let fechaDePago2 = new Date(2019,3,12);
        fechaDePago2.toString();
        let boletaEsperad2=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 225
                            Tipo de moneda: Bs
                            Metodo de pago: Efectivo`;

        let asistencia1 = new AsistenciaPorDia("2019-03-24",  "08:00:00", "12:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora3 = new CalculadoraPorHora(200,tarjetaAsistencia);
        let fechaIncioLaboral3 = new Date(2019, 3, 22);
        let calculadoraDeFecha3 = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral3);
        let empleado3 = new Empleado("Ana", 1, calculadora3, calculadoraDeFecha3,metodoDePagoEfectivo);
        let fechaDePago3 = new Date(2019,3,26);
        fechaDePago3.toString();
        let boletaEsperad3=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 800
                            Tipo de moneda: Bs
                            Metodo de pago: Efectivo`;

        let asistencia2 = new AsistenciaPorDia("2019-03-22", "08:00:00", "12:00:00");
        let tarjetaAsistencia2 = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia2);
        let calculadora5 = new CalculadoraPorHora(500,tarjetaAsistencia2);
        let fechaIncioLaboral5 = new Date(2019, 3, 22);
        let calculadoraDeFecha5 = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral5);
        let metodoDePagoCheque = new MetodoDePago("Cheque");
        let empleado5 = new Empleado("Maria", 1, calculadora5, calculadoraDeFecha5,metodoDePagoCheque);
        let fechaDePago5 = new Date(2019,3,26);
        fechaDePago5.toString();
        let boletaEsperad5=`BOLETA DE PAGO
                            Ci: 1
                            Empleado: Erick
                            Salario: 2000
                            Tipo de moneda: Bs
                            Metodo de pago: Cheque`;
        empleados = [empleado1];
        boletasEsperadas = [boletaEsperada,boletaEsperad2,boletaEsperad3,boletaEsperad5];
    }
});