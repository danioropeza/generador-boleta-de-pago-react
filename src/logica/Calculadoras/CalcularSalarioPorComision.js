class CalcularSalarioPorComision{
    constructor(empleado) {
        this.empleado = empleado;
        this.tarjeta_ventas = empleado.tarjeta_ventas;
        this.obtenerSalario = this.calcularSalarioPorComision.bind(this);
    }
    calcularSalarioPorComision(){
        return this.tarjeta_ventas.calcularComisionTotal();
    }
}

module.exports = { CalcularSalarioPorComision };