const montoDescuentoSindicato=10;
class CalculadoraPorComision {
    constructor(salarioBase, porcentajeComision, listaTarjetasVenta) {
        this.salarioBase = salarioBase;
        this.porcentajeComision = porcentajeComision;
        this.listaTarjetasVenta = listaTarjetasVenta;
    }
    calcularSalario(perteneceASindicato) {
        let descuentosSindicato=0;
        if(perteneceASindicato)
            descuentosSindicato = montoDescuentoSindicato;
        return this.salarioBase + (this.porcentajeComision * this.calcularMontoTotalDeVentas()) - descuentosSindicato;
    }
    calcularMontoTotalDeVentas() {
        let cantidadDeMonto = 0;
        for (let i = 0; i < this.listaTarjetasVenta.length; i++) {
            cantidadDeMonto = cantidadDeMonto + this.listaTarjetasVenta[i].obtenerMontoVendido();
        }
        return cantidadDeMonto;
    }
}
module.exports = { CalculadoraPorComision };
