var funciones_fecha  = require("../FuncionesFecha");

class ValidadorSalarioFijo {
    constructor() {
        this.validador = this.validadorSalarioFijo.bind(this);
    }
    validadorSalarioFijo(fecha_actual) {
        let fecha = new Date(fecha_actual);
        return fecha.getDate()==funciones_fecha.calcularUltimoDiaHabilDelMes(fecha);
    }

}
module.exports = { ValidadorSalarioFijo };