var nodemailer = require('nodemailer');
class MetodoDeNotificacionEmail {
    constructor() {
        this.medio="Email";
        this.remitente ='arquipruebas86@gmail.com';
         this.transportador = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.remitente,
                pass: 'arquitectura86'
            }

        });

    }
    enviar(contenidoCorreo,callback){
        var opcionesDeCorreo = {
            from: this.remitente,
            to: contenidoCorreo.destinatario,
            subject: contenidoCorreo.asunto,
            text: contenidoCorreo.mensaje
        };
        this.transportador.sendMail(opcionesDeCorreo, callback);
    }
}
module.exports = { MetodoDeNotificacionEmail };