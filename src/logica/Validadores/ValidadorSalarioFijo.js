class ValidadorSalarioFijo {
    constructor() {
        this.validador = this.validadorSalarioFijo.bind(this);
    }
    validadorSalarioFijo(fecha_actual) {
        let fecha = new Date(fecha_actual);

        return fecha.getDate()==this.calcularUltimoDiaHabilDelMes(fecha);
    }

    calcularUltimoDiaHabilDelMes(fecha_actual){
        let ultimoDia= new Date(fecha_actual.getFullYear(), fecha_actual.getMonth() + 1, 0);
        if(this.esSabado(ultimoDia))
            return ultimoDia.getDate()-1;
        if(this.esDomingo(ultimoDia))
            return ultimoDia.getDate()-2;

        return ultimoDia.getDate();
    }

    esDomingo(ultimoDia) {
        return ultimoDia.getDay() == 0;
    }

    esSabado(ultimoDia) {
        return ultimoDia.getDay() == 6;
    }
}
module.exports = { ValidadorSalarioFijo };