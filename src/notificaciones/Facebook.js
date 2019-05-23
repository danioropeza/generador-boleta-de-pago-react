class Facebook{
    constructor(empleado) {
        this.empleado=empleado;
    }
    notificar(){
        return this.empleado.notificar() + " Facebook ";
    }

}
module.exports = { Facebook };