var Email = require('./Email' ).Email;
var Facebook = require('./Facebook').Facebook;
var Whatsapp = require('./Whatsapp').Whatsapp;

class MetodosNotificacionFactory {
    constructor(metodoNotificacion, empleado) {
            if(metodoNotificacion =='Facebook')
                empleado = new Facebook(empleado);
            if(metodoNotificacion =='Whatsapp')
                empleado = new Whatsapp(empleado);
            if(metodoNotificacion =='Email')
                empleado = new Email(empleado);
            return empleado;

    }
}
module.exports= { MetodosNotificacionFactory };
