class PresentadorGenerarBoletas {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(mensaje=='Ok')
            return "Se genero correctamente el archivo JSON de boletas de pago";
        return "No se creo correctamente el archivo JSON de boletas de pago";
    }
   
}

module.exports = { PresentadorGenerarBoletas }