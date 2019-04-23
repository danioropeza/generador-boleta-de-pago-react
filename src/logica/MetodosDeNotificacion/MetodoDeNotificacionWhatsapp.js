class MetodoDeNotificacionWhatsapp{
    constructor(mensaje, medio) {
        this.mensaje = mensaje;
        this.medio = medio;
    }
    enviar(contenido){
        return "Se envio una notificacion por Whatsapp al " +
            contenido.destinatario + " con el siguiente mensaje -> " + contenido.mensaje;
    }
}

module.exports = { MetodoDeNotificacionWhatsapp };