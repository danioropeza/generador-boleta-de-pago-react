var funciones_fecha  = require("../FuncionesFecha");

class ValidadorSalarioPorHora {
    constructor() {
        this.validador = this.validadorSalarioPorHora.bind(this);
    }
    validadorSalarioPorHora(fechaActual) {
        return funciones_fecha.esViernes(fechaActual);
    }



}
module.exports = { ValidadorSalarioPorHora };