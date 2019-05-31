var CalculadoraSalarioFactory = require('./CalculadorasSalario/CalculadoraSalarioFactory').CalculadoraSalarioFactory;
var ClasificadorFechaFactory = require('./ClasificadoresFechaDePago/ClasificadorFechaFactory').ClasificadorFechaFactory;
var MetodoPagoFactory = require('./MetodosPago/MetodoPagoFactory').MetodoPagoFactory;
var Empleado = require('./Empleado').Empleado;

class EmpleadoFactory {
    constructor(datosEmpleado) {
        var calculadoraSalario=new CalculadoraSalarioFactory(datosEmpleado.tipo,datosEmpleado);
        var clasificadorFecha = new ClasificadorFechaFactory(datosEmpleado.tipo);
        var metodoDePago = new MetodoPagoFactory(datosEmpleado.tipo);
        return new Empleado(datosEmpleado.nombre, datosEmpleado.ci, calculadoraSalario, clasificadorFecha, metodoDePago);
    }

}
module.exports= { EmpleadoFactory };
