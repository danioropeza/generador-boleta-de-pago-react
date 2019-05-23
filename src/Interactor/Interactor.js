var BoletaDePago = require("../boleta/boletaDePago").BoletaDePago;
var Empleado = require("../empleado/Empleado.js").Empleado;
var AsistenciaPorDia = require("../tarjetas/AsistenciaPorDia").AsistenciaPorDia;
var TarjetaAsistencia = require("../tarjetas/TarjetaAsistencia").TarjetaAsistencia;
var CalculadoraPorHora = require("../calculadoraSalario/CalculadoraPorHora").CalculadoraPorHora;
var ClasificadorDeFechaDePagoFijo = require("../calculadoraFechaDePago/ClasificadorFechaDePagoFijo").ClasificadorDeFechaDePagoFijo;
var ClasificadorDeFechaDePagoPorHora = require("../calculadoraFechaDePago/ClasificadorFechaDePagoPorHora").ClasificadorDeFechaDePagoPorHora;
var ClasificadorDeFechaDePagoPorComision = require("../calculadoraFechaDePago/ClasificadorFechaDePagoPorComision").ClasificadorDeFechaDePagoPorComision;
var MetodoDePago = require("../metodoDePago/MetodoDePago").MetodoDePago;
var TarjetaVenta = require("../tarjetas/TarjetaVenta").TarjetaVenta;
var Facebook = require("../notificaciones/Facebook").Facebook;

class Interactor {
    constructor(repositorio) {
        this.repositorio = repositorio;
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
    crearEmpleadoNuevo(datosEmpleado)
    {
        var calculadora, clasificador;
        if(datosEmpleado.tipo == 'Fijo') {
            calculadora = new CalculadoraPorFijo(datosEmpleado.salario,datosEmpleado.fechaIncioLaboral);
            clasificador = new ClasificadorDeFechaDePagoPorFijo();
        }
        if(datosEmpleado.tipo == 'Parcial') {
            var tarjetaAsistencia = new TarjetaAsistencia();
            calculadora = new CalculadoraPorHora(datosEmpleado.montoPorHora, tarjetaAsistencia);
            clasificador= new ClasificadorDeFechaDePagoPorHora();
        }
        if(datosEmpleado.tipo == 'Comision') {
            var tarjetaVenta = new TarjetaVenta();
            calculadora = new CalculadoraPorComison(datosEmpleado.salarioBase,datosEmpleado.comision, tarjetaVenta);
            clasificador= new ClasificadorDeFechaDePagoPorComision();
        }

        let metodoDePago = new MetodoDePago(datosEmpleado.metodoDePago);

        let empleado = new Empleado(datosEmpleado.nombre, datosEmpleado.ci, calculadora, clasificador, metodoDePago);
        datosEmpleado.metodosDeNotificacion.forEach(metodoNotificacion, () => {
            if(metodoNotificacion =='Facebook')
                empleado = new Facebook(empleado);
            if(metodoNotificacion =='Whatsapp')
                empleado = new Whatsapp(empleado);
            if(metodoNotificacion =='Email')
                empleado = new Email(empleado);

        });

        this.repositorio.insertarEmpleado(empleado);
    }
    verDatosEmpleado(ci){

    }
    actualizarEmpleado(empleado, datosNuevoEmpleado){
        this.repositorio.actualizarEmpleado(empleado, datosNuevoEmpleado);
    }

}

module.exports = { Interactor }