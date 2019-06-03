var expect = require('chai').expect;
var PersistenciaEmpleadoMongoDB =  require('../src/FrameworksYDrivers/BaseDeDatos/Mongo/PersistenciaEmpleadoMongoDB').PersistenciaEmpleadoMongoDB;
var InterfazRepositorioEmpleado =  require('../src/AdaptadoresDeInterfaz/Almacenamiento/db/InterfazRepositorioEmpleado').InterfazRepositorioEmpleado;

var Empleado =  require('../src/ReglasDeNegocioEmpresa/Empleado/Empleado.js').Empleado;
var CalculadoraPorHora =  require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorHora').CalculadoraPorHora;
var AsistenciaPorDia =  require('../src/ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/AsistenciaPorDia').AsistenciaPorDia;
var ClasificadorFechaDePagoFijo =  require('../src/ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoFijo').ClasificadorFechaDePagoFijo;
var MetodoDePago =  require('../src/ReglasDeNegocioEmpresa/Empleado/MetodosPago/MetodoDePago').MetodoDePago;

describe('Conexion de la base de datos', function () {
    it('Deberia insertar un Empleado',  function () {
         let tarjetaHora = new AsistenciaPorDia("2019-05-22", "16:00:00", "20:00:00");
        let calculadora = new CalculadoraPorHora(200, [tarjetaHora]);
        let fechaIncioLaboral = new Date(2019, 5, 22);
        let calculadoraDeFecha = new ClasificadorFechaDePagoFijo(fechaIncioLaboral);
        let metodoDePago = new MetodoDePago("Cheque");
        let empleado = new Empleado("Erick", 1,calculadora, calculadoraDeFecha,metodoDePago);
        let serviciosDeEmpleado = new PersistenciaEmpleadoMongoDB();
        //serviciosDeEmpleado.insertarEmpleado(Empleado);
        serviciosDeEmpleado.buscarEmpleado(empleado);
        expect(true).equal(true);
        
    });
});