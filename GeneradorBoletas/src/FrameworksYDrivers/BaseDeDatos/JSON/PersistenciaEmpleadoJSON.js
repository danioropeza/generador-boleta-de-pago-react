var fs = require('fs');
function cargarDatos(){
    var obj = JSON.parse(fs.readFileSync('../../FrameworksYDrivers/BaseDeDatos/JSON/empleados.json', 'utf8'));
    console.log(obj);
    return [obj];
}
class  PersistenciaEmpleadoJSON{ 
    constructor(persitencia) {
        this.persitencia = persitencia;
        this.listaEmpleados = cargarDatos();
    }
    insertarEmpleado(empleado){
        if(!empleado)
            return "Error";
        this.listaEmpleados.push(empleado);
        return "Ok";
    }
    obtenerUnEmpleado(ci){
        var respuesta = null;
        this.listaEmpleados.forEach((empleado) => {
            if(empleado.ci == ci){
                respuesta = empleado;
            }
        });
        return respuesta;
    }
    eliminarEmpleado(ci) {
        let respuesta = "";
        for(var index=0; index<this.listaEmpleados.length; index++){
            if(this.listaEmpleados[index].ci == ci){
                this.listaEmpleados.splice(index, 1)
                respuesta = "Ok";
            }
        }
        return respuesta;
    }
    obtenerEmpleados(){
        return this.listaEmpleados;
    }
}
module.exports = { PersistenciaEmpleadoJSON };


