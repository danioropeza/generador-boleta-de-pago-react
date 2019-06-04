class  InterfazRepositorioEmpleado{
    constructor(persitencia) {
        this.persitencia = persitencia;
    }
    insertarEmpleado(empleado){
        return  this.persitencia.insertarEmpleado(empleado);
    }
    obtenerUnEmpleado(ci){
        return this.persitencia.obtenerUnEmpleado(ci);
    }
    eliminarEmpleado(ci) {
        return this.persitencia.eliminarEmpleado(ci);
    }
    obtenerEmpleados(){
        return this.persitencia.obtenerEmpleados();
    }
    generarJSON() {
        return this.persitencia.generarJSON();
    }
}
module.exports = { InterfazRepositorioEmpleado };