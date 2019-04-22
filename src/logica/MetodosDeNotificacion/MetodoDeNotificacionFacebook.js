class MetodoDeNotificacionFacebook{
    constructor(mensaje, medio) {
        this.mensaje = mensaje;
        this.medio = medio;
    }
    enviar(){
        return "Se envio una notificacion por Facebook a " + 
                this.medio + " con el siguiente mensaje -> " + this.mensaje;
    }

}
module.exports = { MetodoDeNotificacionFacebook };