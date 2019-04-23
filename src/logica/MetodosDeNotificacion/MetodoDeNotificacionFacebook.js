class MetodoDeNotificacionFacebook{
    constructor() {
        this.medio = "Facebook";
    }
    enviar(contenido){
        return "Se envio una notificacion por Facebook a " + 
                contenido.destinatario + " con el siguiente mensaje -> " + contenido.mensaje;
    }

}
module.exports = { MetodoDeNotificacionFacebook };