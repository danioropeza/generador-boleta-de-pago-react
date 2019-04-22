const MetodoDeNotificacion = require("./MetodoDeNotificacion").MetodoDeNotificacion;
class MetodoDeNotificacionEmail extends MetodoDeNotificacion{
    constructor(mensaje, medio) {
        super(mensaje, medio);
    }
    enviar(){
        return "Se envio una notificacion por Email al " + 
                this.medio + " con el siguiente mensaje -> " + this.mensaje;
    }
}

module.exports = { MetodoDeNotificacionEmail };