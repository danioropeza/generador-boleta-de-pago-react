var BoletaDePago = require("../boleta/boletaDePago").BoletaDePago;
var Empleado = require("../empleado/Empleado.js").Empleado;
var AsistenciaPorDia = require("../tarjetas/AsistenciaPorDia").AsistenciaPorDia;
var TarjetaAsistencia = require("../tarjetas/TarjetaAsistencia").TarjetaAsistencia;
var CalculadoraPorHora = require("../calculadoraSalario/CalculadoraPorHora").CalculadoraPorHora;
var ClasificadorFechaDePagoFijo = require("../calculadoraFechaDePago/ClasificadorFechaDePagoFijo").ClasificadorFechaDePagoFijo;
var ClasificadorFechaDePagoPorHora = require("../calculadoraFechaDePago/ClasificadorFechaDePagoPorHora").ClasificadorFechaDePagoPorHora;
var ClasificadorFechaDePagoPorComision = require("../calculadoraFechaDePago/ClasificadorFechaDePagoPorComision").ClasificadorFechaDePagoPorComision;
var MetodoDePago = require("../metodoDePago/MetodoDePago").MetodoDePago;
var TarjetaVenta = require("../tarjetas/TarjetaVenta").TarjetaVenta;
var Facebook = require("../notificaciones/Facebook").Facebook;
var Whatsapp = require("../notificaciones/Whatsapp").Whatsapp;
var Email = require("../notificaciones/Email").Email;
var CalculadoraPorFijo = require("../calculadoraSalario/CalculadoraPorFijo").CalculadoraPorFijo;
var CalculadoraPorHora = require("../calculadoraSalario/CalculadoraPorHora").CalculadoraPorHora;
var CalculadoraPorComision = require("../calculadoraSalario/CalculadoraPorComision").CalculadoraPorComision;

class Interactor {
    constructor(repositorio, datosEmpleado) {
        this.repositorio = repositorio;
        this.datosEmpleado = datosEmpleado;
        this.listaDeEmpleados = [];
    }
    generarBoletasDePagoParaTodosLosEmpleados()
    {
        for (let empleado of this.empleados) {
            let boletaDePago = new BoletaDePago();
            boletaDePago = boletaDePago.generarBoleta(empleado);
            this.boletasGeneradas.push(boletaDePago);
        }

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
        //console.log(empleado)
        this.repositorio.insertarEmpleado(empleado);
    }
    verDatosEmpleado(ci){

    }
    actualizarEmpleado(empleado, datosNuevoEmpleado){
        this.repositorio.actualizarEmpleado(empleado, datosNuevoEmpleado);
    }

}

module.exports = { Interactor }