class MetodoDeNotificacionWhatsapp{
    constructor(mensaje, medio) {
        this.mensaje = mensaje;
        this.medio = medio;
    }
    enviar(){
        return "Se envio una notificacion por Whatsapp al " + 
                this.medio + " con el siguiente mensaje -> " + this.mensaje;
    }
}

module.exports = { MetodoDeNotificacionWhatsapp };