var TarjetaVenta = require('./Tarjetas/TarjetaVenta').TarjetaVenta;
var TarjetaAsistencia = require('./Tarjetas/TarjetaAsistencia').TarjetaAsistencia;
var CalculadoraPorFijo = require('./CalculadoraPorFijo').CalculadoraPorFijo;
var CalculadoraPorHora = require('./CalculadoraPorHora').CalculadoraPorHora;
var CalculadoraPorComision = require('./CalculadoraPorComision').CalculadoraPorComision;

class CalculadoraSalarioFactory {
    constructor(tipo,datosEmpleado) {
        if(tipo=="Comision"){
            let tarjetaVenta = new TarjetaVenta();
            return new CalculadoraPorComision(datosEmpleado.salarioBase,datosEmpleado.comision, tarjetaVenta);
        }
        if(tipo=="Parcial") {
            let tarjetaAsistencia = new TarjetaAsistencia();
            return new CalculadoraPorHora(datosEmpleado.montoPorHora, tarjetaAsistencia);
        }
        if(tipo=="Fijo") {
            return new CalculadoraPorFijo(datosEmpleado.salario, datosEmpleado.fechaInicioLaboral);
        }
    }
}
module.exports= { CalculadoraSalarioFactory };
