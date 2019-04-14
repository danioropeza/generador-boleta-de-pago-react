var expect = require("chai").expect;


const Empleado = require("../src/logica/Empleado").Empleado;
const CalcularSalarioPorHora = require("../src/logica/Calculadoras/CalcularSalarioPorHora").CalcularSalarioPorHora;
const TarjetaAsistencia = require("../src/logica/TarjetaAsistencia").TarjetaAsistencia;
const AsistenciaDia = require("../src/logica/AsistenciaDia").AsistenciaDia;



describe("Calcular salario hora", function() {


    let empleado_hora = new Empleado({nombre: "Adrian Vargas",
        ci: "7711450",
        fecha_nacimiento: "tue mar 28 2009",
        tipo: "Parcial"});

    it("deberia obtener como monto 1000 cuando se genere la boleta de pago para un empleado que trabajo 5 horas cuyo salario por hora fue de 200bs", function() {
        let asistencia2= new AsistenciaDia(3,6,'tue mar 21 2009');
        let asistencia1= new AsistenciaDia(3,5,'tue mar 28 2009');

        let tarjeta_asistencia = new TarjetaAsistencia();
        tarjeta_asistencia.agregarAsistencia(asistencia1);
        tarjeta_asistencia.agregarAsistencia(asistencia2);

        empleado_hora.agregarTarjetaAsistencia(tarjeta_asistencia);

        let calculadora_hora = new CalcularSalarioPorHora(empleado_hora);
        expect(calculadora_hora.calcularSalarioPorHora()).equal(1000);
    });



});