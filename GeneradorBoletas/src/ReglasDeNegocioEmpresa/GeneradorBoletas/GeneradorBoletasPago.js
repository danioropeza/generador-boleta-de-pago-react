var BoletaDePago = require('./Boleta/boletaDePago').BoletaDePago;
class GeneradorBoletasDePago{
    constructor(empleados){
        this.empleados=empleados;
        this.boletasGeneradas=[];
    }
   
    generarBoletasDePagoParaTodosLosEmpleados(){
        for (let empleado of this.empleados) {
            let boletaDePago = new BoletaDePago();
            boletaDePago = boletaDePago.generarBoleta(empleado);
            this.boletasGeneradas.push(boletaDePago);
        }
        return this.boletasGeneradas;
    }
}


module.exports = { GeneradorBoletasDePago: GeneradorBoletasDePago };