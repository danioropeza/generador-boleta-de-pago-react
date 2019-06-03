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
        this.listaEmpleados.push(JSON.stringify(empleado));
        console.log("Lista",this.listaEmpleados);
        return "Ok";
    }
    buscarEmpleado(empleado){
           
    }
        
    actualizarEmpleado(empleado, nuevosValores){
    }
    eliminarEmpleado(empleado) {

    }
    devolverTodosLosEmpleado(){
        return this.listaEmpleados;

    }
}
module.exports = { PersistenciaEmpleadoJSON };


