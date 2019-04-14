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
        let dias_trabajados = this.contarDiasHabilesDeUnMesDesde(this.fecha_inicio_trabajo.getDate());
        return Math.round(salario_dia*dias_trabajados);
    }

    calcularSalarioDia() {
        return this.empleado.salario / this.contarDiasHabilesDeUnMesDesde(1);
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

    calcularDiasDeUnMes(mes, año) {
        return new Date(año, mes+1, 0).getDate();
    }
    contarDiasHabilesDeUnMesDesde(dia){
        let cantidad_dias = this.calcularDiasDeUnMes(this.fecha_inicio_trabajo.getMonth(),this.fecha_inicio_trabajo.getFullYear());
        let cantidad_dias_habiles =0;
        for(let i=dia; i<=cantidad_dias; i++)
        {
            if(!this.esDiaNoHabil(new Date(this.fecha_inicio_trabajo.getFullYear(), this.fecha_inicio_trabajo.getMonth(), i))){
                cantidad_dias_habiles++;
            }
        }
        return cantidad_dias_habiles;
    }
    esDiaNoHabil(fecha){
        return this.esDomingo(fecha) || this.esSabado(fecha);
    }
    esDomingo(fecha) {
        return fecha.getDay() == 0;
    }

    esSabado(fecha) {
        return fecha.getDay() == 6;
    }
}
module.exports = { CalcularSalarioFijo };