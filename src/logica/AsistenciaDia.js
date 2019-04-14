class AsistenciaDia {
    constructor(hora_ingreso, hora_salida, fecha) {
        this.hora_ingreso = hora_ingreso;
        this.hora_salida = hora_salida;
        this.fecha = fecha;
    }
    calcularHoras(){
        let horas_trabajadas = this.hora_salida-this.hora_ingreso;
        if(this.sonMasDeOchoHoras(horas_trabajadas))
            horas_trabajadas = horas_trabajadas + this.calcularHorasExtra(horas_trabajadas);
        return horas_trabajadas;
    }
    sonMasDeOchoHoras(horas_trabajadas){
        return horas_trabajadas>8;
    }
    calcularHorasExtra(horas_trabajadas){
        return (horas_trabajadas-8)*0.5;
    }
}
module.exports = { AsistenciaDia };