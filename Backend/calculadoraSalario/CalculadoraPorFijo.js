const funcionesFecha = require("../otros/FuncionesFecha");

// name is a member of myModule due to the export above
class CalculadoraPorFijo {
    constructor(salario,fechaInicioTrabajo){
        this.salario=salario;
        this.fechaInicioTrabajo=fechaInicioTrabajo;
    }
    calcularSalario(){
        if(this.empezoATrabajarRecien()){
            return this.obtenerSueldoDiasRestantesDelMes();
        }
        return this.salario;
    }
    obtenerSueldoDiasRestantesDelMes(){

        let salarioDia = this.calcularSalarioDia();
        let diasTrabajados = funcionesFecha.contarDiasHabilesDeUnMesDesde(this.fechaInicioTrabajo.getDate(),this.fechaInicioTrabajo);
        return Math.round(salarioDia * diasTrabajados);
    }

    calcularSalarioDia() {
        return this.salario / funcionesFecha.contarDiasHabilesDeUnMesDesde(1,this.fechaInicioTrabajo);
    }

    empezoATrabajarRecien() {

        return this.empezoATrabajarEsteMes() && this.empezoATrabajarEsteAnio();
    }

    empezoATrabajarEsteMes(){
        return this.fechaInicioTrabajo.getMonth() === (new Date().getMonth());
    }

    empezoATrabajarEsteAnio(){
        return this.fechaInicioTrabajo.getFullYear() == (new Date().getFullYear());
    }

}
module.exports = { CalculadoraPorFijo };
