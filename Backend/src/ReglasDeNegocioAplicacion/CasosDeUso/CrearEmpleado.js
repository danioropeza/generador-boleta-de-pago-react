var BoletaDePago = require("../../ReglasDeNegocioEmpresa/GeneradorBoletas/Boleta/boletaDePago").BoletaDePago;
var Empleado = require("../../ReglasDeNegocioEmpresa/Empleado/Empleado.js").Empleado;
var AsistenciaPorDia = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/AsistenciaPorDia").AsistenciaPorDia;
var TarjetaAsistencia = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/TarjetaAsistencia").TarjetaAsistencia;
var CalculadoraPorHora = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorHora").CalculadoraPorHora;
var ClasificadorFechaDePagoFijo = require("../../ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoFijo").ClasificadorFechaDePagoFijo;
var ClasificadorFechaDePagoPorHora = require("../../ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoPorHora").ClasificadorFechaDePagoPorHora;
var ClasificadorFechaDePagoPorComision = require("../../ReglasDeNegocioEmpresa/Empleado/ClasificadoresFechaDePago/ClasificadorFechaDePagoPorComision").ClasificadorFechaDePagoPorComision;
var MetodoDePago = require("../../ReglasDeNegocioEmpresa/Empleado/MetodosPago/MetodoDePago").MetodoDePago;
var TarjetaVenta = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/Tarjetas/TarjetaVenta").TarjetaVenta;
var Facebook = require("../../ReglasDeNegocioEmpresa/Empleado/MetodosNotificacion/Facebook").Facebook;
var Whatsapp = require("../../ReglasDeNegocioEmpresa/Empleado/MetodosNotificacion/Whatsapp").Whatsapp;
var Email = require("../../ReglasDeNegocioEmpresa/Empleado/MetodosNotificacion/Email").Email;
var CalculadoraPorFijo = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorFijo").CalculadoraPorFijo;
var CalculadoraPorHora = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorHora").CalculadoraPorHora;
var CalculadoraPorComision = require("../../ReglasDeNegocioEmpresa/Empleado/CalculadorasSalario/CalculadoraPorComision").CalculadoraPorComision;

class CrearEmpleado {
    constructor(repositorio, datosEmpleado) {
        this.repositorio = repositorio;
        this.datosEmpleado = datosEmpleado;
        this.listaDeEmpleados = [];
    }
    crearEmpleadoNuevo()
    {
        var calculadora, clasificador;
        if(this.datosEmpleado.tipo == 'Fijo') {
            calculadora = new CalculadoraPorFijo(this.datosEmpleado.salario,this.datosEmpleado.fechaInicioLaboral);
            clasificador = new ClasificadorFechaDePagoFijo();
        }

        if(this.datosEmpleado.tipo == 'Parcial') {
            var tarjetaAsistencia = new TarjetaAsistencia();
            calculadora = new CalculadoraPorHora(this.datosEmpleado.montoPorHora, tarjetaAsistencia);
            clasificador= new ClasificadorFechaDePagoPorHora();
        }

        if(this.datosEmpleado.tipo == 'Comision') {
            var tarjetaVenta = new TarjetaVenta();
            calculadora = new CalculadoraPorComision(this.datosEmpleado.salarioBase,this.datosEmpleado.comision, tarjetaVenta);
            clasificador= new ClasificadorFechaDePagoPorComision();
        }

        let metodoDePago = new MetodoDePago(this.datosEmpleado.metodoDePago);

        let empleado = new Empleado(this.datosEmpleado.nombre, this.datosEmpleado.ci, calculadora, clasificador, metodoDePago);
       
        this.datosEmpleado.metodosDeNotificacion.forEach((metodoNotificacion) => {
            if(metodoNotificacion =='Facebook')
                empleado = new Facebook(empleado);
            if(metodoNotificacion =='Whatsapp')
                empleado = new Whatsapp(empleado);
            if(metodoNotificacion =='Email')
                empleado = new Email(empleado);
        });
       
        //console.log(Empleado)
        this.repositorio.insertarEmpleado(empleado);
    }
}

module.exports = { Interactor: CrearEmpleado }