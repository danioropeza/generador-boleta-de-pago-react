class CalcularSalarioPorComision{
    constructor(empleado) {
        this.empleado = empleado;
        this.tarjetaVentas = empleado.tarjetaVentas;
        this.obtenerSalario = this.calcularSalarioPorComision.bind(this);
    }
    calcularSalarioPorComision(){
        return this.tarjetaVentas.calcularComisionTotal();
    }
}

module.exports = { CalcularSalarioPorComision };