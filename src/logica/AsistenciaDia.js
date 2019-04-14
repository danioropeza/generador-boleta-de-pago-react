class AsistenciaDia {
    constructor(hora_ingreso, hora_salida, fecha) {
        this.hora_ingreso = hora_ingreso;
        this.hora_salida = hora_salida;
        this.fecha = fecha;
    }
    calcularHoras(){
        return this.hora_salida - this.hora_ingreso;
    }
}
module.exports = { AsistenciaDia };