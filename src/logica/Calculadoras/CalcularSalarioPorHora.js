class CalcularSalarioPorHora{
    constructor(empleado) {
        this.empleado = empleado;
        this.tarjeta_asistencia = empleado.tarjeta_asistencia;
        this.obtenerSalario = this.calcularSalarioPorHora.bind(this);
    }
    calcularSalarioPorHora(){
        return this.tarjeta_asistencia.calcularHorasTrabajadas()*200;
    }

}

module.exports = { CalcularSalarioPorHora };