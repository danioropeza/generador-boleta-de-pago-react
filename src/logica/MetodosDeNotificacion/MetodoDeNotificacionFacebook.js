const MetodoDeNotificacion = require("./MetodoDeNotificacion").MetodoDeNotificacion;
class MetodoDeNotificacionFacebook  extends MetodoDeNotificacion{
    constructor(mensaje, medio) {
        super(mensaje, medio);
    }
    enviar(){
        return "Se envio una notificacion por Facebook a " + 
                this.medio + " con el siguiente mensaje -> " + this.mensaje;
    }

}
module.exports = { MetodoDeNotificacionFacebook };