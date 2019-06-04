class BoletaDePago{
    constructor(){
    }
   
    generarBoleta(empleado){
        let boleta =  {
            "ci": empleado.ci,
            "nombreEmpleado": empleado.nombre,
            "salario": empleado.salarioTotal,
            "tipoDeMoneda": "Bs",
            "metodoDePago": empleado.metodoPagoElejido
        }    
        return boleta;
    }
}


module.exports = { BoletaDePago };