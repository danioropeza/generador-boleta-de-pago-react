class  InterfazRepositorioEmpleado{
    constructor(persitencia) {
        this.persitencia = persitencia;
    }
    insertarEmpleado(empleado){
        return  this.persitencia.insertarEmpleado(empleado);
    }
    buscarEmpleado(empleado){
        this.persitencia.buscarEmpleado(empleado);
    }
    actualizarEmpleado(empleado, nuevosValores){
        this.persitencia.actualizarEmpleado(empleado, nuevosValores);
    }
    eliminarEmpleado(empleado) {
        this.persitencia.eliminarEmpleado(empleado);
    }
    devolverTodosLosEmpleado(){
        this.persitencia.devolverTodosLosEmpleado();
    }
}
module.exports = { InterfazRepositorioEmpleado };