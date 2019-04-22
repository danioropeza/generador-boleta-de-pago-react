var funcionesFecha  = require("../FuncionesFecha");

class ValidadorSalarioFijo {
    constructor() {
        this.validador = this.validadorSalarioFijo.bind(this);
    }
    validadorSalarioFijo(fechaActual) {
        let fecha = new Date(fechaActual);
        return fecha.getDate() == funcionesFecha.calcularUltimoDiaHabilDelMes(fecha);
    }

}
module.exports = { ValidadorSalarioFijo };