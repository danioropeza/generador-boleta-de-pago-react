var funcionesFecha  = require("../FuncionesFecha");

class ValidadorSalarioPorHora {
    constructor() {
        this.validador = this.validadorSalarioPorHora.bind(this);
    }
    validadorSalarioPorHora(fechaActual) {
        return funcionesFecha.esViernes(fechaActual);
    }



}
module.exports = { ValidadorSalarioPorHora };