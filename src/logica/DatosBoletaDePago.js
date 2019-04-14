const CalcularSalario = require("./Calculadoras/CalcularSalario").CalcularSalario;
const Validador = require("./Validadores/Validador").Validador;

class DatosBoletaDePago {
    constructor(empleado) {
        this.calcular_salario = new CalcularSalario(empleado).calculadorDeSalario;
        this.validador = new Validador(empleado.tipo).validador;

        this.empleado = empleado;
        this.fecha_pago = String(new Date()).slice(0, 15);
        this.salario = this.calcular_salario();        
    }
    get monto() {
        return this.salario;
    }
}
module.exports = { DatosBoletaDePago };
