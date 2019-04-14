class CalcularSalarioFijo{
    constructor(empleado) {
        this.empleado = empleado;
        this.obtenerSalario = this.calcularSalarioFijo.bind(this);
    }
    calcularSalarioFijo(){
        return this.empleado.salario;
    }
}

module.exports = { CalcularSalarioFijo };