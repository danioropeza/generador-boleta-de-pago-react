class AsistenciaDia {
    constructor(horaDeIngreso, horaDeSalida, fecha) {
        this.horaDeIngreso = horaDeIngreso;
        this.horaDeSalida = horaDeSalida;
        this.fecha = fecha;
    }
    calcularHoras(){
        let horasTrabajadas = this.horaDeSalida-this.horaDeIngreso;
        if(this.sonMasDeOchoHoras(horasTrabajadas))
            horasTrabajadas = horasTrabajadas + this.calcularHorasExtra(horasTrabajadas);
        return horasTrabajadas;
    }
    sonMasDeOchoHoras(horasTrabajadas){
        return horasTrabajadas>8;
    }
    calcularHorasExtra(horasTrabajadas){
        return (horasTrabajadas-8)*0.5;
    }
}
module.exports = { AsistenciaDia };