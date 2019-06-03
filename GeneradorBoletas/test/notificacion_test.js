var expect = require('chai').expect;

var Email = require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosNotificacion/Email').Email;
var Facebook = require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosNotificacion/Facebook').Facebook;
var Whatsapp = require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosNotificacion/Whatsapp').Whatsapp;
var Empleado = require('../src/ReglasDeNegocioEmpresa/Empleado/Empleado').Empleado;
var ClasificadorFechaDePagoPorHora = require("../src/ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoPorHora").ClasificadorFechaDePagoPorHora;

var CalculadoraPorHora = require("../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorHora").CalculadoraPorHora;
var AsistenciaPorDia = require("../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/AsistenciaPorDia").AsistenciaPorDia;
var TarjetaAsistencia = require("../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/TarjetaAsistencia").TarjetaAsistencia;
var MetodoDePago = require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/MetodoDePago').MetodoDePago;
describe('MetodosNotificacion', function () {

    it('deberia devolver vacio cuando un Empleado no agrego ningun medio de notificacion',  function () {
        let empleado = new Empleado();
        expect(empleado.notificar()).equal("");
    });

    it('deberia de notificar por facebook a un Empleado que  agrego facebook como medio de notificacion',  function () {
        let asistencia1 = new AsistenciaPorDia("2019-05-03", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Deposito");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        empleado = new Facebook(empleado);
        expect(empleado.notificar()).equal(" Facebook ");
    });

    it('deberia de notificar por facebook whatsapp y email a un Empleado que  agrego estos 3 medios como medios de notificacion',  function () {
        let asistencia1 = new AsistenciaPorDia("2019-05-03", "16:00:00", "20:00:00");
        let tarjetaAsistencia = new TarjetaAsistencia();
        tarjetaAsistencia.agregarAsistencia(asistencia1);
        let calculadora = new CalculadoraPorHora(200, tarjetaAsistencia);
        let fechaIncioLaboral = new Date(2019, 5, 3);
        let calculadoraDeFecha = new ClasificadorFechaDePagoPorHora(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Deposito");
        let empleado = new Empleado("Erick", 1, calculadora, calculadoraDeFecha,metodoDePago);
        empleado = new Facebook(empleado);
        empleado = new Whatsapp(empleado);
        empleado = new Email(empleado);

        expect(empleado.notificar()).equal(" Facebook  Whatsapp  Email ");
    });
});