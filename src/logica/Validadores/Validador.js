const ValidadorSalarioFijo = require("./ValidadorSalarioFijo").ValidadorSalarioFijo;
const ValidadorSalarioPorComision = require("./ValidadorSalarioPorComision").ValidadorSalarioPorComision;
const ValidadorSalarioPorHora = require("./ValidadorSalarioPorHora").ValidadorSalarioPorHora;

class Validador {
    constructor(tipoDeEmpleado) {
        this.tipoDeEmpleado = tipoDeEmpleado;
        var claseValidador = this.darCorrespondienteValidador();
        this.validador = claseValidador.validador;
    }

    darCorrespondienteValidador() {
        switch (this.tipoDeEmpleado) {
            case "Parcial":
                return new ValidadorSalarioPorHora();
            case "Comision":
                return new ValidadorSalarioPorComision();
            default:
                return new ValidadorSalarioFijo();
        }
    }
}

module.exports = { Validador };