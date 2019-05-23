class BoletaDePago{
    constructor(){
        
    }
   
    generarBoleta(empleado){
        let boleta =       `BOLETA DE PAGO
                            Ci: ${empleado.obtenerCi()}
                            Empleado: ${empleado.obtenerNombre()}
                            Salario: ${empleado.calcularSalario()}
                            Tipo de moneda: Bs
                            Metodo de pago: ${empleado.obtenerMetodoPago()}`;
        return boleta;
    }
}


module.exports = { BoletaDePago };