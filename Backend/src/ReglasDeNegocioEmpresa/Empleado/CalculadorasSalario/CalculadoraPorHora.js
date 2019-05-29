class CalculadoraPorHora {
    constructor(montoPorHora,tarjetaAsistencia){
        this.montoPorHora=montoPorHora;
        this.tarjetaAsistencia=tarjetaAsistencia;
    }
    calcularSalario(){
        return this.tarjetaAsistencia.calcularHorasTrabajadas()*this.montoPorHora;
    }

}
module.exports = { CalculadoraPorHora };
