class PresentadorGenerarEmpleadoJSON {
    constructor() {
       
    }
    obtenerRespuesta(mensaje){
        if(mensaje=='Ok')
            return "Se genero correctamente el archivo JSON";
        return "No se creo correctamente el archivo JSON";
    }
   
}

module.exports = { PresentadorGenerarEmpleadoJSON }