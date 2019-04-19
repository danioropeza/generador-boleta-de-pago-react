
var funciones_fecha  = require("../FuncionesFecha");

class ValidadorSalarioPorComision {
    constructor() {
        this.validador = this.validadorSalarioPorComision.bind(this);
    }
    validadorSalarioPorComision(fechaActual) {
        return funciones_fecha.esViernes(fechaActual) && funciones_fecha.esSemanaPar(fechaActual);
    }



}
module.exports = { ValidadorSalarioPorComision };