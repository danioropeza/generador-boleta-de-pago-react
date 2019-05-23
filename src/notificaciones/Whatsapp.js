class Whatsapp{
    constructor(empleado) {
        this.empleado=empleado;


    }
    notificar(){
        return this.empleado.notificar() + " Whatsapp ";
    }
}

module.exports = { Whatsapp };