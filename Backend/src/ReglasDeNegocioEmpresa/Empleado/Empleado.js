class Empleado{
    constructor(nombre, ci, calculadora, calculadoraFechaPago, metodoPago, perteneceASindicato =false ){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadora=calculadora;
        this.calculadoraFechaPago=calculadoraFechaPago;
        this.metodoPago=metodoPago;
        this.perteneceASindicato=perteneceASindicato;
    }
    calcularSalario(){
        return this.calculadora.calcularSalario(this.perteneceASindicato);
    }
    correspondePagar(fecha){
        return this.calculadoraFechaPago.correspondePagar(fecha);
    }
    obtenerNombre(){
        return this.nombre;
    }
    obtenerCi(){
        return this.ci;
    }
    obtenerMetodoPago(){
        return this.metodoPago.obtenerFormaDePagar();
    }
    notificar(){
        return "";
    }
}


module.exports = { Empleado };
