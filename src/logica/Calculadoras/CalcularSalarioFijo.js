var funciones_fecha  = require("../FuncionesFecha");


class CalcularSalarioFijo{
    constructor(empleado) {
        this.empleado = empleado;
        this.fecha_inicio_trabajo = new Date(empleado.fecha_inicio);
        this.obtenerSalario = this.calcularSalarioFijo.bind(this);
    }
    calcularSalarioFijo(){
        if(this.empezoATrabajarRecien()){
            return this.obtenerSueldoDiasRestantesDelMes();
        }
        return this.empleado.salario;
    }
    obtenerSueldoDiasRestantesDelMes(){
        let salario_dia = this.calcularSalarioDia();
        let dias_trabajados = funciones_fecha.contarDiasHabilesDeUnMesDesde(this.fecha_inicio_trabajo.getDate(),this.fecha_inicio_trabajo);
        return Math.round(salario_dia*dias_trabajados);
    }

    calcularSalarioDia() {
        return this.empleado.salario / funciones_fecha.contarDiasHabilesDeUnMesDesde(1,this.fecha_inicio_trabajo);
    }

    empezoATrabajarRecien() {
        return this.empezoATrabajarEsteMes() && this.empezoATrabajarEsteAnio();
    }

    empezoATrabajarEsteMes(){
        return this.fecha_inicio_trabajo.getMonth()==(new Date().getMonth());
    }

    empezoATrabajarEsteAnio(){
        return this.fecha_inicio_trabajo.getFullYear()==(new Date().getFullYear());
    }

}
module.exports = { CalcularSalarioFijo };