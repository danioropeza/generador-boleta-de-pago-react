class TarjetaAsistencia {
    constructor() {
        this.asistencias= [];
    }
    agregarAsistencia(asistencia){
        this.asistencias.push(asistencia);
    }
    calcularHorasTrabajadas(){
        let horas_trabajadas = 0;
        for(let i = 0; i < this.asistencias.length; i++){
            horas_trabajadas += this.asistencias[i].calcularHoras();
        }
        return horas_trabajadas;
    }
}

module.exports = { TarjetaAsistencia };