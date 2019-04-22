const MetodoDeNotificacionWhatsapp = require("./MetodoDeNotificacionWhatsapp").MetodoDeNotificacionWhatsapp;
const MetodoDeNotificacionFacebook = require("./MetodoDeNotificacionFacebook").MetodoDeNotificacionFacebook;
const MetodoDeNotificacionEmail = require("./MetodoDeNotificacionEmail").MetodoDeNotificacionEmail;

class MetodoDeNotificacion {
    constructor(mensaje, medio) {
        this.mensaje = mensaje;
        this.medio = medio;
    }
    enviar() {
        
    }
    
}

module.exports = { MetodoDeNotificacion };



