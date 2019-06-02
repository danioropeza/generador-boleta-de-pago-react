const montoDescuentoSindicato=10;

class CalculadoraPorHora {
    constructor(montoPorHora,tarjetaAsistencia){
        this.montoPorHora=montoPorHora;
        this.tarjetaAsistencia=tarjetaAsistencia;
    }
    calcularSalario(perteneceASindicato){
        let descuentosSindicato=0;
        if(perteneceASindicato)
            descuentosSindicato = montoDescuentoSindicato;
        return this.tarjetaAsistencia.calcularHorasTrabajadas()*this.montoPorHora -descuentosSindicato;
    }

}
module.exports = { CalculadoraPorHora };
