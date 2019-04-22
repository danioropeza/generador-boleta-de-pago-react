var funcionesFecha  = require("../FuncionesFecha");


class CalcularSalarioFijo{
    constructor(empleado) {
        this.empleado = empleado;
        this.fechaInicioTrabajo = new Date(empleado.fechaInicio);
        this.obtenerSalario = this.calcularSalarioFijo.bind(this);
    }
    calcularSalarioFijo(){
        if(this.empezoATrabajarRecien()){
            return this.obtenerSueldoDiasRestantesDelMes();
        }
        return this.empleado.salario;
    }
    obtenerSueldoDiasRestantesDelMes(){
        let salarioDia = this.calcularSalarioDia();
        let diasTrabajados = funcionesFecha.contarDiasHabilesDeUnMesDesde(this.fechaInicioTrabajo.getDate(),this.fechaInicioTrabajo);
        return Math.round(salarioDia * diasTrabajados);
    }

    calcularSalarioDia() {
        return this.empleado.salario / funcionesFecha.contarDiasHabilesDeUnMesDesde(1,this.fechaInicioTrabajo);
    }

    empezoATrabajarRecien() {
        return this.empezoATrabajarEsteMes() && this.empezoATrabajarEsteAnio();
    }

    empezoATrabajarEsteMes(){
        return this.fechaInicioTrabajo.getMonth() == (new Date().getMonth());
    }

    empezoATrabajarEsteAnio(){
        return this.fechaInicioTrabajo.getFullYear() == (new Date().getFullYear());
    }

}
module.exports = { CalcularSalarioFijo };