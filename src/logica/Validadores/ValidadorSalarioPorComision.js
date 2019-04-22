
var funcionesFecha  = require("../FuncionesFecha");

class ValidadorSalarioPorComision {
    constructor() {
        this.validador = this.validadorSalarioPorComision.bind(this);
    }
    validadorSalarioPorComision(fechaActual) {
        return funcionesFecha.esViernes(fechaActual) && funcionesFecha.esSemanaPar(fechaActual);
    }



}
module.exports = { ValidadorSalarioPorComision };