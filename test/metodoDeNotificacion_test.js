var expect = require('chai').expect;

const MetodoDeNotificacionWhatsapp = require ('../src/logica/MetodosDeNotificacion/MetodoDeNotificacionWhatsapp').MetodoDeNotificacionWhatsapp;
const MetodoDeNotificacionFacebook = require ('../src/logica/MetodosDeNotificacion/MetodoDeNotificacionFacebook').MetodoDeNotificacionFacebook;
const MetodoDeNotificacionEmail = require ('../src/logica/MetodosDeNotificacion/MetodoDeNotificacionEmail').MetodoDeNotificacionEmail;

const Empleado = require ('../src/logica/Empleado').Empleado;


describe('Pruebas para metodos de notificacion', function() {

    it('Deberia devolver una notificación por Whatsapp cuando elijo el método de notificación por Whatsapp para el empleado', function() {
        let empleado = new Empleado({
            nombre: "Adrian ",
            ci: "7711450",
            salario: 6000,
            fechaNacimiento: "tue mar 28 2009",
        });
        let metodoDeNotificacionPorWhatsapp = new MetodoDeNotificacionWhatsapp("hola mundo", "75985489");

        empleado.elegirMetodoDeNotificacion(metodoDeNotificacionPorWhatsapp);
        expect(empleado.metodoNotificacion.enviar()).equal("Se envio una notificacion por Whatsapp al 75985489 con el siguiente mensaje -> hola mundo");

    });
    it('Deberia enviar una notificacion por Whatsapp', function() {
        let metodoDeNotificacionPorWhatsapp = new MetodoDeNotificacionWhatsapp("hola mundo", "75985489");
        expect(metodoDeNotificacionPorWhatsapp.enviar()).equal("Se envio una notificacion por Whatsapp al 75985489 con el siguiente mensaje -> hola mundo");
    });

    it('Deberia enviar una notificacion por Facebook', function() {
        let metodoDeNotificacionPorFacebook = new MetodoDeNotificacionFacebook("hola mundo", "Julia Valentina Gutierrez");
        expect(metodoDeNotificacionPorFacebook.enviar()).equal("Se envio una notificacion por Facebook a Julia Valentina Gutierrez con el siguiente mensaje -> hola mundo");
    });

    it('Deberia enviar una notificacion por Email', function() {
        let metodoDeNotificacionPorEmail = new MetodoDeNotificacionEmail("hola mundo", "dany.orop@gmail.com");
        expect(metodoDeNotificacionPorEmail.enviar()).equal("Se envio una notificacion por Email al dany.orop@gmail.com con el siguiente mensaje -> hola mundo");
    });
});