const esViernes  = require("../FuncionesFecha");

class ValidadorSalarioPorHora {
    constructor() {
        this.validador = this.validadorSalarioPorHora.bind(this);
    }
    validadorSalarioPorHora(fechaActual) {
        return esViernes(fechaActual);
    }



}
module.exports = { ValidadorSalarioPorHora };