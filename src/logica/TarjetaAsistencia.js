class TarjetaAsistencia {
    constructor() {
        this.asistencias= [];
    }
    agregarAsistencia(asistencia){
        this.asistencias.push(asistencia);
    }
    calcularHorasTrabajadas(){
        let horasTrabajadas = 0;
        for(let i = 0; i < this.asistencias.length; i++){
            horasTrabajadas += this.asistencias[i].calcularHoras();
        }
        return horasTrabajadas;
    }
}

module.exports = { TarjetaAsistencia };