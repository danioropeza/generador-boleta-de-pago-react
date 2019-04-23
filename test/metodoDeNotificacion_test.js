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
        let metodoDeNotificacionPorWhatsapp = new MetodoDeNotificacionWhatsapp( );
        let contenido = {
            destinatario: "75985489",
            mensaje: "hola mundo",
        }
        empleado.elegirMetodoDeNotificacion(metodoDeNotificacionPorWhatsapp);
        expect(empleado.metodoNotificacion.enviar(contenido)).equal("Se envio una notificacion por Whatsapp al 75985489 con el siguiente mensaje -> hola mundo");

    });
    it('Deberia enviar una notificacion por Whatsapp', function() {
        let metodoDeNotificacionPorWhatsapp = new MetodoDeNotificacionWhatsapp( );
        let contenido = {
            destinatario: "75985489",
            mensaje: "hola mundo",
        }
        expect(metodoDeNotificacionPorWhatsapp.enviar(contenido)).equal("Se envio una notificacion por Whatsapp al 75985489 con el siguiente mensaje -> hola mundo");
    });

    it('Deberia enviar una notificacion por Facebook', function() {
        let metodoDeNotificacionPorFacebook = new MetodoDeNotificacionFacebook();
        let contenido = {
            destinatario: "Julia Valentina Gutierrez",
            mensaje: "hola mundo",
        }
        expect(metodoDeNotificacionPorFacebook.enviar(contenido)).equal("Se envio una notificacion por Facebook a Julia Valentina Gutierrez con el siguiente mensaje -> hola mundo");
    });

    it("Deberia poder enviar una notificación de email a un correo dado", function (done) {
        let metodoDeNotificacionPorEmail = new MetodoDeNotificacionEmail();
        let contenido = {
            destinatario: "valita129@gmail.com",
            asunto: "Pruebas correo",
            mensaje: "hola mundo",
        }
        metodoDeNotificacionPorEmail.enviar(contenido, function (error, informacion) {
            expect(informacion.response).to.have.string("250 2.0.0 OK");
            done();
        });
    });

});