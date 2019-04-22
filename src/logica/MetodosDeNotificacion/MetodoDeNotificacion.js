const MetodoDeNotificacionWhatsapp = require("./MetodoDeNotificacionWhatsapp").CalcularSalarioPorHora;
const MetodoDeNotificacionFacebook = require("./MetodoDeNotificacionFacebook").CalcularSalarioFijo;
const MetodoDeNotificacionEmail = require("./MetodoDeNotificacionEmail").CalcularSalarioPorComision;

class MetodoDeNotificacion {
    constructor(metodo) {
        
    }
    ObtenerClaseDeCalculadoraDeSalario(){
        switch ("") {
            case "whatsapp":
                return new MetodoDeNotificacionWhatsapp(this.empleado);
            case "facebook":
                return new MetodoDeNotificacionFacebook(this.empleado);
            default:
                return new MetodoDeNotificacionEmail(this.empleado);
        }
    }
}

module.exports = { MetodoDeNotificacion };