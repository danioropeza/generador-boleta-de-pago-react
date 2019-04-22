class CalcularSalarioPorHora{
    constructor(empleado) {
        this.empleado = empleado;
        this.tarjetaAsistencia = empleado.tarjetaAsistencia;
        this.obtenerSalario = this.calcularSalarioPorHora.bind(this);
    }
    calcularSalarioPorHora(){
        return this.tarjetaAsistencia.calcularHorasTrabajadas() * 200;
    }

}

module.exports = { CalcularSalarioPorHora };