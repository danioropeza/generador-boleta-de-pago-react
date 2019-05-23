var BoletaDePago = require('../boleta/boletaDePago').BoletaDePago;
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
        
    }
}


module.exports = { GeneradorBoletasDePago };