const CalcularSalarioPorHora = require("./CalcularSalarioPorHora").CalcularSalarioPorHora;
const CalcularSalarioPorComision = require("./CalcularSalarioPorComision").CalcularSalarioPorComision;
const CalcularSalarioFijo = require("./CalcularSalarioFijo").CalcularSalarioFijo;

class CalcularSalario {
    constructor(empleado) {
        this.empleado = empleado;
        this.calculadorDeSalario = this.ObtenerClaseDeCalculadoraDeSalario().obtenerSalario;
    }
    ObtenerClaseDeCalculadoraDeSalario(){
        switch (this.empleado.tipo) {
            case "Parcial":
                return new CalcularSalarioPorHora(this.empleado);
            case "Comision":
                return new CalcularSalarioPorComision(this.empleado);
            default:
                return new CalcularSalarioFijo(this.empleado);
        }
    }
}

module.exports = { CalcularSalario };