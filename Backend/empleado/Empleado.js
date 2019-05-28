class Empleado{
    constructor(nombre,ci,calculadora,calculadoraFechaPago,metodoPago){
        this.nombre=nombre;
        this.ci=ci;
        this.calculadora=calculadora;
        this.calculadoraFechaPago=calculadoraFechaPago;
        this.metodoPago=metodoPago;
    }
    calcularSalario(){
        return this.calculadora.calcularSalario();
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
